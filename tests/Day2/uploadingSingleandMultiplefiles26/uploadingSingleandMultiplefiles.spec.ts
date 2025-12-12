import { test } from "@playwright/test"

test("file Upload single file", async ({ page }) => {

    page.goto("https://davidwalsh.name/demo/multiple-file-upload.php");
    //await page.locator("#filesToUpload").setInputFiles("uploadFiles/Testing1.txt");
    // inserting to multiple files
    await page.locator("#filesToUpload").setInputFiles(["uploadFiles/Testing1.txt", "uploadFiles/Testing2.txt", "uploadFiles/Testing3.txt"]);
    // clearing all the Files
    await page.locator("#filesToUpload").setInputFiles([]);

});

test("file Upload multiple file", async ({ page }) => {

    page.goto("https://the-internet.herokuapp.com/upload");

    // Here we will use the Even for Filechooser window and it will wait for the Event to be start
    const fileChooserPromise = page.waitForEvent("filechooser");
    // Once it is clicked to the locator we will get the File uploader window
    await page.locator("#drag-drop-upload").click();
    // Here we will resolve the Promise
    const fileChooser = await fileChooserPromise;
    
    await fileChooser.setFiles("uploadFiles/Testing3.txt");
});