import ProfileComponent from "./ProfileComponent";
import SearchBar from "./SearchBar";

type HeaderProps = {
	className?: string;
};

export default function Header({ className }: HeaderProps) {
	return (
		<div
			className={` ${className} Header-div
				bg-grey-2 w-full lg:w-[calc(100%-16rem)] 
				border-b border-grey-4  pl-4 pr-8 pt-4.5 pb-2 lg:pt-2
				shadow-grey-1 shadow-2xl 
				fixed 
				flex items-center justify-between `}
		>
			<SearchBar></SearchBar>
			<ProfileComponent></ProfileComponent>
		</div>
	);
}
