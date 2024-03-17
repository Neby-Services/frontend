import type {Metadata} from "next";
import "@fontsource-variable/montserrat";
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
			<body>{children}</body>
		</html>
	);
}
