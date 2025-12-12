import {test} from '@playwright/test';

test("Multiple Dropdown Handling Test",async({page})=>{

    await page.goto("https://demoqa.com/select-menu");
    // page.waitForTimeout(2000);
    // handling multiple dropdowns
    await page.locator("#cars").selectOption([{value:"volvo"},{value:"saab"}]);
});