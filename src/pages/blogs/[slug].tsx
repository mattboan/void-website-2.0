import styles from "@/styles/blog.module.scss";
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Footer } from '@/comps/Footer';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import prism from 'remark-prism';
import { Header } from '@/comps/Header';
import { Blog, get_blog_by_slug, get_blogs } from "@/utils/blogs.util";

const CaseStudy = ({ blog }: { blog: Blog }) => {
    const router = useRouter();

    // // 404 - if not exists
    // if (!blog) {
    //     return (
    //         <>
    //             <Head>
    //                 <title>void - Blog</title>
    //                 <meta
    //                     name="description"
    //                     content=""
    //                 />
    //             </Head>

    //             <main>
    //                 <Header />

    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />
    //                 <br />


    //                 <div className={styles.blogs}>
    //                     <div className={styles.blog}>
    //                         <div className={styles.blog_content}>
    //                             <h2>404 - Not Found</h2>
    //                             <p>Sorry, the blog you are looking for does not exist.</p>
    //                         </div>
    //                     </div>
    //                 </div>

    //                 <Footer />
    //             </main>
    //         </>
    //     );
    // }

    return (
        <>
            <Head>
                <title>void - {blog?.title || ' Post'}</title>
                <meta name="description" content={blog?.short_desc || ''} />
                <meta property="og:title" content={blog?.title || ""} />
                <meta property="og:description" content={blog?.short_desc || ""} />
                <meta property="og:image" content={blog?.header_image?.[0] || ""} />
                <meta property="og:type" content="website" />
            </Head>
            <main>
                <Header />
                <div className={styles.hero_spacer} />
                <div className={styles.hero_wrapper}>
                    {/* Gallery */}
                    <div className={styles.header_iamge}>
                        <div className={styles.header_image_inner}
                            style={{
                                backgroundImage: `url(${blog?.header_image})`,
                            }}
                        />
                    </div>
                    <div className={styles.hero}>
                        <div className={styles.hero_inner}>
                            <div className={styles.left}>
                                <div className={styles.blog_tags}>
                                    {blog?.tags?.map((tag: string) => (
                                        <div className={styles.blog_tag}>
                                            {tag}
                                        </div>
                                    ))}
                                </div>
                                <h1>{blog?.title}</h1>
                                <p>{blog?.short_desc}</p>
                                <p className={styles.author}>{blog?.author}</p>
                            </div>
                        </div>
                    </div>
                </div>


                {/* Main Content to render */}
                <div className={styles.main_con}>
                    <div
                        dangerouslySetInnerHTML={{
                            __html: blog?.content || '',
                        }}
                    ></div>
                </div>

                {/* <Call /> */}

                <Footer />
            </main>
        </>
    );
};

export async function getStaticPaths() {
    const blogs = await get_blogs();

    const paths = blogs.map((blog: Blog) => ({
        params: {
            slug: blog.slug,
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
    let blog = null;

    try {
        blog = await get_blog_by_slug(params?.slug);

        if (!blog) {
            return {
                notFound: true,
            };
        }

        // Get the file path
        const file_path = path.join(process.cwd(), blog.post_path);
        const temp = fs.readFileSync(file_path, 'utf-8');

        const matter_result = matter(temp);
        const parsed = await remark()
            .use(prism as any)
            .use(html, { sanitize: false }) // allow all HTML at your own risk
            .process(matter_result.content);

        blog.content = parsed.toString();
    } catch (err) {
        console.error('Failed to load the file.', err);
    }

    return {
        props: {
            blog: blog,
            revalidate: 60000,
        },
    };
}

export default CaseStudy;
