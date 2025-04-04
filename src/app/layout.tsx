import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Youre good at streaming - Tapping Benchmark",
	description: "Tapping benchmark tool with stats!",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
      <head>
        <meta name="google-site-verification" content="Mqx9O83ZURqF7C27aO3iqzkQLS3c5JTqtyttOEzJPmk" />
      </head>
			<html lang="en">
				<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
			</html>
		</>
	);
}
