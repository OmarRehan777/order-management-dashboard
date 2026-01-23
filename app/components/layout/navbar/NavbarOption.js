import { cloneElement } from "react";

export default function NavbarOption({ children, name, active }) {
	const iconsStyles = "text-2xl  shrink-0";

	const icon = cloneElement(children, {
		className: `${active ? "text-orange-3" : "text-white"}  ${iconsStyles}`,
	});
	return (
		<div
			className={` clickable 
				 w-full h-12 p-2 flex items-center gap-4 text-lg font-medium rounded-lg
				  ${
						active
							? "text-orange-3 border border-orange-3"
							: "text-white hover:bg-grey-5/5"
					}`}
		>
			{icon}
			{name}
		</div>
	);
}
