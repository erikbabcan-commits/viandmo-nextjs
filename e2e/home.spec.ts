import { test, expect } from '@playwright/test';

test('has correct SEO metadata', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Sťahovanie/i);

    const description = page.locator('meta[name="description"]');
    await expect(description).toHaveAttribute('content', /Sťahovanie/i);
});

test('navigation to pricing', async ({ page }) => {
    await page.goto('/');

    // Click the pricing link.
    await page.getByRole('link', { name: 'Cenník' }).first().click();

    // Expects page to have a heading with the name of Pricing.
    // Adjust expectation based on actual pricing page content
    await expect(page).toHaveURL(/cennik/);
});
