// This file contains utility functions for formatting dates in the order management dashboard.
export function formatOrderDate(inputDateString: string | number | Date) {
	// Convert the input to a Date object if it's not already
	const d =
		inputDateString instanceof Date
			? inputDateString
			: new Date(inputDateString);

	// Check if the date is valid
	if (Number.isNaN(d.getTime()))
		return { date: "N/A", time: "N/A", full: "N/A" };

	// YYYY-MM-DD
	const yyyy = d.getFullYear();
	const mm = String(d.getMonth() + 1).padStart(2, "0");
	const dd = String(d.getDate()).padStart(2, "0");

	// HH:mm (24h)
	const hh = String(d.getHours()).padStart(2, "0");
	const min = String(d.getMinutes()).padStart(2, "0");

	return {
		date: `${yyyy}-${mm}-${dd}`,
		time: `${hh}:${min}`,
		full: `${yyyy}-${mm}-${dd} at ${hh}:${min}`,
	};
}
