"use client";

import {Button} from "@/components/ui/button";
import {ScrollArea} from "@/components/ui/scroll-area";
import {fetchLogin} from "@/lib/api";
import {formToastError, toSentenceCase} from "@/lib/utils";
import styles from "@/ui/login.module.css";
import Link from "next/link";
import {useRouter} from "next/navigation";
import {FormEvent, useState} from "react";

export default function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const router = useRouter();

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();

		if (email == "") return formToastError("Email is required");
		if (password == "") return formToastError("Password is required");

		let loginData: LoginData = {
			email,
			password
		};

		const data = await fetchLogin(loginData);
		console.log(data);

		if (data["error"]) return formToastError(toSentenceCase(data["error"]));
		else router.push("/dashboard");
	};

	return (
		<main className={`${styles.background} h-svh`}>
			<div className="h-svh py-8 grid place-content-center">
				<ScrollArea className="w-[95vw] max-w-[600px] max-h-svh bg-background shadow-xl rounded-xl">
					<div className="px-10 py-8 sm:px-16 sm:py-10">
						<Link className="flex flex-row gap-1 mb-3 -translate-x-4 font-medium text-sm transition-all hover:underline" href="/">
							<svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
								<path stroke="none" d="M0 0h24v24H0z" fill="none" />
								<path d="M5 12l14 0" />
								<path d="M5 12l6 6" />
								<path d="M5 12l6 -6" />
							</svg>
							Volver
						</Link>
						<h1 className="text-3xl sm:text-4xl font-bold text-center mb-12">Iniciar Sesión</h1>
						<form onSubmit={e => e.preventDefault()} className="flex flex-col flex-1">
							<label className="flex flex-col text-sm sm:text-lg font-semibold gap-2 mb-6">
								Email
								<input onChange={e => setEmail(e.target.value)} value={email} className="border-2 rounded-lg text-base p-1.5" type="email" />
							</label>
							<label className="flex flex-col text-sm sm:text-lg font-semibold gap-2 mb-6">
								Contraseña
								<input onChange={e => setPassword(e.target.value)} value={password} className="border-2 rounded-lg text-base p-1.5" type="password" />
							</label>
							<Button type="submit" variant="secondary" onClick={handleSubmit} className="w-fit place-self-center mt-10 px-7 py-7 font-semibold text-base sm:text-lg shadow-lg flex flex-row gap-4">
								<svg className="size-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
									<path stroke="none" d="M0 0h24v24H0z" fill="none" />
									<path d="M9 8v-2a2 2 0 0 1 2 -2h7a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-7a2 2 0 0 1 -2 -2v-2" />
									<path d="M3 12h13l-3 -3" />
									<path d="M13 15l3 -3" />
								</svg>
								Iniciar Sesión
							</Button>
						</form>
					</div>
				</ScrollArea>
			</div>
		</main>
	);
}
