import { test } from '@playwright/test';

// test describe block to group tests
test.describe('Annotation Practice Tests', () => {
    //test.skip(({ browserName }) => browserName === 'chromium') // its only on describe block
    //test.slow(({ browserName }) => browserName === 'chromium')
   test.fail(({browserName})=> browserName==='chromium'); // only for chromium
    test('Test Practice1', async ({ page }) => {
        console.log('Starting Test Practice1');
        console.log('Ending Test Practice1');
    });

    test('Test Practice2', async ({ page }) => {
        test.setTimeout(30000); // set timeout for this test only
        console.log('Starting Test Practice2');
        console.log('Ending Test Practice2');
    });
    test('Test Practice3', async ({ page }) => {
        console.log('Starting Test Practice3');
        console.log('Ending Test Practice3');
    });

});

// test only to run a specific test
// test.only('Test Practice4', async ({ page }) => {
//     console.log('Starting Test Practice4');
//     console.log('Ending Test Practice4');
// });


// test skip and fixme to skip a specific test
test.fixme('Test Practice5', async ({ page }) => {
    console.log('Starting Test Practice5');
    console.log('Ending Test Practice5');
});

// test slow to mark a test as slow
test('Test Practice6', async ({ page,browserName}) => {
    //test.slow();
    test.slow(browserName === 'chromium'); // only for chromium
    console.log('Starting Test Practice6');
    console.log('Ending Test Practice6');
});
test('Test Practice7', async ({ page }) => {
    console.log('Starting Test Practice7');
    console.log('Ending Test Practice7');
});
test('Test Practice8', async ({ page }) => {
    //test.fail(); // mark this test as expected to fail
    console.log('Starting Test Practice8');
    console.log('Ending Test Practice8');
});