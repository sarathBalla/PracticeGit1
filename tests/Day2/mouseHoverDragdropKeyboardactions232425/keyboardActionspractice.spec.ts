import {test} from "@playwright/test"
import { text } from "stream/consumers";

test("Using Keyboard Actions",async({page})=>
{

    await page.goto("https://testpages.eviltester.com/pages/forms/text-inputs/");
    const commentTextArea = page.getByRole('textbox', { name: 'email url' });
    await commentTextArea.fill("Testing");
    await commentTextArea.press("Control+a+x");
    const textPage = page.getByRole('textbox', { name: 'Text', exact: true });
    await textPage.press("Control+v");
    await textPage.press("ArrowLeft");
    await textPage.press("N");
    await page.keyboard.press("PageDown");
    await page.keyboard.press("PageUp");
});