import { test } from '@playwright/test';

test("Fill Press and Hold Sequentially", async ({ page }) => {


    // filling the form fields sequentially using fill method
    await page.goto("https://ultimateqa.com/filling-out-forms/");
    await page.locator("#et_pb_contact_name_0").fill("TestCodeAutomate");
    await page.locator("#et_pb_contact_message_0").fill("Learn");

    // filling the with contentediatable field is True in tags
    await page.goto("https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_global_contenteditable");
    await page.locator('iframe[name="iframeResult"]').contentFrame().getByText('This is a paragraph. It is').fill("Playwright Automation");
    // Press sequentailly and Press method
    await page.goto("https://www.google.com/");
    // Press sequentially will take time to type each character one by one based on the default delay
    await page.locator("#APjFqb").pressSequentially("Playwright");
    // Press method with combined keys or specifically press any key
    await page.locator("#APjFqb").press("ArrowDown+ArrowDown+ArrowDown");
});
