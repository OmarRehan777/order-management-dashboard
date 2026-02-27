import type { OrderItem } from "../../types/order";

export function calcOrderTotal(items: OrderItem[]): number {
	return items.reduce(
		(sum, item) => sum + item.quantity * item.unitPriceAtOrder,
		0,
	);
}
