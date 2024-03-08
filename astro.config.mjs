import {defineConfig} from "astro/config";
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
	server: {
		host: true,
		port: 4000
	},
	integrations: [
		tailwind({
			applyBaseStyles: false
		}),
		react()
	]
});
