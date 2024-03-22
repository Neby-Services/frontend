import "@fontsource-variable/montserrat";
import type {Metadata} from "next";
import {Toaster} from "sonner";
import "./globals.css";

export const metadata: Metadata = {
	title: "Neby",
	description: "Neby - La solución para una comunidad organizada"
};

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="es">
			<body>
				{children}
				<Toaster
					expand={true}
					toastOptions={{
						classNames: {
							toast: "font-sans",
							title: "font-medium",
							description: "font-normal"
						}
					}}
				/>
			</body>
		</html>
	);
}
