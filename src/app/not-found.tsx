import illustration from "@/assets/404.svg";
import Header from "@/components/header";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
	return (
		<main className="min-h-svh flex flex-col">
			<Header />
			<section className="max-w-[1800px] min-[1800px]:mx-auto box-content py-6 px-4 md:px-16 flex flex-col gap-6 justify-center items-center flex-1">
				<Image className="max-w-[600px] w-full" priority src={illustration} alt="404 Image" />
				<Link className="flex flex-row justify-center items-center gap-1 font-semibold text-base hover:underline underline-offset-8 decoration-2" href="/dashboard">
					<svg className="size-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
						<path stroke="none" d="M0 0h24v24H0z" fill="none" />
						<path d="M5 12l14 0" />
						<path d="M5 12l6 6" />
						<path d="M5 12l6 -6" />
					</svg>
					<p>Go Back</p>
				</Link>
			</section>
		</main>
	);
}
