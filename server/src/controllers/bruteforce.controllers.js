const puppeteer = require('puppeteer');
const { listUserPassInjection, listUserPassDefault } = require('../mocks/bruteforce.mocks');

let browser = null;
let page = null;
let loginSuccessAccount = [];

const runScript = async (website, userId, passId, buttonId, arrayOfAccounts) => {
    browser = await puppeteer.launch({ headless: false }); // khởi tạo browser
    page = await browser.newPage(); // mở 1 trang mới
    await page.goto(website); // goto website
    try {
        for (let i = 0; i < arrayOfAccounts.length; i++) {
            const { username, password } = arrayOfAccounts[i]; // get username and password from arrayOfAccounts
            await page.type(userId, username); // type username
            await page.type(passId, password); // type password
            await page.click(`[class="${buttonId}"]`); // click login button
            await page.waitForSelector('ul li'); // wait to load <ul> <li>
            const text = await page.$eval('ul li', (el) => el.textContent); // get text of <li>
            if (!text) loginSuccessAccount.push({ username, password }); // print username and password if login success
            await page.goto(website);
        }
        await browser.close();
        return {
            message: 'Success',
            data: loginSuccessAccount.length > 0 ? loginSuccessAccount : "Pass"
        }
    } catch (error) {
        console.log('error', error);
    }
}
const testLogin = async (req, res) => {
    const { website, userId, passId, buttonId, kindOfTest } = req.body; // nhận về từ client gửi lên
    if (!website || !userId || !passId || !buttonId || !kindOfTest) {
        res.json({
            message: 'Missing params'
        });
        return;
    }
    // run website and type user/pass with userId and passId and click on buttonId
    // runScript(website, userId, passId, buttonId, listUserPassDefault);
    const data = await runScript(website, userId, passId, buttonId, kindOfTest === 1 ? listUserPassInjection : listUserPassDefault);
    res.json(data);
}


module.exports = { testLogin };