/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
	use: {
		browserName: 'chromium',
		headless: true,
	},
	webServer: {
		command: 'npm run build && npm run preview',
		port: 4173
	}
};

export default config;
