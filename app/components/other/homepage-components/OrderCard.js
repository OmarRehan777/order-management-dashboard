import ViewAll from "./ViewAll";
import OrderItem from "./OrderItem";
import OrderStatus from "./OrderStatus";

export default function OrderCard() {
	const itemsArray = [
		{ id: 1, item: "Mocca", count: 1 },
		{ id: 2, item: "Cappuccino", count: 2 },
		{ id: 3, item: "Espresso", count: 1 },
		{ id: 4, item: "Latte", count: 1 },
		// { id: 5, item: "Macchiato", count: 1 },
	];
	return (
		<div className=" order-card-container transition-transform hover:-translate-y-2 duration-300 shrink-0 w-60 h-80 xs:w-80 xs:h-100 gradient-grey-4 rounded-2xl p-4 flex flex-col justify-between ">
			{/* header */}
			<div className="card-header  h-1/7 flex justify-between ">
				<div className="order-meta-data flex flex-col justify-center">
					<div className="order-number font-bold">Order #126</div>
					<div className="order-date text-sm font-normal text-grey-5">
						2026-1-3 15:34
					</div>
				</div>
				<div className="order-customer-prof shrink-0 aspect-square h-full rounded-full bg-grey-5"></div>
			</div>

			{/* order-content */}
			<div className="card-content h-5/8 flex flex-col gap-4 items-center">
				{itemsArray.slice(0, 2).map((item) => {
					return (
						<OrderItem
							key={item.id}
							item={item.item}
							count={item.count}
						></OrderItem>
					);
				})}
				{itemsArray.length > 2 ? <ViewAll></ViewAll> : false}
			</div>

			{/* footer */}
			<div className="card-footer pt-1  border-t border-grey-5/40  h-1/7 flex justify-between items-end">
				<div className="order-summary h-11/12 flex flex-col justify-center ">
					<div className="order-items-count text-sm font-normal text-grey-5">
						X 2 items
					</div>
					<div className="order-total">$14</div>
				</div>
				<OrderStatus></OrderStatus>
			</div>
		</div>
	);
}
