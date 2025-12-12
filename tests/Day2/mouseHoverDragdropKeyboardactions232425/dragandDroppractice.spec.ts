import { expect, test } from "@playwright/test"

// Approch-1 Manual Way
test("Practice Drag and Drop Manual Method", async ({ page }) => {

    await page.setDefaultTimeout(30000);
    await page.goto("https://demoqa.com/droppable");
    await page.getByText('Drag me', { exact: true }).hover();
    await page.mouse.down();
    await page.getByRole('tabpanel', { name: 'Simple' }).locator('#droppable').hover();
    await page.mouse.up();
    await expect(page.getByRole('tabpanel', { name: 'Simple' }).locator('#droppable')).toHaveText("Dropped!");
});


// Approch-2 DragTo Method
test("Practice Drag and Drop dragTo Method", async ({ page }) => {

    await page.setDefaultTimeout(30000);
    await page.goto("https://demoqa.com/droppable");
    await page.getByText('Drag me', { exact: true }).dragTo(
        page.getByRole('tabpanel', { name: 'Simple' }).locator('#droppable'));

    await expect(page.getByRole('tabpanel', { name: 'Simple' }).locator('#droppable')).toHaveText("Dropped!");
});

// Approch-2 DragTo Method with coordinates
test("Practice Drag and Drop dragTo Method with Coordinates", async ({ page }) => {

    await page.setDefaultTimeout(30000);
    await page.goto("https://demoqa.com/droppable");
    await page.getByText('Drag me', { exact: true }).dragTo(
        page.getByRole('tabpanel', { name: 'Simple' }).locator('#droppable'),
        {
            sourcePosition: {
                x: 0, y: 0
            },
            targetPosition: {
                x: 70.9, y: 70.9
            }
        }
    )
    await expect(page.getByRole('tabpanel', { name: 'Simple' }).locator('#droppable')).toHaveText("Dropped!");
});