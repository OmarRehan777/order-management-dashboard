import OrangeButton from "../../ui/OrangeButton";

type CardDetailsModalMode = "create" | "edit";

type CardDetailsModalProps = {
	mode: CardDetailsModalMode;
	onClose?: () => void;
	className?: string;

	// اختياري: لو حبيت تكتب عنوان مختلف من برّه
	title?: string;
	subtitle?: string;
};

export default function CardDetailsModal({
	mode,
	onClose,
	className = "",
	title,
	subtitle,
}: CardDetailsModalProps) {
	const isCreate = mode === "create";

	return (
		<div
			role="dialog"
			aria-modal="true"
			aria-label={isCreate ? "Create order modal" : "Edit order modal"}
			className={`modal-level-layer fixed inset-0 z-30 main-scrollbar-orange text-sm
				flex items-center justify-center p-4 overflow-y-auto ${className}`}
		>
			<div
				className=" main-modal-container
          w-9/10 max-w-2xl  rounded-2xl gradient-grey-4 text-white mt-40 sm:mt-0
          shadow-2xl border border-white/10  scrollbar-orange
		  

        "
			>
				{/* Header */}
				<div className=" px-4 py-2 flex items-start justify-between border-b border-white/10">
					<div className="flex flex-col gap-1">
						<h2 className="text-lg font-bold">
							{title ??
								(isCreate ? "Create New Order" : "Edit Order")}
						</h2>
					</div>

					<button
						type="button"
						onClick={onClose}
						className="
					shrink-0 rounded-lg px-2 py-1 font-black text-sm
				bg-orange-700  border border-white/10 text-white 
				 hover:cursor-pointer hover:bg-orange-2
            "
						aria-label="Close modal"
					>
						✕
					</button>
				</div>

				{/* Body */}
				<div className="  px-4 py-3 xs:py-5 flex flex-col gap-4 font-medium">
					{/* MetaData row */}
					<div className="flex flex-col sm:flex-row gap-2 sm:gap-0 justify-between">
						<div className="xs:blur-effect rounded-xl px-2 py-1 w-full sm:w-[25%]  border border-white/10  text-center   flex justify-between items-center">
							<span className="text-white text-md">Order ID</span>
							<div className="font-semibold px-2 py-1">#123</div>
						</div>

						<div className="xs:blur-effect rounded-xl px-2 py-1 w-full sm:w-[35%] border border-white/10  text-center   flex justify-between items-center">
							<span className="text-white text-md">Status</span>
							<div className="mt-1">
								<select
									defaultValue="processing"
									className="bg-grey-2/60 border border-white/10 rounded-lg
									px-2 py-1 text-sm outline-none hover:cursor-pointer "
								>
									<option value="processing">
										processing
									</option>
									<option value="completed">completed</option>
									<option value="cancelled">cancelled</option>
								</select>
							</div>
						</div>

						<div
							className="xs:blur-effect rounded-xl px-2 py-1 w-full sm:w-[30%] 
						 border border-white/10  text-center   flex justify-between items-center "
						>
							<span className="text-white text-sm">Payment</span>
							<div className="mt-1">
								<select
									defaultValue="cash"
									className=" bg-grey-2/60 border border-white/10 rounded-lg
												px-2 py-1 text-sm outline-none hover:cursor-pointer"
								>
									<option value="cash">cash</option>
									<option value="card">card</option>
								</select>
							</div>
						</div>
					</div>

					{/* Form fields (UI فقط) */}
					<div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
						<div className="flex flex-col gap-1">
							<label className="text-sm text-white pl-1">
								Customer name
							</label>
							<input
								defaultValue=""
								placeholder="e.g. Mohamed"
								className="
                  bg-grey-2/60 border border-white/10 rounded-xl px-3 py-2
                  outline-none focus:border-white/30
                "
							/>
							{/* مكان رسالة error لو هتحطها بعدين */}
							<p className="text-xs text-orange-300/0 select-none">
								.
							</p>
						</div>

						<div className="flex flex-col gap-1">
							<label className="text-sm text-white pl-1">
								Phone (optional)
							</label>
							<input
								defaultValue=""
								placeholder="e.g. 010..."
								className="
                  bg-grey-2/60 border border-white/10 rounded-xl px-3 py-2
                  outline-none focus:border-white/30
                "
							/>
							<p className="text-xs text-orange-300/0 select-none">
								.
							</p>
						</div>

						<div className="flex flex-col gap-1 sm:col-span-2">
							<label className="text-sm text-white pl-1">
								Total
							</label>
							<input
								defaultValue=""
								inputMode="decimal"
								placeholder="e.g. 250"
								className="
                  bg-grey-2/60 border border-white/10 rounded-xl px-3 py-2
                  outline-none focus:border-white/30
                "
							/>
							<p className="text-xs text-orange-300/0 select-none">
								.
							</p>
						</div>

						<div className="flex flex-col gap-1 sm:col-span-2">
							<label className="text-sm text-white pl-1">
								Notes (optional)
							</label>
							<textarea
								defaultValue=""
								placeholder="Any notes for the order..."
								className="
                  bg-grey-2/60 border border-white/10 rounded-xl px-3 py-2
                  outline-none focus:border-white/30 min-h-24 resize-none
                "
							/>
						</div>
					</div>
				</div>

				{/* Footer */}
				<div
					className=" rounded-2xl p-4 xs:p-5 border-t border-white/10
				 flex gap-2 flex-row items-center justify-between"
				>
					<button
						type="button"
						onClick={onClose}
						className="
              clickable rounded-xl px-4 py-2 w-1/3
              bg-white/5 hover:bg-white/10 border border-white/10
              text-white font-medium sm:text-base
            "
					>
						{isCreate ? "Discard" : "Close"}
					</button>

					<div className="flex flex-col gap-2 sm:flex-row sm:items-center w-1/3">
						{!isCreate ? (
							<>
								<button
									type="button"
									className="
                    clickable rounded-xl px-4 py-2 w-full
                    bg-white/5 hover:bg-white/10 border border-white/10
                    text-red-300 font-medium sm:text-base
                  "
								>
									Cancel order
								</button>

								<button
									type="button"
									className="
                    clickable rounded-xl px-4 py-2 w-full
                    gradient-orange gradient-orange-button font-medium sm:text-base
                  "
								>
									Mark completed
								</button>
							</>
						) : null}

						<OrangeButton className="rounded-xl px-4 py-2  font-medium sm:text-base w-full">
							{isCreate ? "Confirm order" : "Save changes"}
						</OrangeButton>
					</div>
				</div>
			</div>
		</div>
	);
}
