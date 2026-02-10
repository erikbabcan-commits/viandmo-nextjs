import { test, expect } from "@playwright/test";

test.describe("Category 1: Home Page UI", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto("/");
    });

    test("headline should be visible and contain key services", async ({ page }) => {
        const h1 = page.locator("h1");
        await expect(h1).toBeVisible();
        await expect(h1).toContainText(/Sťahovanie|upratovanie|tepovanie/i);
    });

    test("brand logo should be visible in header", async ({ page }) => {
        const logo = page.locator("header img[alt='viandmo.com']");
        await expect(logo).toBeVisible();
    });

    test("hero bullets should list at least 4 items", async ({ page }) => {
        const bullets = page.locator("ul li.pill");
        const count = await bullets.count();
        expect(count).toBeGreaterThanOrEqual(4);
    });

    test("service cards should display 3 main categories", async ({ page }) => {
        // Scope to the specific section to avoid counting pricing/review cards
        const serviceSection = page.locator("section").filter({ hasText: "Vyber si službu" });
        const cards = serviceSection.locator(".card");
        await expect(cards).toHaveCount(3);
    });

    test("main CTA buttons should be present in hero", async ({ page }) => {
        const ctas = page.locator(".vh100 a.btn");
        await expect(ctas).toHaveCount(3);
    });
});

test.describe("Category 2: Navigation & Routing", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto("/");
    });

    test("should navigate to pricing page", async ({ page }) => {
        await page.click("text=Cenník");
        await expect(page).toHaveURL(/\/cennik/);
        await expect(page.locator("h1")).toContainText(/Cenník/i);
    });

    test("should navigate to moving service page", async ({ page }) => {
        await page.click("text=Sťahovanie Bratislava");
        await expect(page).toHaveURL(/\/stahovanie-bratislava/);
    });

    test("footer should contain contact email", async ({ page }) => {
        const email = page.locator("footer").getByText(/info@viandmo.com/i);
        await expect(email).toBeVisible();
    });

    test("sticky actions should be present (mobile check simulation)", async ({ page }) => {
        await page.setViewportSize({ width: 375, height: 667 });
        const sticky = page.locator(".sticky-actions");
        await expect(sticky).toBeVisible();
    });

    test("brand link in footer should point to home", async ({ page }) => {
        const homeLink = page.locator("footer a").first();
        await expect(homeLink).toHaveAttribute("href", "/");
    });
});
