import { IoMdNotifications } from "react-icons/io";

export default function ProfileComponent() {
	const userName = "Mohamed";
	return (
		<div className="prof-comp-div  h-12 gap-4 flex items-center justify-evenly ">
			{/* go to profile */}
			<div className="flex  justify-center items-center gap-2">
				{/* Profile picture */}
				<div className=" bg-grey-5 rounded-full w-8 h-8 flex items-center justify-center  shadow-2xl shadow-amber-400">
					M
				</div>
				{/* userName */}
				<div className="hidden xs:block clickable text-md  text-grey-5">
					{userName}
				</div>
			</div>

			{/* Notification icon  */}
			<IoMdNotifications className="text-2xl clickable" />
		</div>
	);
}
