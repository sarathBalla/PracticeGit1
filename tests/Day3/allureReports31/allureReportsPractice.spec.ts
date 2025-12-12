import { expect, test } from "@playwright/test"

test("Reporter Practice1",
    {
        annotation: {
            type: "some Type",
            description: "US#734590"

        }
    },
    async ({ page }) => {

        await page.goto("https://www.google.com");
        await expect(page).toHaveTitle("Google");

    });


test("Reporter Practice2", async ({ page }) => {

    await page.goto("https://www.google.com");
    await expect(page).toHaveTitle("Google");

});

test("Reporter Practice3", async ({ page }) => {

    await page.goto("https://www.google.com");
    await expect(page).toHaveTitle("Google");

});
