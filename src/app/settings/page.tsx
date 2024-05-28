"use client";

import Header from "@/components/header";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { logout } from "@/lib/actions";
import { fetchDeleteSelf, fetchSelfUserData, fetchSettings } from "@/lib/api";
import { formToastError, toSentenceCase } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { FormEvent, useEffect, useState } from "react";

export default function ConfigurationPage() {
	const [userData, setUserData] = useState<any>();
	const [email, setEmail] = useState("");
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [loading, setLoading] = useState(false);
	const router = useRouter();

	useEffect(() => {
		const fetchData = async () => {
			try {
				const data = await fetchSelfUserData();
				if (!data.error) {
					setUserData(data["user"]);
				} else {
					logout();
				}
			} catch (error) {
				console.log(error);
				logout();
			}
		};

		fetchData();
	}, []);

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();

		if (loading) return;
		setLoading(true);

		const settingsSentData: SettingsSentData = {};
		if (email) settingsSentData.email = email;
		if (username) settingsSentData.username = username;
		if (password) settingsSentData.password = password;

		if (Object.keys(settingsSentData).length === 0) {
			formToastError("no form fields filled out");
		}
		else {

			const data = await fetchSettings(settingsSentData);
			console.log(data);
			if (data["error"]) formToastError(toSentenceCase(data["error"]));
			else router.push("/dashboard");

		}
		setLoading(false);
	};

	const handleDeleteAccount = async () => {
		if (!userData) return;
		setLoading(true);
		const data = await fetchDeleteSelf(userData.id, userData.isAdmin);
		setLoading(false);

		if (data["error"]) {
			formToastError(toSentenceCase(data["error"]));
		} else {
			logout();
			router.push("/");
		}
	};

	return (
		<main>
			<Header />
			<section className="w-full min-[1800px]:mx-auto h-[100%] box-content">
				<div className="py-20 px-4 md:px-16 gap-6 flex flex-col items-center">
					{userData && (
						<div className="flex flex-col md:flex-row items-center justify-center py-3 mb-5 w-full max-w-2xl">
							<Avatar className="size-12 md:size-24 md:space-x-4 mr-4 md:mr-8" title={userData.username}>
								<div className="bg-secondary size-full grid place-content-center text-background font-bold text-xl md:text-4xl overflow-hidden">
									<p>{userData.username.slice(0, 1).toUpperCase()}</p>
								</div>
							</Avatar>
							<h1 className="font-bold text-2xl md:text-5xl text-center mb-0">Manage Account</h1>
						</div>
					)}
					<form onSubmit={handleSubmit} className="flex flex-col w-[100%] max-w-2xl">
						<label className="flex flex-col text-sm sm:text-lg font-semibold gap-2 mb-6">
							Email
							<input onChange={e => setEmail(e.target.value)} value={email} className="border-2 rounded-lg text-base p-1.5 placeholder-gray-400" type="email" placeholder={userData?.email || "Enter your email"} />
						</label>
						<label className="flex flex-col text-sm sm:text-lg font-semibold gap-2 mb-6">
							Username
							<input onChange={e => setUsername(e.target.value)} value={username} className="border-2 rounded-lg text-base p-1.5 placeholder-gray-400" type="text" placeholder={userData?.username || "Enter your username"} />
						</label>
						<label className="flex flex-col text-sm sm:text-lg font-semibold gap-2 mb-6">
							Password
							<div className="relative">
								<input onChange={e => setPassword(e.target.value)} value={password} className="border-2 rounded-lg text-base p-1.5 w-full pr-12" type="password" />
							</div>
						</label>
						<div className="flex justify-between items-center pt-6">
							<AlertDialog>
								<AlertDialogTrigger asChild>
									<div>
										<Button type="button" variant="ghost" className="text-gray-500">
											Delete account
										</Button>
									</div>
								</AlertDialogTrigger>
								<AlertDialogContent>
									<AlertDialogHeader>
										<AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
										<AlertDialogDescription>This action cannot be undone. This will permanently delete your account and remove your data from our servers.</AlertDialogDescription>
									</AlertDialogHeader>
									<AlertDialogFooter>
										<AlertDialogCancel>Cancel</AlertDialogCancel>
										<AlertDialogAction onClick={handleDeleteAccount}>Continue</AlertDialogAction>
									</AlertDialogFooter>
								</AlertDialogContent>
							</AlertDialog>

							{loading ? (
								<div className="flex flex-col items-center justify-center gap-2">
									<Loader2 className="size-6 animate-spin" />
									Loading
								</div>
							) : (
								<Button disabled={loading} type="submit" variant="secondary" size="lg" >
									Update
								</Button>
							)}
						</div>
					</form>
				</div>
			</section >
		</main >
	);
}
