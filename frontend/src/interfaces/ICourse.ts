export interface ICourse {
    _id: string;
    name: string;
    description: string;
    brief: string;
    price: number;
    imageUrl: string;
    category: string;
    stock: number;
    video: string;
    paypal: string;
    createdAt: Date;
    updatedAt: Date;
}
