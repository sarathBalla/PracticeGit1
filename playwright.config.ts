import { defineConfig, devices } from '@playwright/test';
//import { json } from 'stream/consumers';
import dotenv from "dotenv";
import path from 'path';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// Hard coding of Env 
// dotenv.config(
//   { 
//     path: `./env-files/.env.uat`

//   });

//setuping varaible and giving on command
dotenv.config({
path:process.env.TEST_ENV?`./env-files/.env.${process.env.TEST_ENV}`:`./env-files/.env.dev`

// Setting the path for .env file in testdata folder using for Encrypt Decryption test

// dotenv.config({
//   path: path.resolve('testdata/.env')
});
 
/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  // Based on Tags we want to execute specific Test we need to using grep
  //grep:/UI/,

  // Based on Tag we want to skip the specific Tests
  grepInvert:/Smoke/,
 // globalSetup:'./global-setup.ts',
  testDir:'./tests',
  //testDir:'./tests/Day4',
  //'./tests','./src',
  /*// Run tests in files in parallel */
  fullyParallel: false,
  /* Fail the build on CI if you ac\cidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 2,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  //reporter: [['html', { open: 'always' },]],
  // List Report
  //reporter:'list',
    // Line Report
  // reporter:'line',
  // Dot Report
  // reporter:'dot',
  // Bob Report
  // reporter:'blob',
  // JSON Report
  // reporter:[["json",{json:"report.json"}]],
   // JUnit Report
  // reporter:[["junit",{json:"reportjunit.xml"}]],
  //GitHub Reports
  //reporter:process.env.CI?'github':'dot',
  // multiple reports at a Time
  //reporter:[["dot"],["list"],["html",{open:"always"}]],
  // Allure Report
  reporter: [ ['line'],
  [
    'allure-playwright',
    {
      resultsDir: 'GoogleAllureReports',
    },
  ],
],

  timeout: 10 * 1000,  // changed from 30 to 70 seconds
  // expect:{
  //   timeout: 5000, // changed from 4000 to 5000 milliseconds for all assertions
  // },
  use: {
    headless: true,
    /* Base URL to use in actions like `await page.goto('')`. */
    // baseURL: 'http://localhost:3000',
    screenshot: 'on',
    video: 'retain-on-failure',
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on',
    //storageState:"./playwright/.auth/auth.json"
  }, 

  /* Configure projects for major browsers */
  projects: [

    {
      name:"setup",
      testMatch:/.*\.setup\.ts/,
      //testMatch:"global.setup.ts"
    },
    {
      name: 'chromium',
      //dependencies:["setup"],
      use: { ...devices['Desktop Chrome'], channel: 'chrome', headless: false},
       // storageState:"./playwright/.auth/auth.json" },
      testMatch: ['**/*.spec.ts'],
    },

    // {    
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },


    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
