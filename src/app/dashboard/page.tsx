import Header from "@/components/header";

export default function Dashboard() {
	return (
		<main>
			<Header />
			<section className="max-w-[1800px] min-[1800px]:mx-auto box-content py-6 px-4 md:px-16 grid grid-cols-1 gap-6 xl:grid-cols-2"></section>
		</main>
	);
}
