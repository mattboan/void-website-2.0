import fs from 'fs';
import path from 'path';

export interface CaseStudy {
    id: number;
    title: string;
    tags: string[];
    short_desc: string;
    header_images: string[];
    slug: string;
    content?: string;
    post_path: string;
}

/**
 * Gets the case studies from the JSON file
 */
export const get_case_studies = async (): Promise<CaseStudy[]> => {
    try {
        const projects_file_path = path.join(
            process.cwd(),
            '/case-studies/case-studies.json'
        );
        return JSON.parse(fs.readFileSync(projects_file_path, 'utf-8'));
    } catch (err) {
        return [];
    }
}

/**
 * Gets the case study with the given id
 */
export const get_case_study = async (id: string): Promise<CaseStudy | null> => {
    try {
        const case_studies = await get_case_studies();
        return case_studies.find((case_study) => Number(case_study.id) === Number(id)) || null;
    } catch (err) {
        return null;
    }
}

/**
 * Get a case study via it's slug 
 */
export const get_case_study_by_slug = async (slug: string): Promise<CaseStudy | null> => {
    try {
        const case_studies = await get_case_studies();
        return case_studies.find((case_study) => case_study.slug === slug) || null;
    } catch (err) {
        return null;
    }
}