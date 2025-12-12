 import {  expect } from "@playwright/test"
 import {test} from "../../../fixtures/testDataFixture"

 test.beforeEach(async ({ page,logindata }) => {

    await page.goto(logindata.url);
    await page.getByRole('textbox', { name: 'Username' }).fill(logindata.username);
    await page.getByRole('textbox', { name: 'Password' }).fill(logindata.password);
    await page.getByRole('button', { name: 'Login' }).click();
    await page.waitForURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");
    await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();

});
 
 test("Add candidate for Recruitment", async ({ page,testdata }) => {
    await page.getByRole("link", { name: "Recruitment" }).click();
    await page.getByRole("button", { name: "Add" }).click();
    await page.getByRole('textbox', { name: 'First Name' }).fill(testdata.Firstname,{timeout:200000});
    await page.getByRole('textbox', { name: 'Middle Name' }).fill(testdata.middlename);
    await page.getByRole('textbox', { name: 'Last Name' }).fill(testdata.lastname);
    await page.getByRole('textbox', { name: 'Type here' }).first().fill(testdata.email);
    await page.getByRole("button", { name: "Save" }).click();
    await page.waitForURL("https://opensource-demo.orangehrmlive.com/web/index.php/recruitment/addCandidate");
    await expect(page.getByText("Application Stage")).toBeVisible();
});