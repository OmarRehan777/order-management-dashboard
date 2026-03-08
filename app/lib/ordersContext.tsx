"use client";
// This file defines the OrdersContext and OrdersProvider components for managing the state of orders in the order management dashboard. It also provides a custom hook, useOrders, for easy access to the context value throughout the application.
import {
	createContext,
	useCallback,
	useContext,
	useMemo,
	useState,
	type ReactNode,
} from "react";
import mockOrders from "../../data/mockOrders"; //
import type { Order, OrderStatus } from "../../types/order"; //

type OrdersContextValue = {
	orders: Order[];
	setOrders: (value: React.SetStateAction<Order[]>) => void;
	updateOrderStatus: (orderId: string, status: OrderStatus) => void;
	getOrderById: (orderId: string) => Order | undefined;
};

const OrdersContext = createContext<OrdersContextValue | null>(null);

// Provider component to wrap the app and provide the orders context
export function OrdersProvider({ children }: { children: ReactNode }) {
	const [orders, setOrders] = useState<Order[]>(mockOrders);

	const updateOrderStatus = useCallback(
		(orderId: string, status: OrderStatus) => {
			setOrders((prev) =>
				prev.map((o) => (o.id === orderId ? { ...o, status } : o)),
			);
		},
		[],
	);

	const getOrderById = useCallback(
		(orderId: string) => {
			return orders.find((o) => o.id === orderId);
		},
		[orders],
	);

	// Memoize the context value to prevent unnecessary re-renders
	const value = useMemo(
		() => ({ orders, setOrders, updateOrderStatus, getOrderById }),
		[orders],
	);

	return (
		<OrdersContext.Provider value={value}>
			{children}
		</OrdersContext.Provider>
	);
}

// Custom hook to ensure the context is used within a provider and to provide easy access to the context value
export function useOrders() {
	const ctx = useContext(OrdersContext);
	if (!ctx) throw new Error("useOrders must be used within OrdersProvider");
	return ctx;
}
