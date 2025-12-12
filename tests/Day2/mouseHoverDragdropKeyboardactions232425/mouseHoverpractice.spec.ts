import {test} from "@playwright/test"

test("Practice Mouse hover action",async({page})=>{

    await page.goto("https://demo.opencart.com/")
    await page.getByRole('link',{name:"Components"}).hover();
    // if we dont want to verify few prerequisites we need to use force
     await page.getByRole('link',{name:"Components"}).hover({force:true});

});
