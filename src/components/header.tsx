"use client";

import {Avatar} from "@/components/ui/avatar";
import {Button} from "@/components/ui/button";
import {AnimatePresence, motion} from "framer-motion";
import Link from "next/link";
import {useState} from "react";

export default function Header() {
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<header className="relative w-full z-10">
			<div className="fixed flex justify-between items-center w-full h-20 xl:h-28 px-6 md:px-16 bg-background shadow-lg">
				<div className="max-w-[1800px] min-[1800px]:mx-auto flex flex-row w-full items-center gap-10">
					<div className="flex-1 flex justify-start">
						<span className="flex items-center gap-8">
							<Link href="/dashboard">
								<svg className="size-16 text-foreground" viewBox="0 0 1000 1000">
									<path d="m-415.94288 991.56508-46.44939-46.44939-101.61321 101.61321M-477.29726 1037.5477l46.44939 46.4494 101.6132-101.61325" fill="none" stroke="currentColor" strokeWidth="42.1613" strokeLinecap="butt" strokeLinejoin="round" strokeMiterlimit="1.5" strokeDasharray="none" strokeOpacity="1" transform="translate(2188.0127146 -3334.54339634) scale(3.7795272)" />
								</svg>
							</Link>
							<nav className="max-xl:hidden">
								<ul className="flex flex-row items-center gap-6 font-medium text-lg">
									<li>
										<Link className="hover:underline underline-offset-8" href="/dashboard">
											Home
										</Link>
									</li>
									<li>
										<Link className="hover:underline underline-offset-8" href="/achievements">
											Achievements
										</Link>
									</li>
								</ul>
							</nav>
						</span>
					</div>
					<div className="max-xl:hidden flex justify-center">
						<Button variant="secondary" size="lg" className="px-4 font-semibold text-base shadow-md flex flex-row gap-4">
							<svg className="size-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
								<path stroke="none" d="M0 0h24v24H0z" fill="none" />
								<path d="M9 12h6" />
								<path d="M12 9v6" />
								<path d="M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14z" />
							</svg>
							<p>New Post</p>
						</Button>
					</div>
					<div className="max-xl:hidden flex-1 flex justify-end">
						<span className="flex justify-center items-center gap-8">
							<form className="relative">
								<svg className="absolute top-1/2 -translate-y-1/2 left-4 size-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
									<path stroke="none" d="M0 0h24v24H0z" fill="none" />
									<path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
									<path d="M21 21l-6 -6" />
								</svg>
								<input className="bg-slate-200 pl-12 px-4 py-3 font-medium rounded-full w-48" type="text" placeholder="Search..." />
							</form>
							<span className="flex justify-center items-center gap-2">
								<p className="font-semibold text-lg truncate max-w-20">1320</p>
								<svg className="size-7" viewBox="0 0 24 24">
									<circle className="fill-secondary stroke-primary" strokeWidth="2" cx="12" cy="12" r="9.8282385" />
									<path className="fill-primary stroke-none" d="M12 6.9640836c.556578 0 1.386924 2.8618972 1.780455 3.2554624.393565.39353 3.255462 1.223876 3.255462 1.780453 0 .556578-2.861897 1.386924-3.255462 1.780455-.393531.393565-1.223877 3.255462-1.780455 3.255462-.556577 0-1.386923-2.861897-1.780453-3.255462-.393566-.393531-3.2554635-1.223877-3.2554635-1.780455 0-.556577 2.8618975-1.386923 3.2554635-1.780453.39353-.3935652 1.223876-3.2554624 1.780453-3.2554624Z" />
								</svg>
							</span>
							<div className="w-16">
								<button onClick={() => setMenuOpen(!menuOpen)}>
									<Avatar className="size-14">
										<div className="bg-secondary size-full grid place-content-center text-background font-bold text-2xl overflow-hidden">
											<p>U</p>
										</div>
									</Avatar>
								</button>
							</div>
							{menuOpen && (
									<div className="fixed w-5/6 max-w-sm bg-white h-screen shadow-lg border border-gray-300 z-30 top-[7rem] right-0 flex flex-col py-6 px-8 overflow-y-auto">
										<ul className="flex flex-col gap-2 font-medium text-lg">
											<form className="relative mb-6">
												<svg className="absolute top-1/2 -translate-y-1/2 left-4 size-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
													<path stroke="none" d="M0 0h24v24H0z" fill="none"/>
													<path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"/>
													<path d="M21 21l-6 -6"/>
												</svg>
												<input className="bg-slate-200 pl-12 px-4 py-3 font-medium rounded-full w-full" type="text" placeholder="Search..."/>
											</form>
											<li>element 1</li>
											<li>element 2</li>
											<li>element 3</li>
											<li>
												<Link href="/">
													Log out
												</Link>
											</li>
										</ul>
									</div>
							)}
						</span>
					</div>
					<div className="xl:hidden">
						<button onClick={() => setMenuOpen(!menuOpen)}>
							<svg className="size-10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
								<path stroke="none" d="M0 0h24v24H0z" fill="none" />
								<path d="M4 6l16 0" />
								<path d="M4 12l16 0" />
								<path d="M4 18l16 0" />
							</svg>
						</button>
					</div>
				</div>
			</div>
			<div className="h-20 xl:h-28"></div>
			<div className="xl:hidden">
				<AnimatePresence mode="wait">
					{menuOpen && (
						<>
							<motion.div initial={{opacity: 0}} animate={{opacity: 0.3}} exit={{opacity: 0}} onClick={() => setMenuOpen(!menuOpen)} className="fixed bg-black w-screen h-screen z-20 top-0 left-0"></motion.div>
							<motion.div initial={{x: "-100%"}} animate={{x: "0%", transition: {duration: 0.5, ease: [0.33, 1, 0.68, 1]}}} exit={{x: "-100%", transition: {duration: 0.5, ease: [0.33, 1, 0.68, 1]}}} className="fixed w-5/6 max-w-sm bg-white h-screen shadow-xl z-30 top-0 left-0 flex flex-col py-6 px-8 overflow-y-auto">
								<div className="w-full flex justify-between items-center">
									<Avatar className="size-14">
										<div className="bg-secondary size-full grid place-content-center text-background font-bold text-2xl overflow-hidden">
											<p>U</p>
										</div>
									</Avatar>
									<span className="flex justify-center items-center gap-2">
										<p className="font-semibold text-lg truncate max-w-20">1320</p>
										<svg className="size-7" viewBox="0 0 24 24">
											<circle className="fill-secondary stroke-primary" strokeWidth="2" cx="12" cy="12" r="9.8282385" />
											<path className="fill-primary stroke-none" d="M12 6.9640836c.556578 0 1.386924 2.8618972 1.780455 3.2554624.393565.39353 3.255462 1.223876 3.255462 1.780453 0 .556578-2.861897 1.386924-3.255462 1.780455-.393531.393565-1.223877 3.255462-1.780455 3.255462-.556577 0-1.386923-2.861897-1.780453-3.255462-.393566-.393531-3.2554635-1.223877-3.2554635-1.780455 0-.556577 2.8618975-1.386923 3.2554635-1.780453.39353-.3935652 1.223876-3.2554624 1.780453-3.2554624Z" />
										</svg>
									</span>
								</div>
								<hr className="w-4/5 mx-auto my-8" />
								<Button variant="secondary" size="lg" className="px-4 py-3 mb-6 font-semibold text-base shadow-md flex flex-row gap-4 rounded-full">
									<svg className="size-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
										<path stroke="none" d="M0 0h24v24H0z" fill="none" />
										<path d="M9 12h6" />
										<path d="M12 9v6" />
										<path d="M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14z" />
									</svg>
									<p>New Post</p>
								</Button>
								<form className="relative mb-6">
									<svg className="absolute top-1/2 -translate-y-1/2 left-4 size-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
										<path stroke="none" d="M0 0h24v24H0z" fill="none" />
										<path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
										<path d="M21 21l-6 -6" />
									</svg>
									<input className="bg-slate-200 pl-12 px-4 py-3 font-medium rounded-full w-full" type="text" placeholder="Search..." />
								</form>
								<nav>
									<ul className="flex flex-col gap-2 font-medium text-lg">
										<li>
											<Link className="hover:underline underline-offset-8" href="/dashboard">
												Home
											</Link>
										</li>
										<li>
											<Link className="hover:underline underline-offset-8" href="/achievements">
												Achievements
											</Link>
										</li>
										<li>
											<Link className="hover:underline underline-offset-8" href="/">
												Log out
											</Link>
										</li>
									</ul>
								</nav>
							</motion.div>
						</>
					)}
				</AnimatePresence>
			</div>
		</header>
	);
}
