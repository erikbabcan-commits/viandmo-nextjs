
import { test, expect } from "@playwright/test";

test.describe("Landing Page UI/UX", () => {

    const viewports = [
        { width: 375, height: 667, name: 'Mobile' }, // iPhone SE
        { width: 1280, height: 720, name: 'Desktop' }
    ];

    for (const viewport of viewports) {
        test(`Home Page should have clear CTA and H1 on ${viewport.name}`, async ({ page }) => {
            await page.setViewportSize({ width: viewport.width, height: viewport.height });
            await page.goto("/");

            // 1. Relevancia: Check H1
            const h1 = page.locator("h1");
            await expect(h1).toBeVisible();
            await expect(h1).toContainText(/Sťahovanie|upratovanie|tepovanie/i);

            // 2. Immediacy: Check CTA buttons in Hero
            const callBtn = page.locator("a[data-evt='click_call']").first();
            await expect(callBtn).toBeVisible();
            await expect(callBtn).toHaveAttribute("href", /tel:/);

            const formBtn = page.locator("a[data-evt='open_form']").first();
            await expect(formBtn).toBeVisible();
            await expect(formBtn).toHaveAttribute("href", "/dopyt");
        });

        test(`Moving Service Page should be optimized for ads on ${viewport.name}`, async ({ page }) => {
            await page.setViewportSize({ width: viewport.width, height: viewport.height });
            await page.goto("/stahovanie-bratislava");

            // 1. Specific H1
            const h1 = page.locator("h1");
            await expect(h1).toBeVisible();
            await expect(h1).toContainText(/Sťahovanie/i);

            // 2. Visible Call Action
            const callBtn = page.locator("a[data-evt='click_call']").first();
            // On mobile, it should be visible near the top
            if (viewport.name === 'Mobile') {
                await expect(callBtn).toBeInViewport();
            }
        });

        test(`Cleaning Service Page should be optimized for ads on ${viewport.name}`, async ({ page }) => {
            await page.setViewportSize({ width: viewport.width, height: viewport.height });
            await page.goto("/upratovanie-bratislava");

            const h1 = page.locator("h1");
            await expect(h1).toBeVisible();
            await expect(h1).toContainText(/Upratovanie/i);

            const callBtn = page.locator("a[data-evt='click_call']").first();
            await expect(callBtn).toBeVisible();
        });
    }

    test("Phone number in header should be clickable and visible on all pages", async ({ page }) => {
        // Navigation across main pages
        const routes = ["/", "/stahovanie-bratislava", "/cennik"];

        for (const route of routes) {
            await page.goto(route);
            const headerPhone = page.locator("header a[href^='tel:']");
            await expect(headerPhone).toBeVisible();
        }
    });

    test("Form page should load quickly and have visible inputs", async ({ page }) => {
        await page.goto("/dopyt");

        // Immediate input visibility
        const nameInput = page.getByPlaceholder("Meno a priezvisko");
        await expect(nameInput).toBeVisible();

        // Submit button visible
        const submitBtn = page.locator("button[type='submit']");
        await expect(submitBtn).toBeVisible();
    });
});
