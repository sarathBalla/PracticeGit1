import { test, expect } from "@playwright/test"
import data from "../../../testdata/testdata1.json"
import logindata from "../../../testdata/logindata.json"


test.beforeEach(async ({ page }) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    // await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
    // await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
    // await page.getByRole('button', { name: 'Login' }).click();
    // await page.waitForURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");
    // await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();

});

test("Cerify timesheet card navigation on Dashboard", async ({ page,context }) => {
    // Here we can exclude the already saved Auth Way ##### 2 cookies will clear and this test will exclude
    //await context.clearCookies();
    await expect(page.getByText("Quick Launch")).toContainText("Quick Launch");
    await expect(page.getByRole("button", { name: "Timesheets" })).toBeVisible();
    await page.getByRole("link", { name: "Time" }).click();
    await expect(page.getByLabel("Topbar Menu").getByRole("list")).toContainText("Timesheets");

});

data.forEach((specdata)=>{
    test("Add candidate for Recruitment" + specdata.Firstname, async ({ page }) => {
    await page.getByRole("link", { name: "Recruitment" }).click();
    await page.getByRole("button", { name: " Add" }).click();
    await page.getByRole("textbox", { name: "First Name" }).fill(specdata.Firstname);
    await page.getByRole("textbox", { name: "Middle Name" }).fill(specdata.middlename);
    await page.getByRole("textbox", { name: "Last Name" }).fill(specdata.lastname);
    await page.getByRole("textbox", { name: "Type here" }).first().fill(specdata.email);
    await page.getByRole("button", { name: "Save" }).click();
    await page.waitForURL("https://opensource-demo.orangehrmlive.com/web/index.php/recruitment/addCandidate");
   // await expect(page.getByText("Application Stage", { exact: true })).toBeVisible();
});
});

// Using for loop to execute multiple Data set to extracting data to here
// for(const specdata of data){
// test(`Add candidate for Recruitment ${specdata.Firstname}`, async ({ page }) => {
//     await page.getByRole("link", { name: "Recruitment" }).click();
//     await page.getByRole("button", { name: " Add" }).click();
//     await page.getByRole("textbox", { name: "First Name" }).fill(specdata.Firstname);
//     await page.getByRole("textbox", { name: "Middle Name" }).fill(specdata.middlename);
//     await page.getByRole("textbox", { name: "Last Name" }).fill(specdata.lastname);
//     await page.getByRole("textbox", { name: "Type here" }).first().fill(specdata.email);
//     await page.getByRole("button", { name: "Save" }).click();
//     await page.waitForURL("https://opensource-demo.orangehrmlive.com/web/index.php/recruitment/addCandidate");
//    // await expect(page.getByText("Application Stage", { exact: true })).toBeVisible();

// });
// };