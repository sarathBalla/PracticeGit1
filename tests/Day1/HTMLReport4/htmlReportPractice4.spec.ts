import{test,expect}from'@playwright/test';

test('Title Verification Practice',async({page})=>{
    await page.goto('https://www.saucedemo.com/');
    // Verifying the title of the page
    await expect(page).toHaveTitle("Swag Labs");
});

test('Login Verification Practice',async({page})=>{
    await page.goto('https://www.saucedemo.com/');
    // Performing login operationa
    await page.locator('input#user-name').fill('standard_user');
    await page.locator('input#password').fill('secret_sauce');
    await page.locator('input#login-button').click();
    // Verifying the Cart after login to check successful login
    await expect(page.locator('div#shopping_cart_container')).toBeVisible();
});

test('Negative Login Verification Practice',async({page})=>{
    await page.goto('https://www.saucedemo.com/');      
    // Performing login operation with invalid credentials
    await page.locator('input#user-name').fill('standard_user1');
    await page.locator('input#password').fill('secret_sauce1');
    await page.locator('input#login-button').click();   
    // Verifying the cart after invalid login
    await expect(page.locator('div#shopping_cart_container')).toBeVisible();
});