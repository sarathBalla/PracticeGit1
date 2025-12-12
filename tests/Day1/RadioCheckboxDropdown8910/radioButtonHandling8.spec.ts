import{expect, test} from"@playwright/test";

test("Radio Button Handling Test",async({page})=>{
    await page.goto("https://artoftesting.com/samplesiteforselenium");
    const maleradio = page.locator("#male");
    // Checking the male radio button
    await maleradio.check();
    // Verifying if the male radio button is checked
    await expect(maleradio).toBeChecked();
    await expect(page.locator("#female")).not.toBeChecked();
});
