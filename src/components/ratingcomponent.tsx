import RatingDetailedBasic from "@/components/rating-card";
import RatingListBasic from "@/components/rating-individual";
import {logout} from "@/lib/actions";
import {fetchRatings, fetchSelfUserData} from "@/lib/api";
import {useRouter} from "next/navigation";
import {useEffect, useState} from "react";

interface Review {
	title: string;
	rating: number;
	comment: string;
}

interface RatingData {
	rating: number;
	count: number;
}

interface UserReceivedData {
	id: string;
	username: string;
}

interface HeaderProps {
	redirect?: boolean;
}

export default function Userrating({redirect = true}: HeaderProps) {
	const [userData, setUserData] = useState<UserReceivedData | null>(null);
	const [loading, setLoading] = useState(true);
	const [ratings, setRatings] = useState<RatingData[]>([]);
	const [reviews, setReviews] = useState<Review[]>([]);

	const router = useRouter();

	useEffect(() => {
		const fetchData = async () => {
			try {
				const data = await fetchSelfUserData();
				console.log(data);
				if (!data.error) setUserData(data["user"]);
				else {
					logout();
					if (redirect) router.push("/");
				}
				setLoading(false);
			} catch (error) {
				console.log(error);
				logout();
				if (redirect) router.push("/");
				setLoading(false);
			}
		};
		setLoading(true);
		fetchData();
	}, [redirect, router]);

	useEffect(() => {
		const fetchRatingss = async () => {
			if (userData?.id) {
				try {
					const data = await fetchRatings(userData.id);
					console.log(data);
					if (data.ratings) {
						// Process the ratings data to match the format for RatingDetailedBasic
						const ratingsCount: RatingData[] = [
							{rating: 5, count: data.ratings.filter((r: any) => r.rating === 5).length},
							{rating: 4, count: data.ratings.filter((r: any) => r.rating === 4).length},
							{rating: 3, count: data.ratings.filter((r: any) => r.rating === 3).length},
							{rating: 2, count: data.ratings.filter((r: any) => r.rating === 2).length},
							{rating: 1, count: data.ratings.filter((r: any) => r.rating === 1).length}
						];
						setRatings(ratingsCount);
						// Assuming the review comments are part of the fetched ratings data
						const reviewComments: Review[] = data.ratings.map((r: any) => ({
							title: r.sender_id,
							rating: r.rating,
							comment: r.description || ""
						}));
						setReviews(reviewComments);
					}
					setLoading(false);
				} catch (error) {
					console.log(error);
					setLoading(false);
				}
			}
		};
		fetchRatingss();
	}, [userData?.id]);

	return (
		<main className="profile-page">
			<section className="relative block h-500-px pt-60">
				<div className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px" style={{transform: "translateZ(0px)"}}>
					<svg className="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
						<polygon className="text-blueGray-200 fill-current" points="2560 0 2560 100 0 100"></polygon>
					</svg>
				</div>
			</section>
			<section className="relative py-16 bg-blueGray-200">
				<div className="container mx-auto px-4">
					<div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 rounded-lg -mt-64">
						<div className="px-6">
							<div className="flex flex-wrap justify-center">
								<div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
									<div className="relative"></div>
								</div>
							</div>
							<div className="text-center mt-8">
								<h3 className="text-4xl font-semibold leading-normal text-blueGray-700 mb-2">{userData?.username}</h3>
							</div>
							<div className="flex justify-center">
								<RatingDetailedBasic title="User Ratings" reviews={ratings} />
							</div>
							<div className="flex justify-center pt-10">
								<RatingListBasic reviews={reviews} />
							</div>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}
