import styles from "@/styles/case-study.module.scss";
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Footer } from '@/comps/Footer';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import prism from 'remark-prism';
import { CaseStudy, get_case_studies, get_case_study_by_slug } from '@/utils/case-studies.util';
import { Header } from '@/comps/Header';
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Call } from "@/comps/Call";

const CaseStudy = ({ case_study }: { case_study: CaseStudy }) => {
    const router = useRouter();
    const interval = 300;
    const [pos, setPos] = useState(0);

    useEffect(() => {
        // Clear the existing timer when the position changes
        const timer = setTimeout(() => {
            setPos((pos + 1) % case_study.header_images.length);
        }, 5000);

        return () => {
            clearTimeout(timer); // Clear the timer when the component unmounts or when pos changes
        };
    }, [pos, case_study.header_images.length]);

    return (
        <>
            <Head>
                <title>void - {case_study.title || ' Post'}</title>
                <meta name="description" content={case_study.short_desc || ''} />
            </Head>
            <main>
                <Header />
                <div className={styles.hero_spacer} />
                <div className={styles.hero_wrapper}>
                    {/* Gallery */}
                    <motion.div className={styles.gallery}
                        style={{
                            width: `${case_study.header_images.length * 100}%`,
                        }}
                        animate={{
                            x: `-${pos / case_study.header_images.length * 100}%`,
                        }}
                        transition={{
                            type: "spring",
                            stiffness: 100,
                            damping: 20,
                        }}
                    >
                        {case_study.header_images.map((img: string, index: number) => (
                            <div className={styles.gallery_item}
                                style={{
                                    backgroundImage: `url(${img})`,
                                    opacity: pos === index ? 1 : 0,
                                }}
                            />
                        ))}
                    </motion.div>

                    <div className={styles.hero}>
                        <div className={styles.hero_inner}>
                            <div className={styles.left}>
                                <div className={styles.case_study_tags}>
                                    {case_study?.tags?.map((tag: string) => (
                                        <div className={styles.case_study_tag}>
                                            {tag}
                                        </div>
                                    ))}
                                </div>
                                <h1>{case_study.title}</h1>
                                <p>{case_study.short_desc}</p>
                            </div>
                            <div className={styles.right}>
                                <div className={styles.case_study_nav}>
                                    {case_study.header_images.map((img: string, index: number) => (
                                        <div className={styles.case_study_nav_item_wrapper} onClick={() => setPos(index)}
                                        >
                                            <div className={styles.case_study_nav_item} id={`${index === pos ? styles.active : ''}`}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                {/* Main Content to render */}
                <div className={styles.main_con}>
                    <div
                        dangerouslySetInnerHTML={{
                            __html: case_study?.content || '',
                        }}
                    ></div>
                </div>

                <Call />

                <Footer />
            </main>
        </>
    );
};

export async function getStaticPaths() {
    const case_studies = await get_case_studies();

    const paths = await case_studies.map((case_study: CaseStudy) => ({
        params: {
            slug: case_study.slug,
        },
    }));

    return {
        paths,
        fallback: 'blocking',
    };
}

export async function getStaticProps({ params }: any) {
    const fs = require('fs');
    const path = require('path');

    let case_study = null;

    try {
        case_study = await get_case_study_by_slug(params?.slug);

        if (!case_study) {
            return {
                notFound: true,
            };
        }

        // Get the file path
        const file_path = path.join(process.cwd(), case_study.post_path);
        const temp = fs.readFileSync(file_path, 'utf-8');

        const matter_result = matter(temp);
        const parsed = await remark()
            .use(prism as any)
            .use(html, { sanitize: false }) // allow all HTML at your own risk
            .process(matter_result.content);

        case_study.content = parsed.toString();
    } catch (err) {
        console.error('Failed to load the file.', err);
    }

    return {
        props: {
            case_study: case_study,
            revalidate: 60000,
        },
    };
}

export default CaseStudy;
