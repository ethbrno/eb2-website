import { expect, test } from "@playwright/test";

test("index page have correct tags", async ({ page }) => {
	await page.goto("/");
	const tags = page.getByTestId(
		"tags"
	);
	await expect(tags).toContainText("#freedom #anonymity #non-kyc #encryption #selfsovereignty #p2p #opensource #web3");
});

test("can clickthrough to venues and venue link exist", async ({ page }) => {
	await page.goto("/");
	await page.getByRole("link", { name: "Venues" }).click();
	await expect(page).toHaveURL(/.*venues/);
	const venue = page.getByRole("link", { name: "Impact Hub Brno" });
	await expect(venue).toHaveAttribute("href", "https://www.hubbrno.cz/en/");
});

test("can navigate to contributors and Tree is contributor", async ({ page }) => {
	await page.goto("/contributors");
	//this should probably test some test entry from json, will fix
	const tree = page.getByRole("link", { name: "Tree" });
	await expect(tree).toHaveAttribute("href", "https://twitter.com/treecz");
});

test("can navigate to speakers", async ({ page }) => {
	await page.goto("/contributors/speakers");
});

test("can clickthrough to team", async ({ page }) => {
	await page.goto("/contributors");
	await page.getByRole('link', { name: 'Core team' }).click();
	await expect(page).toHaveURL(/.*team/);
});