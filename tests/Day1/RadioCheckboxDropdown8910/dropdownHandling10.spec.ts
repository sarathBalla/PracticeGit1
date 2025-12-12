import {test} from '@playwright/test';

test('Checkbox Handling Test',async({page})=>{

    await page.goto("https://artoftesting.com/samplesiteforselenium");
    // handling dropdown by using label, value and index

    // Selecting option by label
    await page.locator("#testingDropdown").selectOption({label:"Automation Testing"});
    
    // Selecting option by index
    await page.locator("#testingDropdown").selectOption({index:2});
     
    // Selecting option by value
    await page.locator("#testingDropdown").selectOption({value:"Manual"});
 
});