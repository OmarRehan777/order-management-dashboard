import RowLink from "./RowLink";

export default function OrderRow() {
	return (
		<tr className="bg-grey-3 rounded-lg hover:bg-grey-4 clickable active:scale-[1.01] relative">
			{/* --------------------           ID                 ---------------------------------- */}
			<td className=" ID px-4 py-3 rounded-l-lg relative">
				<RowLink></RowLink>
				#215
			</td>
			{/* --------------------         Customer             ---------------------------------- */}
			<td className=" Customer px-4 py-3 relative">
				<RowLink></RowLink>
				Jeremmy Passion
			</td>
			{/* --------------------           menu               ---------------------------------- */}
			<td className=" Menu px-4 py-3 hidden sm:table-cell relative ">
				<RowLink></RowLink>
				Loin of Venison (2)
			</td>
			{/* --------------------           date               ---------------------------------- */}
			<td className=" Date px-4 py-3 hidden xs:table-cell relative">
				<RowLink></RowLink>
				<span>22 Mei 2021,</span>{" "}
				<span className="whitespace-nowrap">12:21 PM</span>
			</td>
			{/* --------------------           Status             ---------------------------------- */}
			<td className=" Status px-4 py-3 rounded-r-lg relative ">
				<RowLink></RowLink>

				{/* order status */}
				<span
					className="inline-flex items-center rounded-full px-3 py-1
					text-xs font-medium gradient-orange text-white "
				>
					COMPLETED
				</span>
			</td>
		</tr>
	);
}

//  bg-orange-500/20 text-orange-300 border border-orange-500/30
