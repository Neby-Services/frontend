import { clsx, type ClassValue } from "clsx";
import { toast } from "sonner";
import { twMerge } from "tailwind-merge";

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

export function capitalizeFirstLetter(word: string) {
	if (word.length === 0) {
		return word;
	}
	return word.charAt(0).toUpperCase() + word.slice(1);
}

export enum AchievementStatus {
	IN_PROGRESS = "in_progress",
	CLAIMED = "claimed",
	COMPLETED = "completed"
}
