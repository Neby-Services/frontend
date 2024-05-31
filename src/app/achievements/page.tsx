// Achievements.tsx
"use client";

import ArchievementCard from "@/components/archievement-card";
import Header from "@/components/header";
import {logout} from "@/lib/actions";
import {fetchArchievements} from "@/lib/api";
import {useRouter} from "next/navigation";
import {useEffect, useState} from "react";

export default function Achievements() {
	const router = useRouter();
	const [loading, setLoading] = useState(false);
	const [achievements, setAchievements] = useState<UserAchievement[]>([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const data = await fetchArchievements();
				setAchievements(data.user_achievements);
				setLoading(false);
			} catch (error) {
				console.log(error);
				logout();
				router.push("/");
				setLoading(false);
			}
		};

		setLoading(true);
		fetchData();
	}, [router]);

	return (
		<main>
			<Header />
			<div className="max-w-[1800px] min-[1800px]:mx-auto box-content py-6 px-4 md:px-16 grid grid-cols-1 gap-6 xl:grid-cols-3 md:grid-cols-2">{loading ? <p>Loading...</p> : achievements.map((achievement: UserAchievement) => <ArchievementCard key={achievement.id} titttle={achievement.achievement.title} descr={achievement.achievement.description} stat={achievement.status === "in_progress" ? "In progress" : achievement.status === "completed" ? "Completed" : "Claimed"} price={achievement.achievement.reward} />)}</div>
		</main>
	);
}
