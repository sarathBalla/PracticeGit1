import { expect, test } from "@playwright/test"

test("Reporter Practice4", async ({ page }) => {

    await page.goto("https://www.google.com");
    await expect(page).toHaveTitle("Google");

});

test("Reporter Practice5", async ({ page }) => {

    await page.goto("https://www.google.com");
    await expect(page).toHaveTitle("Google");

});

test("Reporter Practice6", async ({ page }) => {

    await page.goto("https://www.google.com");
    await expect(page).toHaveTitle("Google");

});
