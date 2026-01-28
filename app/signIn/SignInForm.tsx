"use client";
import Image from "next/image";
import OrangeButton from "../components/ui/OrangeButton";

export default function SignInForm() {
	return (
		<div className="flex flex-col justify-between items-center gap-1 w-60 h-90 md:w-80 font-medium p-4 text-white text-2l rounded-md ">
			<Image
				src="/images/cc-logo.png"
				width={100}
				height={100}
				alt="Logo of the brand"
			/>
			<label
				htmlFor="username"
				className="w-full text-gradient gradient-orange  ml-1 mt-4"
			>
				Username
			</label>
			<input
				id="username"
				className="w-full h-10 bg-transparent border border-white rounded-md focus:outline-none p-2 "
			/>

			<label
				htmlFor="password"
				className="w-full text-gradient gradient-orange   ml-1"
			>
				Password
			</label>
			<input
				id="password"
				type="password"
				className="w-full h-10 bg-transparent border border-white  rounded-md focus:outline-none p-2  "
			/>

			<OrangeButton className="text-white w-full h-10 rounded-md mt-4">
				Sign in
			</OrangeButton>
		</div>
	);
}
