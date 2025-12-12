import { test } from "@playwright/test";

test("GetBy Methods Practice", async ({ page }) => {
    await page.goto("https://demo.nopcommerce.com/login");

    /**
     * Using getByLabel with exact option 
     */
    await page.getByLabel("Email:", { exact: true }).fill("testcodeautomate@gmail.com"); // Using getByLabel with exact option 

    /**
     * Using getByPlaceholder fill some input field
     */
    await page.getByPlaceholder("Search store").fill("Laptop"); // Using getByPlaceholder

    /**
     * Using getByText to get the text content 
     */
    console.log(await page.getByText("New Cust", { exact: false }).textContent());// Using getByText
    /**
     * Using getByalt to get image alt attribute
     */
    await page.getByAltText("nopCommerce demo store").click(); // Using getByAltText clicking the logo image

    /**
     * Using getByTitle to get element by title attribute
     */
    await page.getByTitle("Show products in category Electronics").first().click(); // Using getByTitle to click on My Account link
    /** 
     * Using getByRole to get element by role attribute
     */
    await page.getByRole("button", { name: "Search" }).click(); // Using getByRole to click on Search button
});

