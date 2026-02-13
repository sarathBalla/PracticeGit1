import { test } from '@playwright/test';
import CryptoJS from 'crypto-js';
import { encryptData, decryptData } from '../../util/encrypt-decrypt-util';
import * as dotenv from 'dotenv';
import securedata from '../../testdata/securedata.json';

//# Encrypting the username and password using CryptoJS
test('Encrypt Decrypt with CryptoJS using direct functions', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();

    var usernameenc = CryptoJS.AES.encrypt('standard_user', 'secret_key').toString();
    var passwordenc = CryptoJS.AES.encrypt('secret_sauce', 'secret_key').toString();
    console.log('Encrypted Username: ' + usernameenc);
    console.log('Encrypted Password: ' + passwordenc);

    var Username = 'U2FsdGVkX1/kXD5np64OtY5+1fChjsD1WpVHgXyQsog=';
    var Password = 'U2FsdGVkX1/EOKn6VccmIRRQuhrYUQZKAIYD+/0BtmA=';
    const secret_key = process.env.SECRET_KEY ? process.env.SECRET_KEY : "";
    const username = CryptoJS.AES.decrypt(Username, secret_key).toString(CryptoJS.enc.Utf8);
    console.log('Decrypted Username: ' + username);
    const password = CryptoJS.AES.decrypt(Password, secret_key).toString(CryptoJS.enc.Utf8);
    console.log('Decrypted Password: ' + password);
});

//#encrypting the username and password using the utility functions

test('Encrypt Decrypt with CryptoJS using utility functions', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    var usernameenc = encryptData('standard_user', 'secret_key');
    var passwordenc = encryptData('secret_sauce', 'secret_key');
    console.log('Encrypted Username: ' + usernameenc);
    console.log('Encrypted Password: ' + passwordenc);

    const secret_key = process.env.SECRET_KEY ? process.env.SECRET_KEY : "";
    const username = decryptData(usernameenc, secret_key);
    console.log('Decrypted Username: ' + username);
    const password = decryptData(passwordenc, secret_key);
    console.log('Decrypted Password: ' + password);

    await page.locator('[data-test="username"]').fill(username);
    await page.locator('[data-test="password"]').fill(password);
    await page.locator('[data-test="login-button"]').click();
});


//#encrypting the username and password using the reading the encrypted data BY USING ENV

test('Encrypt Decrypt with CryptoJS using .env', async ({ page }) => {

    const decryptedUserName = decryptData(process.env.usernameenc!, process.env.SECRET_KEY!);
    const decryptedPassword = decryptData(process.env.passwordenc!, process.env.SECRET_KEY!);
    console.log('Decrypted Username from .env: ' + decryptedUserName);
    console.log('Decrypted Password from .env: ' + decryptedPassword);
    const decryotedUsername = decryptData(decryptedUserName!, process.env.SECRET_KEY!);
    const decryotedPassword = decryptData(decryptedUserName!, process.env.SECRET_KEY!);

    await page.goto('https://www.saucedemo.com/');
    await page.locator('[data-test="username"]').fill(decryotedUsername);
    await page.locator('[data-test="password"]').fill(decryotedPassword);
    await page.locator('[data-test="login-button"]').click();
});

//#encrypting the username and password using the reading the encrypted data from json file

test('Encrypt Decrypt by reading from json file', async ({ page }) => {

    const enUsername = securedata.usernameenc;
    const enPassword = securedata.passwordenc;
    console.log('Encrypted Username from json: ' + enUsername);
    console.log('Encrypted Password from json: ' + enPassword);
    const decryotedUsername1 = decryptData(enUsername!, process.env.SECRET_KEY!);
    const decryotedPassword1 = decryptData(enPassword!, process.env.SECRET_KEY!);
    await page.goto('https://www.saucedemo.com/');
    await page.locator('[data-test="username"]').fill(decryotedUsername1);
    await page.locator('[data-test="password"]').fill(decryotedPassword1);
    await page.locator('[data-test="login-button"]').click();
});