import { test, expect } from "@playwright/test"

// Here we can exclude the already saved Auth way #### 1
test.use({storageState:{cookies:[],origins:[]}})

test.beforeEach(async ({ page }) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    // await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
    // await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
    // await page.getByRole('button', { name: 'Login' }).click();
    // await page.waitForURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");
    // await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();

});

test("Cerify timesheet card navigation on Dashboard", async ({ page,context }) => {
    // Here we can exclude the already saved Auth Way ##### 2 cookies will clear and this test will exclude
    await context.clearCookies();
    await expect(page.getByText("Quick Launch")).toContainText("Quick Launch");
    await expect(page.getByRole("button", { name: "Timesheets" })).toBeVisible();
    await page.getByRole("link", { name: "Time" }).click();
    await expect(page.getByLabel("Topbar Menu").getByRole("list")).toContainText("Timesheets");

});

test("Add candidate for Recruitment", async ({ page }) => {
    await page.getByRole("link", { name: "Recruitment" }).click();
    await page.getByRole("button", { name: " Add" }).click();
    await page.getByRole("textbox", { name: "First Name" }).fill("New");
    await page.getByRole("textbox", { name: "Middle Name" }).fill("cand");
    await page.getByRole("textbox", { name: "Last Name" }).fill("test");
    await page.getByRole("textbox", { name: "Type here" }).first().fill("abcdef@gmail.com");
    await page.getByRole("button", { name: "Save" }).click();
    await page.waitForURL("https://opensource-demo.orangehrmlive.com/web/index.php/recruitment/addCandidate");
    await expect(page.getByText("New cand test", { exact: true })).toContainText("New cand test");

});