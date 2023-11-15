

import styles from "@/styles/blogs.module.scss";
import { Footer } from '@/comps/Footer';
import { Header } from '@/comps/Header';
import { CaseStudy, get_case_studies } from '@/utils/case-studies.util';
import Head from 'next/head';
import { useRouter } from "next/router";
import { Blog } from "@/utils/blogs.util";

const Blogs = ({ blogs }: { blogs: Blog[] }) => {
    const router = useRouter();

    return (
        <>
            <Head>
                <title>Void | Blog</title>
                <meta
                    name="description"
                    content=""
                />
            </Head>

            <main>
                <Header />

                <div className={styles.header}>
                    <h1>We push the boundaries of what's possible to create a future to strive towards.</h1>
                </div>

                <div className={styles.case_studies}>
                    {blogs?.map((blog: Blog) => (
                        <div></div>
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

export default Blogs;
