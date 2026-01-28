import { IoSearchSharp } from "react-icons/io5";


export default function SearchBar() {
	return (
		<div
			className="search-bar-div text-white relative  flex items-center justify-center
		 w-36  xxs:w-50 xs:w-56 sm:w-80 
		 h-10 ml-10 lg:ml-0 "
		>
			<input
				className="font-medium  w-full h-full  bg-grey-4 rounded-md focus:outline-none pl-10 
				pr-2"
				placeholder="Search"
			/>
			<IoSearchSharp className="text-2xl shrink-0 absolute top-2 left-2" />
		</div>
	);
}

//  w-36  xs:w-60 sm:w-36 md:w-60
