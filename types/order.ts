export type OrderStatus =
	| "pending"
	| "preparing"
	| "completed"
	| "delivered"
	| "cancelled";

export type PaymentMethod = "cash" | "card";

export type OrderItem = {
	id: string;
	productId: string;
	quantity: number;
	unitPriceAtOrder: number; // Snapshot to ensure price consistency even if product price changes later
};

export type Order = {
	id: string;
	orderNumber: number;
	customerName: string;
	status: OrderStatus;
	createdAtISO: string; // "2026-01-03T15:34:00Z"
	items: OrderItem[];
	paymentMethod: PaymentMethod;
};
