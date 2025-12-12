import { test } from '@playwright/test';

test.beforeEach("Practice of beforeEach hook", async () => {

    console.log("Executing before each hook - Navigating to the application URL");

});

test.beforeAll("Practice of beforeAll hook", async () => {

    console.log("Executing before all hook - Setup before all tests");  
});

test.afterAll("Practice of afterAll hook", async () => {

    console.log("Executing after all hook - Cleanup after all tests");  
});
test('Test Practice1', async ({ page }) => {
    console.log('Starting Test Practice1');
    await page.goto('https://www.saucedemo.com/');
    console.log('Page title:', await page.title());
    console.log('Ending Test Practice1');
});

test('Test Practice2', async ({ page }) => {

    console.log('Starting Test Practice2');
    await page.goto('https://www.saucedemo.com/');
    console.log('Page title:', await page.title());
    console.log('Ending Test Practice2');
});

test('Test Practice3', async ({ page }) => {
    console.log('Starting Test Practice3');
    await page.goto('https://www.saucedemo.com/');
    console.log('Page title:', await page.title());
    console.log('Ending Test Practice3');
});

test.afterEach("Practice of afterEach hook", async () => {
    console.log("Executing after each hook - Test execution completed");

});
test.describe('Grouped Tests', () => {
    test('Test Practice4', async ({ page }) => {
        console.log('Starting Test Practice4');
        await page.goto('https://www.saucedemo.com/');
        console.log('Page title:', await page.title());
        console.log('Ending Test Practice4');
    });
    test('Test Practice5', async ({ page }) => {
        console.log('Starting Test Practice5');
        await page.goto('https://www.saucedemo.com/');
        console.log('Page title:', await page.title());
        console.log('Ending Test Practice5');
    });
    test('Test Practice6', async ({ page }) => {
        console.log('Starting Test Practice6');
        await page.goto('https://www.saucedemo.com/');
        console.log('Page title:', await page.title());
        console.log('Ending Test Practice6');
    });
});

test('Test Practice7', async ({ page }) => {
    console.log('Starting Test Practice7');
    await page.goto('https://www.saucedemo.com/');
    console.log('Page title:', await page.title());
    console.log('Ending Test Practice7');
});

test('Test Practice8', async ({ page }) => {
    console.log('Starting Test Practice8');
    await page.goto('https://www.saucedemo.com/');
    console.log('Page title:', await page.title());
    console.log('Ending Test Practice8');
});