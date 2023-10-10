import styles from "@/styles/case-studies.module.scss";
import { Footer } from '@/comps/Footer';
import { Header } from '@/comps/Header';
import { CaseStudy, get_case_studies } from '@/utils/case-studies.util';
import Head from 'next/head';

const CaseStudies = ({ case_studies }: { case_studies: CaseStudy[] }) => {
    return (
        <>
            <Head>
                <title>void - blogs</title>
                <meta
                    name="description"
                    content="Explore a collection of insightful blogs by Matt (Void) covering various topics including web development, software trends, and industry insights. Stay informed and gain valuable knowledge in the world of development."
                />
            </Head>

            <main>
                <Header />

                <div className={styles.header}>
                    <h1>We push the boundaries of what's possible to create a future to strive towards.</h1>
                    <div className={styles.header_left}>
                        Selected works 2020-2023
                    </div>
                </div>

                <div className={styles.case_studies}>
                    {case_studies?.map((case_study) => (
                        <div className={styles.case_study}>
                            <div className={styles.case_study_image}>
                                <img src={case_study.header_images[0]} />
                            </div>
                            <div className={styles.case_study_content}>
                                <div className={styles.case_study_tags}>
                                    {case_study?.tags?.map((tag: string) => (
                                        <div className={styles.case_study_tag}>
                                            {tag}
                                        </div>
                                    ))}
                                </div>

                                <h2>{case_study.title}</h2>
                            </div>
                        </div>
                    ))}
                </div>


                <Footer />
            </main>
        </>
    );
};

export async function getStaticProps() {
    const case_studies = await get_case_studies();

    return {
        props: {
            case_studies: case_studies,
        },
    };
}

export default CaseStudies;
