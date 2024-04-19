export declare enum OrderStatus {
    draft = "draft",
    pending = "pending",
    processing = "processing",
    completed = "completed",
    cancelled = "cancelled"
}
export declare enum PaymentStatus {
    unpaid = "unpaid",
    paid = "paid",
    received = "received"
}
export declare enum DeliveryStatus {
    pending = "pending",
    delivering = "delivering",
    delivered = "delivered",
    returned = "returned"
}
export interface OrderEntity {
    id: string;
    customerName: string | null;
    customerPhone: string;
    customerIp: string | null;
    shippingAddress: string | null;
    shippingCity: string | null;
    shippingState: string | null;
    shippingMethodId: string | null;
    paymentMethodId: string | null;
    items: OrderItem[];
    subtotal: number;
    shippingPrice: number;
    total: number;
    discount: number;
    coupon: string | null;
    storeId: string;
    metadata: any;
    status: OrderStatus;
    paymentStatus: PaymentStatus;
    deliveryStatus: DeliveryStatus;
    createdAt: any;
    updatedAt: any;
}
export interface OrderItem {
    productId: string;
    productName: string;
    variantPath?: string;
    quantity: number;
    price: number;
}
