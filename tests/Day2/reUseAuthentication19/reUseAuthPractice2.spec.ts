import { test, expect } from "@playwright/test"

test.beforeEach(async ({ page }) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    // await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
    // await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
    // await page.getByRole('button', { name: 'Login' }).click();
    // await page.waitForURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");
    // await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();

});

test("Verify Apply leave card navigation on dashboard page", async ({ page }) => {
    await expect(page.getByText("Quick Launch")).toContainText("Quick Launch");
    await expect(page.getByRole('button', { name: 'Apply Leave' })).toBeVisible();
    await page.getByRole('button', { name: 'Apply Leave' }).click();
    await expect(page.getByLabel('Topbar Menu').getByRole('list')).toContainText('Apply');
});