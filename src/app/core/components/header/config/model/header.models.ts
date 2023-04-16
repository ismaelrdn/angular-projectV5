export interface HeaderLink {
    url: HeaderUrl;
    content: string
}

export type HeaderUrl = 'home' | 'car-list' | 'create-car' | 'about'