import OrderRow from "./OrdersRow";
export default function OrderTable() {
	return (
		<table className="w-full border-separate border-spacing-y-2 ">
			<thead className="text-left text-white">
				<tr>
					<th className="px-4 py-2 ">ID</th>
					<th className="px-4 py-2">Customer</th>
					<th className="px-4 py-2 hidden sm:table-cell">Menu</th>
					<th className="px-4 py-2 hidden xs:table-cell">Date</th>
					<th className="px-7 py-2  ">Status</th>
				</tr>
			</thead>

			<tbody>
				<OrderRow></OrderRow>
				<OrderRow></OrderRow>
				<OrderRow></OrderRow>
				<OrderRow></OrderRow>
				<OrderRow></OrderRow>
			</tbody>
		</table>
	);
}
