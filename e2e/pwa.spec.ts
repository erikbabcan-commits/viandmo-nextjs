
import { test, expect } from '@playwright/test';

test.describe('PWA & Offline', () => {
    test.beforeEach(async () => {
        console.log('DEBUG: Running PWA & Offline tests - v3');
    });

    test('service worker registration script is present', async ({ page }) => {
        await page.goto('/');
        const swScript = page.locator('script[src="/sw-register.js"]');
        await expect(swScript).toBeAttached();
    });

    test('offline page renders correctly', async ({ page }) => {
        await page.goto('/offline');
        await expect(page.locator('body')).toContainText(/Si offline/i);
        // Use a very specific locator to avoid strict mode violation with header/footer
        const mainLink = page.getByRole('main').getByRole('link', { name: /Domov/i });
        await expect(mainLink).toBeVisible();
    });
});

test.describe('Service Pages', () => {
    const services = [
        { name: 'Sťahovanie', url: '/stahovanie-bratislava', heading: /Sťahovanie/i },
        { name: 'Upratovanie', url: '/upratovanie-bratislava', heading: /Upratovanie/i },
        { name: 'Tepovanie', url: '/tepovanie-bratislava', heading: /Tepovanie/i },
    ];

    for (const service of services) {
        test(`renders ${service.name} page`, async ({ page }) => {
            await page.goto(service.url);
            await expect(page.getByRole('heading', { level: 1 })).toContainText(service.heading);
        });
    }
});
