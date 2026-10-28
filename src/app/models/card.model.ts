export type CardPriority = 'low' | 'medium' | 'high'


export interface Card{
    title: string;
    id: string;
    description?: string;
    createdAt: Date;
    priority: CardPriority;
}

