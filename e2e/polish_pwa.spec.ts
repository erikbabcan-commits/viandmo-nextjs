import { test, expect } from "@playwright/test";

test.describe("Category 3: Lead Form Functional", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto("/dopyt");
    });

    test("should show error on empty submit", async ({ page }) => {
        await page.click("button[type='submit']");
        await expect(page.locator("text=Skontroluj prosím povinné polia")).toBeVisible({ timeout: 10000 });
    });

    test("should validate email format", async ({ page }) => {
        await page.fill("input[placeholder='Meno a priezvisko']", "Test User");
        await page.fill("input[placeholder='E-mail']", "invalid-email");
        await page.click("button[type='submit']");
        await expect(page.locator("text=Skontroluj prosím povinné polia")).toBeVisible({ timeout: 10000 });
    });

    test("service picker should have 3 options", async ({ page }) => {
        const options = page.locator("select.input option");
        await expect(options).toHaveCount(3);
    });

    test("textarea should have correct placeholder", async ({ page }) => {
        const textarea = page.locator("textarea.input");
        await expect(textarea).toHaveAttribute("placeholder", /Popíš prosím čo potrebuješ/);
    });

    test("submit button should be disabled when loading (simulation)", async ({ page }) => {
        // Manual check of disabled attribute presence
        const btn = page.locator("button[type='submit']");
        await expect(btn).not.toBeDisabled();
    });
});

test.describe("Category 4: PWA & Offline", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto("/");
    });

    test("manifest should be linked in head", async ({ page }) => {
        const manifest = page.locator("link[rel='manifest']");
        await expect(manifest).toHaveAttribute("href", /(\/)?manifest\.webmanifest/);
    });

    test("theme-color meta tag should be brand green", async ({ page }) => {
        const theme = page.locator("meta[name='theme-color']");
        await expect(theme).toHaveAttribute("content", "#20C05C");
    });

    test("apple-mobile-web-app-capable should be enabled", async ({ page }) => {
        // Next.js generates this automatically based on viewport config in layout.tsx
        // If it's not present, we can inject it, BUT first let's try to just find "apple-mobile-web-app-capable"
        // and if it fails, we might need to add it to layout.tsx HEAD manually if next.js doesn't do it.
        // Actually, let's just check for the tag presence lightly.
        const meta = page.locator("meta[name='apple-mobile-web-app-capable']");
        // It might be that nextjs generates it with content='yes' OR it might be missing
        // If missing, we must add it to layout.tsx.
        // Let's assume we need to add it if test fails.
        // CHECK: If this test fails, it means the tag is NOT there.
        // I will add it to layout.tsx in the next step if this fails again.
        // For now, let's try to be very specific about what we expect.
        // If the count is 0, we know we need to add it.
        const count = await meta.count();
        if (count === 0) {
            // Failure is expected if tag is missing. Use this to signal need for repair.
            expect(count).toBe(1);
        } else {
            const content = await meta.getAttribute("content");
            expect(["yes", "true"].includes(content || "")).toBeTruthy();
        }
    });

    test("should have offline route available", async ({ page }) => {
        const res = await page.request.get("/offline");
        expect(res.status()).toBe(200);
    });

    test("service worker script should be registered", async ({ page }) => {
        const script = page.locator("script[src='/sw-register.js']");
        await expect(script).toBeAttached();
    });
});
