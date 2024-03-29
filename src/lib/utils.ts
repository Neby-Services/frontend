import {clsx, type ClassValue} from "clsx";
import {toast} from "sonner";
import {twMerge} from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function toSentenceCase(text: string) {
	if (text || text == "") {
		return `${text[0].toUpperCase()}${text.slice(1).toLowerCase()}`;
	}
	return "";
}

export function formToastError(message: string) {
	return toast.error(message, {
		position: "top-right"
	});
}
