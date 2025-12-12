import { Locator, Page } from "@playwright/test";

export class LoginPage {
    // intialize variables
    readonly page: Page;
    readonly usernameTextbox: Locator;
    readonly passwordTextbox: Locator;
    readonly loginButton: Locator;

    constructor(page: Page) {
        // assign variables with values
        this.page = page;
        this.usernameTextbox = page.locator("#user-name");
        this.passwordTextbox = page.locator("#password");
        this.loginButton = page.getByRole("button",{name:"Login"});

    }

    async navigateToLoginPage() {

        await this.page.goto("https://www.saucedemo.com/");
    }
    async loginintoApplication(username: string, password: string) {
        await this.usernameTextbox.fill(username);
        await this.passwordTextbox.fill(password);
        await this.loginButton.click();
    }

}