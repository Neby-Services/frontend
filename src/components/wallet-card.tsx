"use client";

interface Transaction {
	id: string;
	description: string;
	amount: number;
}

interface WalletCardProps {
	title: string;
	balance: number;
	transactions: Transaction[];
}

export default function WalletCard({title, balance, transactions}: WalletCardProps) {
	return (
		<div className="flex flex-col w-full max-w-[1000px] h-max rounded-3xl mx-auto">
			<div className="flex justify-between items-center gap-4 md:gap-6 px-6 py-4 mb-6">
				<h1 className="font-bold text-2xl md:text-4xl">{title}</h1>
				<span className="flex items-center gap-2 font-semibold text-xl md:text-2xl">
					{balance}
					<svg className="size-8" viewBox="0 0 24 24">
						<circle className="fill-secondary stroke-primary" strokeWidth="2" cx="12" cy="12" r="9.8282385" />
						<path className="fill-primary stroke-none" d="M12 6.9640836c.556578 0 1.386924 2.8618972 1.780455 3.2554624.393565.39353 3.255462 1.223876 3.255462 1.780453 0 .556578-2.861897 1.386924-3.255462 1.780455-.393531.393565-1.223877 3.255462-1.780455 3.255462-.556577 0-1.386923-2.861897-1.780453-3.255462-.393566-.393531-3.2554635-1.223877-3.2554635-1.780455 0-.556577 2.8618975-1.386923 3.2554635-1.780453.39353-.3935652 1.223876-3.2554624 1.780453-3.2554624Z" />
					</svg>
				</span>
			</div>
			<div className="p-6 h-max w-full mx-auto">
				<div className="w-full flex flex-col">
					<div>
						<ul className="flex flex-col gap-6">
							{transactions.map((transaction, index) => (
								<>
									{index !== 0 && <hr className="opacity-10" />}
									<li key={transaction.id} className="flex justify-between">
										<span>{transaction.description}</span>
										<span className="flex items-center font-medium">
											{transaction.amount < 0 ? "-" : "+"} {Math.abs(transaction.amount)}
											<svg className="size-6 ml-2" viewBox="0 0 24 24">
												<circle className="fill-secondary stroke-primary" strokeWidth="2" cx="12" cy="12" r="9.8282385" />
												<path className="fill-primary stroke-none" d="M12 6.9640836c.556578 0 1.386924 2.8618972 1.780455 3.2554624.393565.39353 3.255462 1.223876 3.255462 1.780453 0 .556578-2.861897 1.386924-3.255462 1.780455-.393531.393565-1.223877 3.255462-1.780455 3.255462-.556577 0-1.386923-2.861897-1.780453-3.255462-.393566-.393531-3.2554635-1.223877-3.2554635-1.780455 0-.556577 2.8618975-1.386923 3.2554635-1.780453.39353-.3935652 1.223876-3.2554624 1.780453-3.2554624Z" />
											</svg>
										</span>
									</li>
								</>
							))}
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}
