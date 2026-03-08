// This is the client component for displaying the details of a specific order, to seperate the client-side logic from the server-side page component.
"use client";

import { useOrders } from "../../../lib/ordersContext";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import { formatOrderDate } from "../../../lib/dateFormatters";
import { calcOrderTotal } from "../../../lib/calcOrderTotal";
import { getProductById } from "../../../lib/productMap";

type OrderDetailsClientProps = {
	orderId: string;
};

export default function OrderDetailsClient({
	orderId,
}: OrderDetailsClientProps) {
	// Get the order details using the getOrderById function from the OrdersContext
	const { getOrderById } = useOrders();

	// Fetch the order details based on the orderId
	const order = getOrderById(orderId);

	// Handle the case where the order is not found (e.g., invalid orderId)
	if (!order) return <div>Order not found!</div>;

	// reusable styles
	const sectionsStyles = "bg-grey-3 p-2 px-5 rounded-lg flex";
	const buttonStyle = `p-2 gradient-orange-button gradient-orange clickable rounded-lg w-full max-w-60  min-[600px]:w-40 `;

	// ---------------------------------------------------------------------------------------------
	// ----------------------------------- RENDERING THE COMPONENT ---------------------------------
	// ---------------------------------------------------------------------------------------------

	return (
		<div className="order-details-client-container w-8/10 min-w-76 max-w-150 p-2 flex flex-col gap-3 text-sm xs:text-base font-medium ">
			{/*  Back link to order history page */}
			<Link
				href={"/order_history"}
				className=" font-medium text-white hover:text-grey-5  w-fit"
			>
				<div className="flex items-center gap-2">
					<FaArrowLeft /> back to orders history
				</div>
			</Link>

			{/* order summary section */}
			<div
				className={` ${sectionsStyles} first-section flex-wrap justify-between items-center gap-3 `}
			>
				<div className="order-id ">{order?.id}</div>
				<span
					className={`inline-flex items-center rounded-full px-3 py-1
            font-medium text-white 
            ${order.status === "cancelled" ? `bg-grey-4 ` : `bg-grey-1 `} `}
				>
					{order.status}
				</span>
			</div>
			{/* ------------------------------------------------------------- */}
			{/* ---------------------- GENERAL ORDER DATA ------------------- */}
			{/* ------------------------------------------------------------- */}
			<div className={` ${sectionsStyles} second-section flex-col `}>
				{/* customer name */}
				<div className="py-2  flex justify-between items-center  border-b border-white/20">
					<span>Customer</span> <span>{order?.customerName}</span>
				</div>

				{/* order date and time */}
				<div className="py-2  flex justify-between items-center border-b border-white/20 gap-2">
					<span className="">Order date</span>
					<div className="text-md  text-right">
						<span>{formatOrderDate(order?.createdAtISO).date}</span>
						<span className="whitespace-nowrap">
							{" at "}
							{formatOrderDate(order?.createdAtISO).time}
						</span>
					</div>
				</div>

				{/* order total and payment method */}
				<div className="py-2  flex justify-between items-center">
					<span>Total</span>{" "}
					<span>
						{calcOrderTotal(order?.items)} EGP (
						{order?.paymentMethod})
					</span>
				</div>
			</div>
			{/* -------------------------------------------------------------- */}
			{/* ------------------------ ORDER ITEMS ------------------------- */}
			{/* -------------------------------------------------------------- */}
			<div className={` ${sectionsStyles} third-section flex-col  `}>
				<div className="py-2  text-base xs:text-lg text-center font-bold">
					Order Items
				</div>
				{order?.items.map((item) => (
					<div
						key={item.id}
						className="py-2  border-t border-white/20 flex justify-between items-center"
					>
						<span>
							{item.quantity}X{" "}
							{getProductById(item.productId)?.name || "Item"}
						</span>{" "}
						<span>{item.unitPriceAtOrder} EGP</span>
					</div>
				))}
			</div>
			{/* ------------------------------------------------------------- */}
			{/* ----------------------- ADMIN ACTIONS ----------------------- */}
			{/* ------------------------------------------------------------- */}
			<div
				className={` ${sectionsStyles} fourth-section flex-col justify-center  gap-2`}
			>
				<div
					className="p-2  border-b border-white/20 text-base 
				xs:text-lg text-center font-bold w-full"
				>
					Admin Actions
				</div>
				<div className="admin-actions-buttons-container flex flex-col items-center gap-1.5 min-[600px]:flex-row min-[500px]:justify-between">
					<button className={`${buttonStyle} `}>Change Status</button>
					<button className={buttonStyle}>Issues Refund</button>
					<button className={buttonStyle}>Print Invoice</button>
				</div>
			</div>
		</div>
	);
}
