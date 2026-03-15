"use client";
import Image from "next/image";
import OrangeButton from "../components/ui/OrangeButton";

export default function SignInForm() {
	return (
		<div className="flex flex-col justify-between items-center gap-1 min-w-60 w-5/12 max-w-80 h-90  font-medium p-4 text-white text-2l rounded-md ">
			<Image
				src="/images/cc-logo.png"
				width={120}
				height={120}
				alt="Cairo Café logo"
			/>
			<label
				htmlFor="email"
				className="w-full text-gradient gradient-orange  ml-1 mt-4"
			>
				E-mail
			</label>
			<input
				id="email"
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
