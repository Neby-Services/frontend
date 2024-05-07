import {Tabs, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {cn} from "@/lib/utils";

interface OptionSelectProps {
	className?: string;
	option1: string;
	option2: string;
	optionValue1: string;
	optionValue2: string;
	value: any;
	setValue: (value: any) => void;
}

export default function OptionSelect({className, option1, option2, optionValue1, optionValue2, value, setValue}: OptionSelectProps) {
	return (
		<Tabs defaultValue={value} onValueChange={(type: any) => setValue(type)}>
			<TabsList className={cn("w-full h-fit p-0 rounded-lg overflow-hidden border-2 border-foreground bg-foreground", className)}>
				<TabsTrigger className="flex-1 w-1/2 px-8 py-2 rounded-none font-semibold max-sm:text-xs text-base" value={optionValue1}>
					{option1}
				</TabsTrigger>
				<TabsTrigger className="flex-1 w-1/2 px-8 py-2 rounded-none font-semibold max-sm:text-xs text-base" value={optionValue2}>
					{option2}
				</TabsTrigger>
			</TabsList>
		</Tabs>
	);
}
