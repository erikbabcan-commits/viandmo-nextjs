import { test, expect } from "@playwright/test";

test.describe("Category 5: SEO & Meta Audits", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto("/");
    });

    test("page title should be descriptive for SEO", async ({ page }) => {
        await expect(page).toHaveTitle(/viandmo.com – Sťahovanie & Čistenie Bratislava/);
    });

    test("meta description should be present and valid length", async ({ page }) => {
        const desc = page.locator("meta[name='description']");
        const content = await desc.getAttribute("content");
        expect(content?.length).toBeGreaterThan(50);
    });

    test("meta keywords should include key terms", async ({ page }) => {
        const keywords = page.locator("meta[name='keywords']");
        await expect(keywords).toHaveAttribute("content", /stahovanie|upratovanie|bratislava/);
    });

    test("there should be exactly one H1 tag per page", async ({ page }) => {
        const h1s = page.locator("h1");
        await expect(h1s).toHaveCount(1);
    });

    test("all service links should have descriptive text", async ({ page }) => {
        const links = page.locator(".grid3 a.card strong");
        await expect(links).toHaveCount(3);
        for (const link of await links.all()) {
            const text = await link.innerText();
            expect(text.length).toBeGreaterThan(5);
        }
    });
});
