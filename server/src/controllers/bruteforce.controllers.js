const puppeteer = require('puppeteer');
const { listUserPassInjection, listUserPassDefault } = require('../mocks/bruteforce.mocks');

class LoginController {
    async testLogin(req, res) {
        let browser = null;
        let page = null;
        let loginSuccessAccount = [];
        const { website, userId, passId, buttonId } = req.body; // nhận về từ client gửi lên
        if (!website || !userId || !passId || !buttonId) {
            res.json({
                message: 'Missing params'
            });
            return;
        }
        // run website and type user/pass with userId and passId and click on buttonId
        browser = await puppeteer.launch({ headless: false }); // khởi tạo browser
        page = await browser.newPage(); // mở 1 trang mới
        await page.goto(website); // goto website
        for (let i = 0; i < listUserPassInjection.length; i++) {
            const { username, password } = listUserPassInjection[i]; // get username and password from listUserPassInjection
            await page.type(userId, username); // type username
            await page.type(passId, password); // type password
            await page.click(buttonId); // click login button
            await page.waitForNavigation(); // wait for navigation
            const title = await page.title(); // get title
            // const errorMessage = await page.$('#lbErrorMsg'); // get error message
            if (title !== 'Login Page') {
                loginSuccessAccount.push({ username, password }); // print username and password if login success
            } else {
                await page.goto(website); // if fail, go to login page again
            }
        }
        res.json({
            message: 'Success',
            data: loginSuccessAccount
        });
        await browser.close(); // close page
    }
}

module.exports = new LoginController();