import { Locator, Page } from "@playwright/test";
export class CartPage {
    readonly page: Page;
    readonly backPackItemLink: Locator;
    
    constructor(page: Page) {
        this.page = page;
        this.backPackItemLink = page.getByRole("link", { name: "Sauce Labs Backpack" });
    }

}