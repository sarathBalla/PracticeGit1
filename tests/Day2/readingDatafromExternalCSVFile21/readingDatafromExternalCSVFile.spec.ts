import { test } from "@playwright/test"
import fs from "fs"
import { parse } from "csv-parse/sync"


interface CsvRecord {
    Idnumber: string;
    FirstName: string;
    LastName: string;
}
// Getting Data from the CSV File
const records: CsvRecord[] = parse(fs.readFileSync("testdata/testdata.csv"),
    {
        columns: true,
        skip_empty_lines: true,
        //delimiter:","
    });



for (const record of records) {
    test(`Get Data from CSV ${record.Idnumber}`, async ({ page }) => {
        console.log('Running test for record id:', record.Idnumber);
        await page.goto('https://demoqa.com/automation-practice-form');
        await page.getByRole('textbox', { name: 'First Name' }).fill(record.FirstName);
        await page.getByRole('textbox', { name: 'Last Name' }).fill(record.LastName);
    });
}
