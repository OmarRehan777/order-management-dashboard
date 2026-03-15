// This helper function takes the user role and order status as input and returns an object that contains the capabilities of the user for that order based on their role and the order status. This allows us to centralize the permission logic in one place and easily manage it as our application grows.
import { UserRole } from "../../types/user";
import { Order } from "../../types/order";
import { RoleCapabilities } from "../../types/RoleCapabilities";
import { isFinishedOrder } from "./orderFilters";

export function getOrderCapabilities(
	role: UserRole,
	order: Order,
): RoleCapabilities {
	const isFinished = isFinishedOrder(order); ;

	if (role === "admin") {
		return {
			canCreateOrder: true,
			canEditItems: !isFinished,
			canEditCustomer: !isFinished,
			canEditStatus: true,
			canCancelOrder: !isFinished,
			canManageProducts: true,
			canViewStatistics: true,
		};
	}

	if (role === "cashier") {
		return {
			canCreateOrder: true,
			canEditItems: !isFinished,
			canEditCustomer: !isFinished,
			canEditStatus: !isFinished,
			canCancelOrder: status === "pending" || status === "preparing",
			canManageProducts: false,
			canViewStatistics: false,
		};
	}

	return {
		canCreateOrder: false,
		canEditItems: false,
		canEditCustomer: false,
		canEditStatus:
			status === "pending" ||
			status === "preparing" ||
			status === "completed",
		canCancelOrder: false,
		canManageProducts: false,
		canViewStatistics: false,
	};
}
