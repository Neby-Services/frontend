import React from "react";

interface CustomNumberInputProps {
	value: number;
	onChange: (value: number) => void;
}

const CustomNumberInput: React.FC<CustomNumberInputProps> = ({value, onChange}) => {
	const decrement = () => {
		if (value > 0) {
			onChange(value - 1);
		}
	};

	const increment = () => {
		if (value < 5) {
			onChange(value + 1);
		}
	};

	return (
		<div className="custom-number-input h-10 w-32">
			<label htmlFor="custom-input-number" className="w-full text-gray-700 text-sm font-semibold">
				Rating goes from 0 to 5
			</label>
			<div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent border mt-4">
				<button onClick={decrement} className="bg-white text-gray-600 hover:text-primary hover:bg-secondary h-full w-20 rounded-l cursor-pointer outline-none">
					<span className="m-auto text-2xl font-thin">−</span>
				</button>
				<input type="number" className="outline-none focus:outline-none text-center w-full bg-white font-semibold text-md hover:text-black focus:text-black cursor-default flex items-center text-gray-700 text" name="custom-input-number" value={value} readOnly />
				<button onClick={increment} className="bg-white text-gray-600 hover:text-primary hover:bg-secondary h-full w-20 rounded-r cursor-pointer">
					<span className="m-auto text-2xl font-thin">+</span>
				</button>
			</div>
		</div>
	);
};

export default CustomNumberInput;
