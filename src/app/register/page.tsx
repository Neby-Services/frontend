"use client";

import {useState, FormEvent} from "react";
import {Button} from "@/components/ui/button";
import {ScrollArea} from "@/components/ui/scroll-area";
import UserTypeSelect from "@/components/ui/user-type-select";
import styles from "@/ui/register.module.css";
// import {registerUser, RegisterData} from "@/lib/actions";

export default function Register() {
	const [email, setEmail] = useState("");
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [userType, setUserType] = useState("neighbor");
	const [communityCode, setCommunityCode] = useState("");
	const [communityName, setCommunityName] = useState("");

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();
		if (password != confirmPassword) return;

		interface RegisterData {
			email: string;
			username: string;
			password: string;
			type: string;
			communityCode?: string;
			communityName?: string;
		}

		let registerData: RegisterData = {
			email,
			username,
			password,
			type: userType
		};

		if (userType == "neighbor") registerData["communityCode"] = communityCode;
		else if (userType == "admin") registerData["communityName"] = communityName;

		const res = await fetch("/api/auth/register", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(registerData)
		});

		const data = await res.json();

		console.log(data);
		// registerUser(registerData);
	};

	return (
		<main className={`${styles.background} h-svh`}>
			<div className="h-svh py-8 grid place-content-center">
				<ScrollArea className="flex flex-col justify-between w-fit max-h-svh bg-background shadow-xl rounded-xl">
					<div className="px-16 py-10">
						<h1 className="text-6xl font-bold text-center mb-12">Crear Cuenta</h1>
						<form onSubmit={e => e.preventDefault()} className="flex flex-col flex-1">
							<label className="flex flex-col text-xl font-semibold gap-2 mb-6">
								Email
								<input onChange={e => setEmail(e.target.value)} value={email} className="border-2 border-black rounded-lg text-base p-1.5" type="email" />
							</label>
							<label className="flex flex-col text-xl font-semibold gap-2 mb-6">
								Nombre de usuario
								<input onChange={e => setUsername(e.target.value)} value={username} className="border-2 border-black rounded-lg text-base p-1.5" type="text" />
							</label>
							<label className="flex flex-col text-xl font-semibold gap-2 mb-6">
								Contraseña
								<input onChange={e => setPassword(e.target.value)} value={password} className="border-2 border-black rounded-lg text-base p-1.5" type="password" />
							</label>
							<label className="flex flex-col text-xl font-semibold gap-2 mb-6">
								Confirmar contraseña
								<input onChange={e => setConfirmPassword(e.target.value)} value={confirmPassword} className="border-2 border-black rounded-lg text-base p-1.5" type="password" />
							</label>
							<div className="flex flex-col text-xl font-semibold gap-2 mb-6">
								<label>Tipo de usuario</label>
								<UserTypeSelect value={userType} setValue={setUserType} />
							</div>
							{userType === "neighbor" && (
								<label className="flex flex-col text-xl font-semibold gap-2 mb-6">
									<span>Código de comunidad</span>
									<input onChange={e => setCommunityCode(e.target.value)} value={communityCode} className="border-2 border-black rounded-lg text-base p-1.5" type="text" />
								</label>
							)}
							{userType === "admin" && (
								<label className="flex flex-col text-xl font-semibold gap-2 mb-6">
									<span>Nombre de la comunidad</span>
									<input onChange={e => setCommunityName(e.target.value)} value={communityName} className="border-2 border-black rounded-lg text-base p-1.5" type="text" />
								</label>
							)}
							<Button onClick={handleSubmit} className="w-fit place-self-center mt-10 px-7 py-7 font-semibold text-lg shadow-lg flex flex-row gap-4">
								<svg className="size-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
									<path stroke="none" d="M0 0h24v24H0z"></path>
									<path d="M8 7a4 4 0 1 0 8 0 4 4 0 0 0-8 0M16 19h6M19 16v6M6 21v-2a4 4 0 0 1 4-4h4"></path>
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
