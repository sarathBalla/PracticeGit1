import { test } from '@playwright/test';

test("Handle Ifrrame with Name", async ({ page }) => {

    await page.goto("https://www.w3schools.com/html/tryit.asp?filename=tryhtml5_input_form");
    const w3frame = page.frame("iframeResult");
    await w3frame?.locator("#fname").fill("Playwright");

});


test("Handle Ifrrame with URL", async ({ page }) => {

    await page.goto("https://www.w3schools.com/html/html_iframe.asp");
    await page.frame({url:"https://www.w3schools.com/html/default.asp"})?.getByLabel("Button to open search field").click();
});

test("Handle Iframe with frameLocator", async ({ page }) => {

    await page.goto("https://www.w3schools.com/html/html_iframe.asp");
    await page.frameLocator("[title='W3Schools HTML Tutorial']")?.getByLabel("Button to open search field").click();

});


