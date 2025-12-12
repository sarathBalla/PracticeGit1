import { expect, test } from "@playwright/test";

test("Assertion Practice", async ({ page }) => {
    await page.goto("https://www.saucedemo.com/");
    /**
     * Focussing on different assertion practices on login button
     */
    // Checking for the element count
    await expect(page.locator("input#login-button-xyz")).toHaveCount(1);
    await expect(page.locator("input#login-button")).toBeEnabled();
    await expect.soft(page.locator("input#login-button")).toBeDisabled();
    await expect(page.locator("input#login-button")).toBeVisible();
    await expect(page.locator("input#login-button")).not.toBeHidden();
    await expect(page.locator("input#login-button")).toHaveText("Login");
    await expect(page.locator("input#login-button")).toHaveAttribute("value", "Login");
    await expect(page.locator("input#login-button")).toHaveId("login-button");
    await expect(page.locator("input#login-button")).toHaveClass("submit-button btn_action");
    //Page Level Assertions

    await expect(page).toHaveURL("https://www.saucedemo.com/");
 
    // Showing custom error message using expect method
    await expect(page,"This is custom error message for Practice").not.toHaveTitle("Swag Labs");

});