import React from "react";

interface Review {
	title: string;
	rating: number;
	comment: string;
}

interface RatingListBasicProps {
	reviews: Review[];
}

const RatingListBasic: React.FC<RatingListBasicProps> = ({reviews}) => {
	return (
		<div className="max-w-lg">
			<div className="overflow-hidden bg-white rounded shadow-md text-slate-500 shadow-slate-200">
				<div className="p-6">
					<div className="flex flex-col w-full divide-y divide-slate-200">
						{reviews.map((review, index) => (
							<div key={index} className="flex flex-col gap-2 py-4">
								<h4 className="flex flex-1 w-full gap-4 text-base font-medium text-slate-700">
									<span className="flex-1 w-0 truncate">{review.title}</span>
									<span className="flex items-center gap-4 text-sm rounded shrink-0 text-slate-500">
										<span className="flex text-secondary" role="img" aria-label={`Rating: ${review.rating} out of 5 stars`}>
											{Array.from({length: 5}, (_, i) => (
												<span key={i} aria-hidden="true">
													{i < review.rating ? (
														<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
															<path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
														</svg>
													) : (
														<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
															<path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
														</svg>
													)}
												</span>
											))}
										</span>
									</span>
								</h4>
								<p className="text-sm leading-6 text-slate-500">{review.comment}</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default RatingListBasic;
