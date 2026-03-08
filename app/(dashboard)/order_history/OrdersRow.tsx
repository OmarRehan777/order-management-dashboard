import RowLink from "./RowLink";
import type { Order } from "../../../types/order";
import { formatOrderDate } from "../../lib/dateFormatters";
import { calcOrderTotal } from "../../lib/calcOrderTotal";

export default function OrderRow({ order }: { order: Order }) {
	// Format the order's creation date for display
	const orderDateObject = formatOrderDate(order.createdAtISO);
	return (
		<tr className="bg-grey-3 rounded-lg hover:bg-grey-4 clickable active:scale-[1.01] relative text-sm font-medium">
			{/* --------------------           ID                 ---------------------------------- */}
			<td className=" ID px-4 py-3 rounded-l-lg relative hidden sm:table-cell">
				<RowLink orderId={order.id}></RowLink>
				{order.id}
			</td>
			{/* --------------------         Customer             ---------------------------------- */}
			<td className=" Customer px-4 py-3 relative rounded-l-lg sm:rounded-l-none">
				<RowLink orderId={order.id}></RowLink>
				{order.customerName}
			</td>
			{/* --------------------           date               ---------------------------------- */}
			<td className=" Date px-4 py-3 relative hidden xxxs:table-cell">
				<RowLink orderId={order.id}></RowLink>
				<span>{orderDateObject.date}</span>{" "}
				<span className="whitespace-nowrap hidden xs:inline">
					at {orderDateObject.time}
				</span>
			</td>
			{/* --------------------         Total             ---------------------------------- */}
			<td className=" Total px-4 py-3 relative hidden xs:table-cell">
				<RowLink orderId={order.id}></RowLink>
				{calcOrderTotal(order.items).toFixed(2)} EGP
			</td>
			{/* --------------------           Status             ---------------------------------- */}
			<td className=" Status px-4 py-3 rounded-r-lg relative  ">
				<RowLink orderId={order.id}></RowLink>

				{/* order status */}
				<div className="flex justify-end items-center w-full relative ">
					{/* <RowLink orderId={order.id}></RowLink> */}

					{/* order status */}
					<span
						className={`inline-flex items-center rounded-full px-3 py-1
            font-medium text-white 
            ${order.status === "cancelled" ? `bg-grey-4 ` : `bg-grey-1 `} `}
					>
						{order.status}
					</span>
				</div>
			</td>
		</tr>
	);
}

//  bg-orange-500/20 text-orange-300 border border-orange-500/30
