export interface Link {
    id?: string;
    name: string;
    url: string;
    tags: string[];
}

export interface Tag {
    tag: string;
    name: string;
}

export interface Tile {
    id?: string;
    category: string;
    icon: string;
    link: string;
    name: string;
    priority: number;
}

