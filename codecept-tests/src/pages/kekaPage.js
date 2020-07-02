const I = actor();
var i;
var j;

module.exports = {

    fields: {


        kekaLogin: "//button[@value='Keka']",
        email: "//input[@id='email']",
        pwd: "//input[@id='password']",
        login: "//button[@type='submit']",
        meTab: "//span[text()='Me']",
        attendanceTab: "//span[text()='Attendance']",
        droparrow: "//span[@class='ic-move-down icon']",
        lgbtn: "//a[text()=' Logout']",
        profile_name: "//span[@class='profile-name']",


    },


    navigatetourl() {
        I.amOnPage("");
    },

    loginWithkekapwd() {
        I.waitForElement(this.fields.kekaLogin);
        I.click(this.fields.kekaLogin);
    },
    email(str) {
        I.waitForElement(this.fields.email);
        I.fillField(this.fields.email, str);


    },
    pwd(str) {
        I.waitForElement(this.fields.pwd);
        I.fillField(this.fields.pwd, str);

    },

    login() {
        I.waitForElement(this.fields.login);
        I.click(this.fields.login);


    },
    attendance() {
        I.waitForElement(this.fields.meTab);
        I.moveCursorTo(this.fields.meTab);
        I.click(this.fields.attendanceTab);


    },
    monthWise() {
        for (i = 1; i <= 7; i++) {
            I.waitForElement("(//div[@role= 'group']/button)[" + i + "]");
            I.click("(//div[@role= 'group']/button)[" + i + "]");
            I.wait(2);
        }
    },
    dropdown() {
        I.waitForElement(this.fields.droparrow);
        I.click(this.fields.droparrow)
        I.wait(2);
    },

    logout() {
        I.waitForElement(this.fields.lgbtn);
        I.click(this.fields.lgbtn);
        I.wait(10);
    },
    Alllefttabs() {
        for (j = 1; j <= 5; j++)
        {
            I.waitForElement("(//a[@class='nav-link'])[" + j + "]");
            I.wait(3)
            I.click("(//a[@class='nav-link'])[" + j + "]");
            I.wait(3);
            if (i == 1)
            {
                I.see("Shiwani Sharma");
            }
            if(i==2)
            {
                I.see("Nothing here.");
            }
            if(i==3)
            {
                
            }
        }
    }
};
