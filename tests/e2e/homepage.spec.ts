import { test, expect } from '@playwright/test';

test('homepage loads and has correct title', async ({ page }) => {
  await page.goto('/');
  
  // Check that the page loads
  await expect(page).toHaveTitle(/KDVLab/);
  
  // Check for main content
  await expect(page.locator('main')).toBeVisible();
});

test('homepage has good performance', async ({ page }) => {
  await page.goto('/');
  
  // Basic performance check
  const performanceEntries = await page.evaluate(() => {
    return JSON.stringify(performance.getEntriesByType('navigation'));
  });
  
  const navigation = JSON.parse(performanceEntries)[0];
  expect(navigation.loadEventEnd - navigation.fetchStart).toBeLessThan(3000);
});
