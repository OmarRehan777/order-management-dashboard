// This file defines the valid transitions between order statuses in the order management system. It exports an object, orderTransitions, which maps each OrderStatus to an array of OrderStatuses that it can transition to. This is used in the application to ensure that status updates follow the defined workflow and to prevent invalid transitions.
import { OrderStatus } from "../../types/order";

export const orderTransitions: Record<OrderStatus, OrderStatus[]> = {
	pending: ["preparing", "cancelled"],

	preparing: ["completed", "cancelled"],

	completed: ["delivered"],

	delivered: [],

	cancelled: [],
};

export function getAllowedTransitions(status: OrderStatus): OrderStatus[] {
	return orderTransitions[status];
}
