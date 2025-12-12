import{test} from"@playwright/test";

test("Handling new Pae",async({context})=>{

   const page =  await context.newPage();
   await page.goto("https://testpages.eviltester.com/pages/navigation/windows-names/");
    // Handling new tab or window

    // waiting for the new page to open
    const pagepromise = context.waitForEvent('page');
    // Clicking on the new tab button and Event will be fired
    await page.locator("#gobasicajax").click();
    // Storing the new page into a variable
    const newpage = await pagepromise;
    // Doing actions on the new page
    await newpage.getByRole("button",{name:"Click to reveal current window name"}).click();

})