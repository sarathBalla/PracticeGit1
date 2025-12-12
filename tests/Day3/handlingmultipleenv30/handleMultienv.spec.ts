import { test } from '@playwright/test'

test("Handle Multiple Envinorments", async ({ page }) => {
    console.log(process.env.URL)
    console.log(process.env.SAUCE_USERNAME);
    console.log(process.env.PASSWORD);
    const url = process.env.URL as string;
    //const url = <string> process.env.URL;
    await page.goto(url);
    await page.locator('[data-test="username"]').fill(process.env.SAUCE_USERNAME as string);
    await page.locator('[data-test="password"]').fill(process.env.PASSWORD as string);
    await page.waitForTimeout(7000);

});