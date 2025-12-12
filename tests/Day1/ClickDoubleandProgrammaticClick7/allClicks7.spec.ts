import { test } from '@playwright/test';
// click method practice
test('Click, Double Click Practice', async ({ page }) => {
    await page.goto('https://demoqa.com/buttons');
    // Performing Click operation
    test.setTimeout(60000);
    await page.getByRole('button', { name: 'Click Me', exact: true }).click();

});

// Double Click method practice
test('Double Click Practice', async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/add_remove_elements/");
    // Performing Double Click operation
    await page.getByRole('button', { name: 'Add Element' }).dblclick();
});

//Right click/Context Click method practice
test('Right Click Practice', async ({ page }) => {
    await page.goto("https://swisnl.github.io/jQuery-contextMenu/demo.html");
    // Performing Right Click operation
    //await page.getByText('right click me', { exact: true }).click({ button: 'right' });
    await page.getByRole('heading', { name: 'Example code: Simple Context' }).click({ button: 'right' });
    // force clicking on the hidden element
    await page.getByRole('menuitem', { name: 'Edit' }).click({ force: true });
    // Programmatic Click(dispatchEvent) method practice if any element is not clickable using click() method
    await page.getByRole('heading', { name: 'Example code: Simple Context' }).dispatchEvent('click');
});

// Programmatic Click(dispatchEvent) method practice
