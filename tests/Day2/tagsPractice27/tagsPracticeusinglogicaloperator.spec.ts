import { test } from "@playwright/test"

test.describe("Describe Block1",{tag:"@sanity"}, async () => {

    test("Practice Test1 @UI @Smoke", async () => {

        console.log("Practice Test1");
    });
    test("Practice Test2 @API", async () => {

        console.log("Practice Test2");
    }); 

    test("Practice Test3 @UI", async () => {

        console.log("Practice Test3");
    });

});

test("Practice Test4",{tag:"@UI"}, async () => {

    console.log("Practice Test4");
});
test("Practice Test5",{tag:["@UI","@Smoke"]},async () => {

    console.log("Practice Test5");
});
test("Practice Test6", async () => {

    console.log("Practice Test6");
});