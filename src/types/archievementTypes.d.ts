
type AchievementStatusType = "in_progress" | "completed" | "claimed"
interface Achievement {
	title: string;
	description: string;
	reward: string;
}

interface UserAchievement {
	id: string;
	user_id: string;
	status: AchievementStatusType;
	achievement: Achievement;
	achievement_title: string;
}

interface AchievementsData {
	user_achievements: UserAchievement[];
}
