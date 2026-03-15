import ViewAll from "./ViewAll";
import OrderItem from "./OrderItem";
import OrderStatusCard from "./OrderStatusCard";
import { Order } from "../../../../types/order";
import { calcOrderTotal } from "../../../lib/calcOrderTotal";
import { formatOrderDate } from "../../../lib/dateFormatters";

type orderCardProps = { order: Order };

export default function OrderCard({ order }: orderCardProps) {
	return (
		<div className=" order-card-container transition-transform hover:-translate-y-2 duration-300 shrink-0 w-60 h-80 xs:w-80 xs:h-100 gradient-grey-4 rounded-2xl p-4 flex flex-col justify-between ">
			{/* ---------------------------- header ---------------------------------- */}
			<div className="card-header  h-1/8 pb-1 flex justify-between border-b border-grey-5/40 ">
				<div className="order-meta-data flex flex-col justify-center">
					<div className="order-number font-bold">
						#{order.orderNumber}
					</div>
					<div className="order-date text-xs font-normal text-grey-5">
						{formatOrderDate(order.createdAtISO).full}
					</div>
				</div>
				<div className="order-customer-data  shrink-0 text-sm xs:text-base font-medium">
					{order.customerName}
				</div>
			</div>

			{/* --------------------------- order-content -------------------------------- */}

			<div className="card-content h-6/9 flex flex-col gap-4 items-center ">
				{order.items.map((item) => {
					return (
						<OrderItem
							key={item.id}
							productId={item.productId}
							quantity={item.quantity}
						></OrderItem>
					);
				})}
				{/* view all icon only appears if order has more than 2 items */}
				{/* {order.items.length > 2 ? <ViewAll></ViewAll> : false} */}
			</div>

			{/* ---------------------------- footer ----------------------------------- */}
			<div className="card-footer pt-1  border-t border-grey-5/40  h-1/7 flex justify-between items-end">
				<div className="order-summary h-11/12 flex flex-col justify-center ml-2">
					<div className="order-total text-base font-medium">
						{calcOrderTotal(order.items).toFixed(2)} EGP
					</div>
				</div>
				<OrderStatusCard status={order.status}></OrderStatusCard>
			</div>
		</div>
	);
}
