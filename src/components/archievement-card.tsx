"use client";

import {Button} from "@/components/ui/button";

interface ServiceCardProps {
	idarch: string;
	titttle: string;
	descr: string;
	price: string;
	stat: string;
	onClaim: (id: string) => void;
}

export default function ArchievementCard({idarch, titttle, descr, price, stat, onClaim}: ServiceCardProps) {
	return (
		<main className="mx-auto sm:pb-16">
			<div className={`border-none shadow-md flex flex-col overflow-hidden h-52 w-[280px] rounded-3xl p-4 bg-white`}>
				<div className="relative flex-none mb-[17px] w-[320px] h-[122px] flex flex-col box-border">
					<div className="relative flex-none mb-[20px] w-[227px] h-[76px] flex flex-col box-border">
						<div className="relative flex-none mb-[8px] w-[227px] h-[38px] flex justify-start items-center box-border">
							<span className="relative flex-none w-full h-[38px] text-[#003612] font-inter text-[16px] font-semibold leading-[19.36px] pt-4">{titttle}</span>
						</div>
						<br />
						<div className="relative flex-none w-[280px] h-[30px] flex justify-start items-center box-border">
							<span className="relative mr-[10px] h-[30px] text-primary font-inter text-[12px] font-normal mb-10 w-full pt-11">{descr}</span>
						</div>
						<br />
					</div>
					<br />
					<div className="relative flex-none mb-[20px] h-[26px] w-full flex justify-between items-center box-border mt-4">
						<div className="flex items-center gap-4">
							<Button
								variant="secondary"
								size="sm"
								className="px-4 font-semibold text-[8px] sm:text-lg shadow-md"
								style={stat === "Claimed" || stat === "In progress" ? {backgroundColor: "#4af77e80"} : {}}
								onClick={() => {
									if (stat === "Completed") {
										onClaim(idarch);
									}
								}}>
								{stat}
							</Button>

							<div className="flex items-center gap-2">
								<p className="font-semibold text-[16px] truncate max-w-20 pl-4 sm:mr-20px">{price}</p>
								<svg className="size-6" viewBox="0 0 24 24">
									<circle className="fill-secondary stroke-primary" strokeWidth="2" cx="12" cy="12" r="9.8282385" />
									<path className="fill-primary stroke-none" d="M12 6.9640836c.556578 0 1.386924 2.8618972 1.780455 3.2554624.393565.39353 3.255462 1.223876 3.255462 1.780453 0 .556578-2.861897 1.386924-3.255462 1.780455-.393531.393565-1.223877 3.255462-1.780455 3.255462-.556577 0-1.386923-2.861897-1.780453-3.255462-.393566-.393531-3.2554635-1.223877-3.2554635-1.780455 0-.556577 2.8618975-1.386923 3.2554635-1.780453.39353-.3935652 1.223876-3.2554624 1.780453-3.2554624Z" />
								</svg>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}
