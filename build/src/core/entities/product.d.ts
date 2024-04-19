import { EmbaddedCategory } from "../embadded/category.js";
export interface ProductEntity {
    id: string;
    slug: string;
    decoration: ProductDecoration | null;
    name: string | null;
    photoUrl: string | null;
    media: string[];
    storeId: string;
    category: EmbaddedCategory;
    title: string | null;
    description: string | null;
    body: string | null;
    sku: string | null;
    price: number;
    discount: number | null;
    stock: number;
    sold: number;
    views: number;
    likes: number;
    dislikes: number;
    variant?: ProductVariant | null;
    metadata: Record<string, any>;
    status: ProductStatus;
    type: ProductType;
    verifiedAt: any | null;
    blockedAt: any | null;
    createdAt: any;
    updatedAt: any;
}
export declare enum ProductStatus {
    draft = "draft",
    published = "published",
    archived = "archived",
    deleted = "deleted"
}
export interface ProductDecoration {
    metadata: Record<string, any>;
}
export interface ProductVariant {
    name: string;
    options: ProductVariantOption[];
}
export interface ProductVariantOption {
    name: string;
    sku?: string | null;
    price?: number | null;
    discount?: number | null;
    stock?: number | null;
    sold?: number | null;
    type?: VariantOptionType;
    child?: ProductVariant | null;
    mediaIndex?: number | null;
    hint?: string | null;
}
export declare enum VariantOptionType {
    color = "color",
    image = "image",
    text = "text"
}
export declare enum ProductType {
    physical = "physical",
    digital = "digital",
    service = "service"
}
