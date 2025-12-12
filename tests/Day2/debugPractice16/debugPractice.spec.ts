import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('https://demo.nopcommerce.com/login');
    await expect(page.getByRole('link', { name: 'nopCommerce demo store' })).toBeVisible();
});

test("Sucessful Login", async ({ page, browserName }) => {
    await page.goto('https://demo.nopcommerce.com/login');
    await page.getByRole('textbox', { name: 'Email:' }).click();
    await page.getByRole('textbox', { name: 'Email:' }).fill('testcodeautomate@gmail.com');
    await page.getByRole('textbox', { name: 'Password:' }).click();
    await page.getByRole('textbox', { name: 'Password:' }).fill('Priy@3416');
    await page.getByRole('button', { name: 'Log in' }).click();

});