"use client";

import ArchievementCard from "@/components/archievement-card";
import Header from "@/components/header";
import { logout } from "@/lib/actions";
import { fetchArchievements, fetchClaimArchievements } from "@/lib/api";
import { formToastError } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Achievements() {
	const router = useRouter();
	const [loading, setLoading] = useState(true);
	const [refetch, setRefetch] = useState(false);
	const [achievements, setAchievements] = useState<UserAchievement[]>([]);

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);
			try {
				const data = await fetchArchievements();
				setAchievements(data.user_achievements);
			} catch (error) {
				console.log(error);
				logout();
				router.push("/");
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	}, [refetch, router]);

	const claimAchievement = async (id: string) => {
		try {
			const response = await fetchClaimArchievements(id);
			console.log(response);
			if (response.message) {
				console.log("Achievement claimed successfully");
				onRefetch();
			}
			if (response.error) {
				onRefetch();
				formToastError(response["error"])
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
					achievements.map((achievement: UserAchievement) => <ArchievementCard key={achievement.id} idarch={achievement.id} title={achievement.achievement.title} description={achievement.achievement.description} status={achievement.status} price={achievement.achievement.reward} onClaim={claimAchievement} />)
				) : (
					<div className="text-center">
						<p className="text-2xl">No achievements available.</p>
					</div>
				)}
			</div>
		</main>
	);
}
