"use client";

import {Button} from "@/components/ui/button";
import {ScrollArea} from "@/components/ui/scroll-area";
import UserTypeSelect from "@/components/ui/user-type-select";
import {fetchRegister} from "@/lib/api";
import {formToastError, toSentenceCase} from "@/lib/utils";
import styles from "@/ui/register.module.css";
import Link from "next/link";
import {useRouter} from "next/navigation";
import {FormEvent, useState} from "react";

export default function Register() {
	const [email, setEmail] = useState("");
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [userType, setUserType] = useState("neighbor");
	const [communityCode, setCommunityCode] = useState("");
	const [communityName, setCommunityName] = useState("");

	const router = useRouter();

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();

		if (email == "") return formToastError("Email is required");
		if (username == "") return formToastError("Username is required");
		if (password == "") return formToastError("Password is required");
		if (password != confirmPassword) return formToastError("Passwords do not match");
		if (userType != "neighbor" && userType != "admin") return formToastError("User type is invalid");
		if (userType == "neighbor" && communityCode == "") return formToastError("Community code is required");
		if (userType == "admin" && communityName == "") return formToastError("Community name is required");

		let registerData: RegisterData = {
			email,
			username,
			password,
			type: userType
		};

		if (userType == "neighbor") registerData["community_code"] = communityCode;
		else if (userType == "admin") registerData["community_name"] = communityName;

		const data = await fetchRegister(registerData);
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
						<h1 className="text-3xl sm:text-4xl font-bold text-center mb-12">Crear Cuenta</h1>
						<form onSubmit={e => e.preventDefault()} className="flex flex-col flex-1">
							<label className="flex flex-col text-sm sm:text-lg font-semibold gap-2 mb-6">
								Email
								<input onChange={e => setEmail(e.target.value)} value={email} className="border-2 rounded-lg text-base p-1.5" type="email" />
							</label>
							<label className="flex flex-col text-sm sm:text-lg font-semibold gap-2 mb-6">
								Nombre de usuario
								<input onChange={e => setUsername(e.target.value)} value={username} className="border-2 rounded-lg text-base p-1.5" type="text" />
							</label>
							<label className="flex flex-col text-sm sm:text-lg font-semibold gap-2 mb-6">
								Contraseña
								<input onChange={e => setPassword(e.target.value)} value={password} className="border-2 rounded-lg text-base p-1.5" type="password" />
							</label>
							<label className="flex flex-col text-sm sm:text-lg font-semibold gap-2 mb-6">
								Confirmar contraseña
								<input onChange={e => setConfirmPassword(e.target.value)} value={confirmPassword} className="border-2 rounded-lg text-base p-1.5" type="password" />
							</label>
							<div className="flex flex-col text-sm sm:text-lg font-semibold gap-2 mb-6">
								<label>Tipo de usuario</label>
								<UserTypeSelect value={userType} setValue={setUserType} />
							</div>
							{userType === "neighbor" && (
								<label className="flex flex-col text-sm sm:text-lg font-semibold gap-2 mb-6">
									<span>Código de comunidad</span>
									<input onChange={e => setCommunityCode(e.target.value)} value={communityCode} className="border-2 rounded-lg text-base p-1.5" type="text" />
								</label>
							)}
							{userType === "admin" && (
								<label className="flex flex-col text-sm sm:text-lg font-semibold gap-2 mb-6">
									<span>Nombre de la comunidad</span>
									<input onChange={e => setCommunityName(e.target.value)} value={communityName} className="border-2 rounded-lg text-base p-1.5" type="text" />
								</label>
							)}
							<Button type="submit" variant="secondary" onClick={handleSubmit} className="w-fit place-self-center mt-10 px-7 py-7 font-semibold text-base sm:text-lg shadow-lg flex flex-row gap-4">
								<svg className="size-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
									<path stroke="none" d="M0 0h24v24H0z" fill="none" />
									<path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
									<path d="M16 19h6" />
									<path d="M19 16v6" />
									<path d="M6 21v-2a4 4 0 0 1 4 -4h4" />
								</svg>
								Crear Cuenta
							</Button>
						</form>
					</div>
				</ScrollArea>
			</div>
		</main>
	);
}
