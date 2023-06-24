import { Note } from './note';

export interface Tag {    
    _id: string;
    createdAt: string;
    lastModified: string;
    text: string;
    notes: Note;
}