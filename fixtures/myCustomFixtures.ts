import { test as baseTest } from '@playwright/test';

// Defining type for custom fixtures
type MyFixtures = {
    fixture1: any;
    fixture2: any;

};

type MyworkerFixture = {
    workerFixture1: any;
    workerFixture2: any;
}
// we can difine the custom fixtures here
// baseTest.extend<{ fixture1: any }>({
// });

// Test customFixtures
export const test = baseTest.extend<MyFixtures, MyworkerFixture>({

    fixture1: async ({ }, use: any) => {
        const fixture1 = "I am Fixture1";
        console.log("Before Part of fixture1");
        await use(fixture1)
        console.log("After Part of fixture1");
    },
    fixture2: async ({ }: any, use: (arg0: string) => any) => {
        const fixture2 = "I am Fixture2";
        console.log("Before Part of fixture2");
        await use(fixture2)
        console.log("After Part of fixture2");
    },
    // Intializing worker fixture
    workerFixture1: [async ({ }, use: any) => {
        const fixture1 = "I am workerFixture1";
        console.log("Before Part of workerfixture1");
        await use(fixture1)
        console.log("After Part of workerfixture1");
    }, { scope: "worker" }],

    workerFixture2: [async ({ }, use: any)=>{
        const fixture2 = "I am workerFixture2";
        console.log("Before Part of workerfixture1");
        await use(fixture2)
        console.log("After Part of workerfixture1");
    }, { scope: "worker" }]
});
