import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

export default function OrderDetailsPage() {
	// reusable styles
	const sectionsStyles = "bg-grey-3 p-2 px-5 rounded-lg flex";
	const buttonStyle =
		"p-2 gradient-orange-button gradient-orange clickable rounded-lg w-40 xxxs:w-56 xxs:w-76 min-[500px]:w- ";

	return (
		<div className="order-details-container flex flex-col gap-3 text-lg font-medium ">
			<Link
				href={"/order_history"}
				className=" font-medium  hover:text-grey-5  w-fit"
			>
				<div className="flex items-center gap-2">
					<FaArrowLeft /> back to order
				</div>
			</Link>

			<div
				className={` ${sectionsStyles} first-section flex-wrap justify-between items-center gap-3 `}
			>
				<div className=" ">Order #215</div>
				<div className=" ">Completed</div>
			</div>
			{/* ------------------------------------------------------------- */}
			{/* ---------------------- GENERAL ORDER DATA ------------------- */}
			{/* ------------------------------------------------------------- */}
			<div className={` ${sectionsStyles} second-section flex-col `}>
				<div className="py-2  flex justify-between items-center  border-b border-white/20">
					<span>Customer</span> <span>Jeremmy Passion</span>
				</div>
				<div className="py-2  flex justify-between items-center border-b border-white/20 gap-2">
					<span className="">Order date</span>
					<div className="text-md  text-right">
						<span>22 Mei 2021,</span>
						<span className="whitespace-nowrap"> 12:21 PM</span>
					</div>
				</div>
				<div className="py-2  flex justify-between items-center">
					<span>Total</span> <span>$114 - Credit card</span>
				</div>
			</div>
			{/* -------------------------------------------------------------- */}
			{/* ------------------------ ORDER ITEMS ------------------------- */}
			{/* -------------------------------------------------------------- */}
			<div className={` ${sectionsStyles} third-section flex-col  `}>
				<div className="py-2  text-xl   font-bold">Order Items</div>
				<div className="py-2  border-t border-white/20 flex justify-between items-center">
					<span>2X Latte</span> <span>$20.00</span>
				</div>
				<div className="py-2  border-t border-white/20 flex justify-between items-center">
					<span>1X Cappuccino</span> <span>$20.00</span>
				</div>
				<div className="py-2  border-t border-white/20 flex justify-between items-center">
					<span>1X Mocca</span> <span>$20.00</span>
				</div>
			</div>
			{/* ------------------------------------------------------------- */}
			{/* ----------------------- ADMIN ACTIONS ----------------------- */}
			{/* ------------------------------------------------------------- */}
			<div
				className={` ${sectionsStyles} fourth-section flex-col justify-center  gap-2`}
			>
				<div className="p-2  border-b border-white/20 text-xl  font-bold w-full">
					Admin Actions
				</div>
				<div className="admin-actions-buttons-container flex flex-col items-center gap-1.5 min-[500px]:flex-row min-[500px]:justify-between">
					<button className={`${buttonStyle} `}>Change Status</button>
					<button className={buttonStyle}>Issues Refund</button>
					<button className={buttonStyle}>Print Invoice</button>
				</div>
			</div>
		</div>
	);
}
