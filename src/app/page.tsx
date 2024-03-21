import {Button} from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
	return (
		<main className="min-h-svh grid place-content-center">
			<div className="flex flex-col items-center justify-center py-10 px-16 shadow-xl rounded-xl">
				<h1 className="font-bold text-4xl text-animation">Neby</h1>
				<div className="flex flex-row gap-5 mt-8">
					<Link href="/register">
						<Button variant="secondary" size="lg">
							Register
						</Button>
					</Link>
					<Link href="/login">
						<Button variant="secondary" size="lg">
							Login
						</Button>
					</Link>
				</div>
			</div>
		</main>
	);
}
