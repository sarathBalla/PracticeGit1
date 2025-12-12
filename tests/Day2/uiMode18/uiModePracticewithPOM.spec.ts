import {expect} from '@playwright/test';
import { test } from '../../../fixtures/pomFixtures';


test("Verification of Cart Items Test",async({loginPage,homePage,cartPage})=>{
 
    await loginPage.navigateToLoginPage();
    await loginPage.loginintoApplication("standard_user","secret_sauce");
    await expect(homePage.homePageTitle).toHaveText("Swag Labs");
    await homePage.backPackItemAddToCart();
    await expect(homePage.shoppingCartBadge).toHaveText("1");
    await expect(homePage.backOackRemoveButton).toBeVisible();
    await homePage.clickOnShoppingCartBadge();
    await expect(cartPage.backPackItemLink).toHaveText("Sauce Labs Backpack");

});