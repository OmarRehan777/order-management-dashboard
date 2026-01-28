import { FaRegEye } from "react-icons/fa6";

export default function ViewAll() {
	return (
		<div className="cursor-pointer hover:text-grey-5 active:text-grey-1 self-start h-1/11  px-1 flex items-center gap-1  text-sm font-medium">
			<FaRegEye className="text-lg" />
			<span className=" ">View all</span>
		</div>
	);
}
