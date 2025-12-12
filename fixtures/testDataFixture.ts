import { test as baseTest } from "@playwright/test"

type MyFixture = {
    logindata: any;
    testdata: any;

}
export const test = baseTest.extend<MyFixture>({

    logindata: {

        url: "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
        username: "Admin",
        password: "admin123"
    },
    testdata: {

        Firstname: "Test",
        middlename: "Automate",
        lastname: "Code",
        email: "testautomate@gmail.com"


    }

})