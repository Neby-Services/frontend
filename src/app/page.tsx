import LogoAnimation from "@/components/logo-animation";
import {Button} from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
	return (
		<main className="min-h-svh grid place-content-center">
			<section className="max-w-[90%] mx-auto h-svh flex flex-row justify-center items-center gap-12">
				<div>
					<h1 className="text-5xl font-bold mb-6">NEBY</h1>
					<h2 className="text-2xl font-medium mb-10">
						The solution for an organized <span className="highlight">community</span>
					</h2>
					<ol className="flex flex-col gap-3 list-decimal list-inside box-content mb-6">
						<li>Offer or request services to your neighbors in a comfortable and intuitive way</li>
						<li>Gamified experience with an achievement system</li>
						<li>Manage your own integrated economy</li>
					</ol>
					<span className="flex flex-row items-center gap-4">
						<Link href="/register">
							<Button variant="default" size="default" className="font-semibold rounded-full">
								Register
							</Button>
						</Link>
						<Link href="/login">
							<Button variant="tertiary" size="default" className="font-semibold rounded-full">
								Login
							</Button>
						</Link>
					</span>
				</div>
				<div className="relative size-72 min-w-72">
					<LogoAnimation />
					{/* <svg className="z-50 w-full text-foreground absolute top-[40%] left-[50%] -translate-x-1/2 -translate-y-1/2" viewBox="0 0 1000 1000">
						<path d="M431.80459 211.50004a67.730267 67.730267 0 0 0-30.36274 17.52491L75.000001 555.46693l95.775349 95.77536 278.55418-278.55432 101.33464 101.33465 95.77536-95.77536-149.22232-149.22231a67.730267 67.730267 0 0 0-65.41262-17.52491Zm397.42006 137.25668L550.67044 627.31073 449.33583 525.96988l-95.77535 95.77536 149.22229 149.22868a67.730267 67.730267 0 0 0 95.77535 0L925 444.53207Z" fill="currentColor" stroke="none" strokeWidth="10" strokeLinecap="square" strokeLinejoin="round" strokeMiterlimit="1.5" strokeDasharray="none" strokeOpacity="1" />
					</svg>
					<svg className="z-40 w-full text-secondary absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2" viewBox="0 0 1000 1000">
						<path d="M431.80459 211.50004a67.730267 67.730267 0 0 0-30.36274 17.52491L75.000001 555.46693l95.775349 95.77536 278.55418-278.55432 101.33464 101.33465 95.77536-95.77536-149.22232-149.22231a67.730267 67.730267 0 0 0-65.41262-17.52491Zm397.42006 137.25668L550.67044 627.31073 449.33583 525.96988l-95.77535 95.77536 149.22229 149.22868a67.730267 67.730267 0 0 0 95.77535 0L925 444.53207Z" fill="none" stroke="currentColor" strokeWidth="10" strokeLinecap="square" strokeLinejoin="round" strokeMiterlimit="1.5" strokeDasharray="none" strokeOpacity="1" />
					</svg>
					<svg className="z-30 w-full text-secondary absolute top-[60%] left-[50%] -translate-x-1/2 -translate-y-1/2" viewBox="0 0 1000 1000">
						<path d="M431.80459 211.50004a67.730267 67.730267 0 0 0-30.36274 17.52491L75.000001 555.46693l95.775349 95.77536 278.55418-278.55432 101.33464 101.33465 95.77536-95.77536-149.22232-149.22231a67.730267 67.730267 0 0 0-65.41262-17.52491Zm397.42006 137.25668L550.67044 627.31073 449.33583 525.96988l-95.77535 95.77536 149.22229 149.22868a67.730267 67.730267 0 0 0 95.77535 0L925 444.53207Z" fill="none" stroke="currentColor" strokeWidth="10" strokeLinecap="square" strokeLinejoin="round" strokeMiterlimit="1.5" strokeDasharray="none" strokeOpacity="1" />
					</svg> */}
				</div>
			</section>
		</main>
	);
}
