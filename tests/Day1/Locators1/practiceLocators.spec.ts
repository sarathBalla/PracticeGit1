import { test } from "@playwright/test";
/**
 * Basic Locator practice Locator using different selector strategies
 */
test.skip("Practice Locators", async ({ page }) => {
    await page.goto("https://www.saucedemo.com/");
    await page.locator("//input[@name='user-name']").fill("standard_user"); // XPath Selector
    await page.locator("input#password").fill("secret_sauce");// CSS Selector with ID
    await page.locator("input.submit-button").click();// CSS Selector with Class
    await page.locator("text='Sauce Labs Backpack'").click();// Text Selector
});
/**
 * Locator inside Locator using 'has' and 'hasNot' options
 */
test("Practice Locators method with options", async ({ page }) => {
    await page.goto("https://www.saucedemo.com/");

    //hasLocator option example
    await page.locator(".form_group",{has: page.locator("input#user-name")}).click();
    await page.locator(".form_group",{has: page.locator("input#user-name")}).pressSequentially("standard_user");
    
    //hasnotLocator option example
    await page.locator(".form_group",{hasNot: page.locator("input#user-name")}).click();
    await page.locator(".form_group",{hasNot: page.locator("input#user-name")}).pressSequentially("secret_sauce");
    
    await page.locator("input.submit-button").click();
    
    //hasText option example
    await page.locator("//a",{hasText:"Sauce Labs Backpack"}).click();

    //hasNotText option example
    //await page.locator(".inventory_item_name ",{hasNotText:"/sauce.*/"}).click();
});