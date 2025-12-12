import { test as baseTest } from '@playwright/test'
import { LoginPage } from '../Pages/loginPage'
import { HomePage } from '../Pages/homePage';
import { CartPage } from '../Pages/cartPage';

type pomFixtures = {
    loginPage: LoginPage;
    homePage: HomePage;
    cartPage: CartPage;

}

export const test = baseTest.extend<pomFixtures>({
    loginPage: async ({ page }, use) => {

        const loginPage = new LoginPage(page);
        await use(loginPage);

    },
    homePage: async ({ page }, use) => {

        const homePage = new HomePage(page);
        await use(homePage);
    },
    cartPage: async ({ page }, use) => {
        const cartPage = new CartPage(page);
        await use(cartPage);
    }

})