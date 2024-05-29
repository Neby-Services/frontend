"use client";

import ArchievementCard from "@/components/archievement-card";
import Header from "@/components/header";
import {logout} from "@/lib/actions";
import {fetchArchievements, fetchClaimArchievements} from "@/lib/api";
import {UserAchievement} from "@/types/archievementTypes";
import {useRouter} from "next/navigation";
import {useEffect, useState} from "react";

export default function Achievements() {
	const router = useRouter();
	const [loading, setLoading] = useState(true);
	const [refetch, setRefetch] = useState(false);
	const [achievements, setAchievements] = useState<UserAchievement[]>([]);

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true); // Asegura que el estado de carga se establezca en true antes de la llamada a la API
			try {
				const data = await fetchArchievements();
				setAchievements(data.user_achievements);
			} catch (error) {
				console.log(error);
				logout();
				router.push("/");
			} finally {
				setLoading(false); // Asegura que el estado de carga se establezca en false en ambos casos
			}
		};

		fetchData();
	}, [refetch, router]);

	const claimAchievement = async (id: string) => {
		try {
			const response = await fetchClaimArchievements(id);
			if (response.ok) {
				console.log("Achievement claimed successfully");
				onRefetch();
			} else {
				onRefetch();
				console.error("Error claiming achievement:", response.statusText);
			}
		} catch (error) {
			console.error("Error:", error);
		}
	};

	const onRefetch = () => setRefetch(prev => !prev);

	return (
		<main>
			<Header />
			<div className="max-w-[1800px] min-[1800px]:mx-auto box-content py-6 px-4 md:px-16 grid grid-cols-1 gap-6 xl:grid-cols-3 md:grid-cols-2">
				{loading ? (
					<div className="flex items-center justify-center min-h-screen">
						<p className="text-xl text-gray-600 animate-pulse">Loading achievements...</p>
					</div>
				) : achievements.length > 0 ? (
					achievements.map((achievement: UserAchievement) => <ArchievementCard key={achievement.id} idarch={achievement.id} titttle={achievement.achievement.title} descr={achievement.achievement.description} stat={achievement.status === "in_progress" ? "In progress" : achievement.status === "completed" ? "Completed" : "Claimed"} price={achievement.achievement.reward} onClaim={claimAchievement} />)
				) : (
					<div className="text-center">
						<p className="text-2xl">No achievements available.</p>
					</div>
				)}
			</div>
		</main>
	);
}
