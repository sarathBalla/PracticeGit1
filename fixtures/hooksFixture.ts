import { test as baseTest, Page } from "@playwright/test"

type myhookfixtures = {

    loginlogoutfixture: any;

}

interface LoginLogoutFixtureData {
    page: Page;
}

export const test = baseTest.extend<myhookfixtures>({

    loginlogoutfixture: async ({ page }: LoginLogoutFixtureData, use: (value: undefined) => Promise<void>) => {

        const loginlogoutfixture = undefined;
        await page.goto("https://www.saucedemo.com/");
        await page.locator("input#user-name").fill("standard_user");
        await page.locator("input#password").fill("secret_sauce");
        await page.locator("input#login-button").click();

        await use(loginlogoutfixture);

        await page.getByRole("button", { name: 'Open Menu' }).click();
        await page.getByRole("link", { name: 'Logout' }).click();

    }

})

export {expect} from "@playwright/test";