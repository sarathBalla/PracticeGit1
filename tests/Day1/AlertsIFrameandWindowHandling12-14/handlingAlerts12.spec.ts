import { test, expect } from '@playwright/test';

test("Alerts Handling", async ({ page }) => {

    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");


    //Dialog Handling befor alert is triggered
    page.on("dialog", dialog => {
        expect(dialog.type() == "alert");
        expect(dialog.message() == "Iam a JS Alert");
        dialog.accept();
    });


    // Triggering the alert
    await page.locator("text=Click for JS Alert").click();
    await expect(page.locator("#result")).toHaveText("You successfully clicked an alert");

});

// Handling Confirm Alert
test("Confirm Alert Handling", async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
    // Dialog Handling before alert is triggered
    page.on("dialog", dialog => {
        expect(dialog.type() == "confirm");
        expect(dialog.message() == "I am a JS Confirm");
        dialog.dismiss();
    });

    // Triggering the confirm alert
    await page.locator("text=Click for JS Confirm").click();
    await expect(page.locator("#result")).toHaveText("You clicked: Cancel");

});

// Handling Prompt Alert
test("Prompt Alert Handling", async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");    
    // Dialog Handling before alert is triggered
    page.on("dialog", dialog => {
        expect(dialog.type() == "prompt");
        expect(dialog.message() == "I am a JS prompt");
        dialog.accept("Playwright Test");
    });             
    // Triggering the prompt alert
    await page.locator("text=Click for JS Prompt").click();
    await expect(page.locator("#result")).toHaveText("You entered: Playwright Test");   
});