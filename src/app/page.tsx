import LogoAnimation from "@/components/logo-animation";
import {Button} from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
	return (
		<main className="min-h-svh flex flex-col items-center">
			<section className="max-w-[1500px] w-full px-10 sm:px-20 lg:px-40 h-svh flex flex-col-reverse md:flex-row justify-center md:justify-between items-center md:gap-12">
				<div>
					<h1 className="text-5xl font-bold mb-6 max-md:text-center">NEBY</h1>
					<h2 className="text-2xl font-medium mb-10">
						The solution for an organized <span className="highlight">community</span>
					</h2>
					<ol className="flex flex-col gap-3 list-decimal list-inside box-content mb-6">
						<li>Offer or request services to your neighbors in a comfortable and intuitive way</li>
						<li>Gamified experience with an achievement system</li>
						<li>Manage your own integrated economy</li>
					</ol>
					<span className="flex flex-row max-md:justify-center items-center gap-4">
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
				<div
					className={`
					w-[150px] max-w-[150px] h-[200px] max-h-[200px]
					sm:w-[200px] sm:max-w-[200px] sm:h-[250px] sm:max-h-[250px]
					md:w-[300px] md:max-w-[300px] md:h-[400px] md:max-h-[400px]
				`}>
					<LogoAnimation className="max-md:hidden" variant="displacement" />
					<LogoAnimation className="md:hidden" variant="elastic" />
				</div>
			</section>
		</main>
	);
}
