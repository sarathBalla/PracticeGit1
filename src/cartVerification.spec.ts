import {expect, test} from '@playwright/test';
import { LoginPage } from '../Pages/loginPage';
import { HomePage } from '../Pages/homePage';
import { CartPage } from '../Pages/cartPage';

test("Verification of Cart Items Test",async({page})=>{

    const loginobj = new LoginPage(page);
    await loginobj.navigateToLoginPage();
    await loginobj.loginintoApplication("standard_user","secret_sauce");
    const HomePageobj = new HomePage(page);
    await expect(HomePageobj.homePageTitle).toHaveText("Swag Labs");
    await HomePageobj.backPackItemAddToCart();
    await expect(HomePageobj.shoppingCartBadge).toHaveText("1");
    await expect(HomePageobj.backOackRemoveButton).toBeVisible();
    await HomePageobj.clickOnShoppingCartBadge();
    const cartPageobj = new CartPage(page);

    
    await expect(cartPageobj.backPackItemLink).toHaveText("Sauce Labs Backpack");

});