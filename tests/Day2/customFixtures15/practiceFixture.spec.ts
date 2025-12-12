//import {test}  from'@playwright/test';
import { test } from '../../../fixtures/myCustomFixtures';

// Practicing custom fixtures

test("Practice Test1", async ({ fixture1, fixture2,workerFixture1 }) => {
	console.log('Test1:', fixture1); // Should log "I am Fixture1"
	console.log('Test1:', fixture2); // Should log "I am Fixture2"
    console.log("WorkerTest1",workerFixture1);

});

test("Practice Test2", async ({ fixture1, fixture2,workerFixture2 }) => {
	console.log('Test2:', fixture1);
	console.log('Test2:', fixture2);
    console.log("workerFixture2",workerFixture2)
});