import {Button} from "@/components/ui/button";
import {cn} from "@/lib/utils";

interface UserTypeSelectProps {
	className?: string;
	value: string;
	setValue: (value: string) => void;
}

export default function UserTypeSelect({className, value, setValue}: UserTypeSelectProps) {
	const handleClickNeighbor = () => {
		setValue("neighbor");
	};
	const handleClickAdmin = () => {
		setValue("admin");
	};

	return (
		<div className={cn("flex flex-row justify-center items-center w-full rounded-lg overflow-hidden border-2 border-foreground bg-foreground", className)}>
			<Button className="flex-1 w-1/2 rounded-none font-semibold max-sm:text-xs text-base" onClick={handleClickNeighbor} variant={value == "neighbor" ? "default" : "tertiary"}>
				Vecino
			</Button>
			<Button className="flex-1 w-1/2 rounded-none font-semibold max-sm:text-xs text-base" onClick={handleClickAdmin} variant={value == "admin" ? "default" : "tertiary"}>
				Administrador
			</Button>
		</div>
	);
}
