// This file contains utility functions for filtering orders based on their status in the order management dashboard.
import type { Order, OrderStatus } from "../../types/order";

const ACTIVE_STATUSES: OrderStatus[] = ["pending", "preparing", "completed"];
const FINISHED_STATUSES: OrderStatus[] = ["delivered", "cancelled"];

export function isActiveOrder(order: Order): boolean {
	return ACTIVE_STATUSES.includes(order.status);
}

export function isFinishedOrder(order: Order): boolean {
	return FINISHED_STATUSES.includes(order.status);
}
