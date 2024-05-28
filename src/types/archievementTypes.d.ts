// types.ts
export interface Achievement {
	title: string;
	description: string;
	reward: string;
}

export interface UserAchievement {
	id: string;
	user_id: string;
	status: "in_progress" | "completed" | "claimed";
	achievement: Achievement;
}

export interface AchievementsData {
	user_achievements: UserAchievement[];
}
