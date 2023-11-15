import path from "path";
import fs from 'fs';


export interface Blog {
    id: number;
    title: string;
    tags: string[];
    short_desc: string;
    header_image: string;
    slug: string;
    content?: string;
    post_path: string;
}

/**
 * Get the blogs from the JSON file
 */
export const get_blogs = async (): Promise<Blog[]> => {
    try {
        const projects_file_path = path.join(
            process.cwd(),
            '/blogs/blogs.json'
        );
        return JSON.parse(fs.readFileSync(projects_file_path, 'utf-8'));
    } catch (err) {
        return [];
    }
}


/**
 * Gets the blog with the given id
 */
export const get_blog = async (id: string): Promise<Blog | null> => {
    try {
        const blogs = await get_blogs();
        return blogs.find((blog) => Number(blog.id) === Number(id)) || null;
    } catch (err) {
        return null;
    }
}

/**
 * Get a blog via it's slug 
 */
export const get_blog_by_slug = async (slug: string): Promise<Blog | null> => {
    try {
        const blogs = await get_blogs();
        return blogs.find((blog) => blog.slug === slug) || null;
    } catch (err) {
        return null;
    }
}