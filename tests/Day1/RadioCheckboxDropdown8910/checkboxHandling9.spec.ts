import {test,expect} from '@playwright/test';

test('Checkbox Handling Test',async({page})=>{
    await page.goto("https://artoftesting.com/samplesiteforselenium");
    const seleniumcheckbox= page.locator(".Automation");
    // Checking the selenium checkbox
    await seleniumcheckbox.check();

    // Verifying if the selenium checkbox is checked
    await expect(seleniumcheckbox).toBeChecked();  

    //verifying that the performance checkbox is not checked
    await expect(page.locator(".Performance")).not.toBeChecked(); 

    //Unchecking the selenium checkbox
    await seleniumcheckbox.uncheck();   

    //Verifying if the selenium checkbox is unchecked
    await expect(seleniumcheckbox).not.toBeChecked();


});