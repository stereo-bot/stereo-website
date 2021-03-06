import { discordServer } from "../config";
import React, { useEffect } from "react";
import Head from "next/head";
import Link from "next/link";

const Discord: React.FC = () => {
	useEffect(() => window.location.replace(discordServer), []);

	return (
		<>
			<Head>
				<title>301 - Redirecting to Discord</title>
				<meta property="og:site_name" content="Stereo" />
				<meta property="og:title" content="Stereo - Discord" />
				<meta property="og:type" content="site" />
				<meta property="og:url" content="https://stereo-bot.tk/discord" />
				<meta
					property="og:description"
					content="Something wrong? Need help setting up the Discord bot? Join our support server, we are happy to help you!"
				/>
				<meta property="og:image" content="https://cdn.stereo-bot.tk/branding/logo.png" />
			</Head>
			<div className="redirect-container background">
				<div className="redirect">
					<p>We are redirecting you to Discord</p>
					<p>If this is not done automatically, press the button below</p>
					<Link href={discordServer}>
						<a>
							<i className="fab fa-discord" />
							To Discord
						</a>
					</Link>
				</div>
			</div>
		</>
	);
};

export default Discord;
