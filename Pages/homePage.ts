import { Locator, Page } from "@playwright/test";

export class HomePage {

    readonly page: Page;
    readonly homePageTitle:Locator;
    readonly backPackItemAddtoCartButton:Locator;
    readonly backOackRemoveButton:Locator;
    readonly shoppingCartBadge:Locator;

    constructor(page: Page) {
        this.page = page;
        this.backPackItemAddtoCartButton=page.locator("#add-to-cart-sauce-labs-backpack");
        this.backOackRemoveButton=page.locator("#remove-sauce-labs-backpack");
        this.shoppingCartBadge=page.locator(".shopping_cart_link");
        this.homePageTitle=page.getByText("Swag Labs");
    }

    async backPackItemAddToCart(){
        await this.backPackItemAddtoCartButton.click(); 

    }
    async backPackItemRemoveFromCart(){
        await this.backOackRemoveButton.click();
    }

    async clickOnShoppingCartBadge(){
        await this.shoppingCartBadge.click();
    }
}
