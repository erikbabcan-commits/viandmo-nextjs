
import { test, expect } from '@playwright/test';

test('contact form submission', async ({ page }) => {
    await page.goto('/dopyt');
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(1000); // Small stability wait

    // Fill out the form
    await page.getByPlaceholder(/Meno a priezvisko/i).fill('Test User');
    await page.getByPlaceholder(/Telefón/i).fill('+421911275755');
    await page.getByPlaceholder(/E-mail/i).fill('test@example.com');
    await page.getByPlaceholder(/Lokalita/i).fill('Bratislava');
    await page.getByPlaceholder(/Popíš prosím čo potrebuješ/i).fill('Test message for E2E.');

    // Mock the API response
    await page.route('**/api/lead', async route => {
        await route.fulfill({ status: 200, body: JSON.stringify({ success: true }) });
    });

    const submitBtn = page.getByRole('button', { name: /Odoslať nezáväzný dopyt/i });

    // Scroll and wait for stability
    await submitBtn.scrollIntoViewIfNeeded();

    // Listen for the response
    const responsePromise = page.waitForResponse(res => res.url().includes('/api/lead'), { timeout: 15000 });

    await submitBtn.click({ force: true });

    // Check for loading state, validation error, or instant redirect
    const result = await Promise.race([
        page.getByText(/Odosielam/i).waitFor({ state: 'visible', timeout: 5000 }).then(() => 'loading_started').catch(() => 'never_seen'),
        page.waitForURL(/dakujeme/, { timeout: 10000 }).then(() => 'redirected'),
        page.getByText(/Skontroluj prosím/i).waitFor({ state: 'visible', timeout: 5000 }).then(() => 'validation_error').catch(() => 'never_seen'),
        page.waitForTimeout(12000).then(() => 'timeout')
    ]);

    if (result === 'loading_started' || result === 'redirected') {
        if (result === 'loading_started') {
            await responsePromise;
        }
        await expect(page).toHaveURL(/dakujeme/, { timeout: 15000 });
    } else {
        throw new Error(`Submission failed or timed out: ${result}`);
    }
});
