"use client";

import Header from "@/components/header";
import WalletCard from "@/components/wallet-card";
import {fetchServicesSelf} from "@/lib/api";
import {SelfServicesData} from "@/types/serviceselfTypes";
import {useRouter} from "next/navigation";
import {useEffect, useState} from "react";

interface Transaction {
	id: string;
	description: string;
	amount: number;
}

export default function Wallet() {
	const [transactions, setTransactions] = useState<Transaction[]>([]);
	const [balance, setBalance] = useState(0);
	const [loading, setLoading] = useState(true);
	const router = useRouter();

	useEffect(() => {
		const fetchData = async () => {
			try {
				const data: SelfServicesData = await fetchServicesSelf();
				console.log(data);
				if (data.self_services) {
					const mappedTransactions = data.self_services.map(service => ({
						id: service.id || service.creator.id.toString(),
						description: service.title || service.description,
						amount: -(service.price || 0)
					}));
					setTransactions(mappedTransactions);

					const calculatedBalance = mappedTransactions.reduce((sum, transaction) => sum + transaction.amount, 0);
					setBalance(calculatedBalance);
				}
				setLoading(false);
			} catch (error) {
				console.log(error);
				setLoading(false);
			}
		};

		setLoading(true);
		fetchData();
	}, []);

	return (
		<main>
			<Header />
			<section className="max-w-[1800px] min-[1800px]:mx-auto box-content py-6 px-4 md:px-16 flex justify-center">
				<WalletCard title="My Wallet" balance={balance} transactions={transactions} />
			</section>
		</main>
	);
}
