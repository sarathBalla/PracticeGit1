import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
    await page.goto("https://www.saucedemo.com/");
    await page.locator("input#user-name").fill("standard_user");
    await page.locator("input#password").fill("secret_sauce");
    await page.locator("input#login-button").click();
});

test.afterEach(async({page})=>{
    //logout
    await page.getByRole("button", { name: 'Open Menu' }).click();
    await page.getByRole("link", { name: 'Logout' }).click();   
});      

test("Add item to Cart verification", async ({ page }) => {

    // Adding an item to the cart and verifying
    await page.getByText("Sauce Labs Backpack").click();
    await page.getByText("Add to cart").click();
    await page.locator(".shopping_cart_link").click();
    expect(page.getByRole("link", { name: "Sauce Labs Backpack" })).toHaveText("Sauce Labs Backpack");
    expect(page.locator("[data-test='remove-sauce-labs-backpack']")).toBeVisible();
    await page.locator(".shopping_cart_link").click();
    await page.locator("[data-test='remove-sauce-labs-backpack']").click();
    expect(page.getByRole("link", { name: "Sauce Labs Backpack" })).not.toBeVisible();

});

test("Empty Cart Verification Test", async ({ page }) => {
    // Verifying the cart is empty after login
    await page.locator("div#shopping_cart_container").click();
    await expect(page.locator("span.shopping_cart_badge")).toHaveCount(0);
}
);