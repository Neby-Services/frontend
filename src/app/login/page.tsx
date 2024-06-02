"use client";

import {Button} from "@/components/ui/button";
import {ScrollArea} from "@/components/ui/scroll-area";
import {fetchLogin} from "@/lib/api";
import {formToastError, toSentenceCase} from "@/lib/utils";
import styles from "@/ui/login.module.css";
import {Loader2} from "lucide-react";
import Link from "next/link";
import {useRouter} from "next/navigation";
import {FormEvent, useState} from "react";

export default function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [passwordVisible, setPasswordVisible] = useState(false);

	const [loading, setLoading] = useState(false);

	const router = useRouter();

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();

		if (loading) return;
		setLoading(true);

		if (email == "") formToastError("Email is required");
		else if (password == "") formToastError("Password is required");
		else {
			let loginSentData: LoginSentData = {
				email,
				password
			};

			const data = await fetchLogin(loginSentData);
			console.log("login",data);

			if (data["error"]) formToastError(toSentenceCase(data["error"]));
			else router.push("/dashboard");
		}

		setLoading(false);
	};

	return (
		<main className={`${styles.background} h-svh`}>
			<div className="h-svh py-8 grid place-content-center">
				<ScrollArea className="w-[95vw] max-w-[600px] max-h-svh bg-background shadow-xl rounded-xl">
					<div className="px-10 py-8 sm:px-16 sm:py-10">
						<Link className="flex flex-row gap-1 mb-3 -translate-x-4 font-medium text-sm hover:underline underline-offset-4" href="/">
							<svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
								<path stroke="none" d="M0 0h24v24H0z" fill="none" />
								<path d="M5 12l14 0" />
								<path d="M5 12l6 6" />
								<path d="M5 12l6 -6" />
							</svg>
							Go Back
						</Link>
						<h1 className="text-3xl sm:text-4xl font-bold text-center mb-12">Login</h1>
						<form onSubmit={handleSubmit} className="flex flex-col flex-1">
							<label className="flex flex-col text-sm sm:text-lg font-semibold gap-2 mb-6">
								Email
								<input onChange={e => setEmail(e.target.value)} value={email} className="border-2 rounded-lg text-base p-1.5" type="email" />
							</label>
							<label className="flex flex-col text-sm sm:text-lg font-semibold gap-2 mb-6">
								Password
								<div className="relative">
									<button type="button" tabIndex={-1} onClick={() => setPasswordVisible(!passwordVisible)}>
										<svg className="absolute top-1/2 -translate-y-1/2 right-4 size-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
											{passwordVisible ? (
												<>
													<path stroke="none" d="M0 0h24v24H0z" fill="none" />
													<path d="M10.585 10.587a2 2 0 0 0 2.829 2.828" />
													<path d="M16.681 16.673a8.717 8.717 0 0 1 -4.681 1.327c-3.6 0 -6.6 -2 -9 -6c1.272 -2.12 2.712 -3.678 4.32 -4.674m2.86 -1.146a9.055 9.055 0 0 1 1.82 -.18c3.6 0 6.6 2 9 6c-.666 1.11 -1.379 2.067 -2.138 2.87" />
													<path d="M3 3l18 18" />
												</>
											) : (
												<>
													<path stroke="none" d="M0 0h24v24H0z" fill="none" />
													<path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
													<path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" />
												</>
											)}
										</svg>
									</button>
									<input onChange={e => setPassword(e.target.value)} value={password} className="border-2 rounded-lg text-base p-1.5 w-full pr-12" type={passwordVisible ? "text" : "password"} />
								</div>
							</label>
							<Button disabled={loading} type="submit" variant="secondary" onClick={handleSubmit} className="w-fit place-self-center mt-10 px-5 py-7 font-semibold text-base sm:text-lg shadow-lg flex flex-row gap-2">
								{loading ? (
									<>
										<Loader2 className="size-6 animate-spin" />
										Loading
									</>
								) : (
									<>
										<svg className="size-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
											<path stroke="none" d="M0 0h24v24H0z" fill="none" />
											<path d="M9 8v-2a2 2 0 0 1 2 -2h7a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-7a2 2 0 0 1 -2 -2v-2" />
											<path d="M3 12h13l-3 -3" />
											<path d="M13 15l3 -3" />
										</svg>
										Login
									</>
								)}
							</Button>
						</form>
					</div>
				</ScrollArea>
			</div>
		</main>
	);
}
