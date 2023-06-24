import { Tag } from './tag';

export interface Note {
    _id?: string,
    createdAt: string;
    lastModified: string;
    password?: string;
    title: string;
    text: string;
    tags: Tag[],
    deletedAt?: number,
}