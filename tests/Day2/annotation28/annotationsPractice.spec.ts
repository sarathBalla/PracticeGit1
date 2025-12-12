import { expect, test } from "@playwright/test"

test("Annotation Practice1",
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

test("Annotation Practice2",
    {
        annotation: [{
            type: "Google Title Verification",
            description: "We are going to verify google"
        },
        {
            type: "Jira Story",
            description: "US#7896542"
        }],
        tag:"@UI"
    }, async ({ page }) => {

        await page.goto("https://www.google.com");
        await expect(page).toHaveTitle("Google");

    });

test.describe("Describe Block1", async () => {

    test("Test Practice 1", async () => {
        console.log("Test Practice 1")

    });

    test("Test Practice 2", async () => {
        console.log("Test Practice 3")

    });

    test("Test Practice 3", async () => {
        console.log("Test Practice 3")

    });

});