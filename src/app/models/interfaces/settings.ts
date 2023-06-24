import { ColorNames } from "./colors";

export interface Settings {
    _id?: string;
    sortBy: 'createdAt' | 'title' | 'text',
    sortDirection: 'desc' | 'asc',
    searchHighlightColor: ColorNames,
    mainPassword: string,
}