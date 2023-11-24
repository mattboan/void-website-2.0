import styles from "@/styles/blogs.module.scss";
import { Footer } from '@/comps/Footer';
import { Header } from '@/comps/Header';
import Head from 'next/head';
import { useRouter } from "next/router";
import { Blog, get_blogs } from "@/utils/blogs.util";

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
                    <h1>Blogs</h1>
                </div>

                <div className={styles.blogs}>
                    {blogs?.map((blog: Blog, i: number) => (
                        <div className={styles.blog} onClick={() => router.push(`/blogs/${blog.slug}`)}>
                            <div className={styles.blog_image}>
                                <img src={blog.header_image} />
                            </div>
                            <div className={styles.blog_content}>
                                <div className={styles.blog_tags}>
                                    {blog?.tags?.map((tag: string) => (
                                        <div className={styles.blog_tag}>
                                            {tag}
                                        </div>
                                    ))}
                                </div>
                                <h2>{blog.title}</h2>
                                <p>{blog.short_desc}</p>
                            </div>
                        </div>
                    ))}

                    {/* If the number is uneven */}
                    {blogs?.length % 2 != 0 && (
                        <div className={styles.blog}></div>
                    )}
                </div>

                <Footer />
            </main>
        </>
    );
};

export async function getStaticProps() {
    const blogs = await get_blogs();

    return {
        props: {
            blogs: blogs,
        },
    };
}

export default Blogs;
