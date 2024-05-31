// types.ts
interface Achievement {
	title: string;
	description: string;
	reward: string;
}

interface UserAchievement {
	id: string;
	user_id: string;
	status: "in_progress" | "completed" | "claimed";
	achievement: Achievement;
	achievement_title: string;
}

interface AchievementsData {
	user_achievements: UserAchievement[];
}
