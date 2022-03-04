const puppeteer = require('puppeteer');
const { listUserPassInjection, listUserPassDefault } = require('../mocks/bruteforce.mocks');

let browser = null;
let page = null;
const WEBSITE_URL = 'https://maiamtruyentin.com/he-thong/dang-nhap';

describe('Test login with listUserPassDefault', () => {
    beforeAll(async () => {
        browser = await puppeteer.launch({ headless: false }); // khởi tạo browser
        page = await browser.newPage(); // mở 1 trang mới
        await page.setViewport({
            width: 1280,
            height: 1024
        }); // set size màn hình
        jest.setTimeout(200000); // 20s timeout
    });

    // when test all for in listUserPassDefault then close browser
    afterAll(async () => {
        await browser.close();
    });

    beforeEach(async () => {
        await page.goto(WEBSITE_URL); // goto website
    })
    test('Test default user/pass', async () => {
        try {
            for (let i = 0; i < listUserPassDefault.length; i++) {
                const { username, password } = listUserPassDefault[i]; // get username and password from listUserPassInjection
                await page.type('#UserName', username); // type username
                await page.type('#Password', password); // type password
                await page.click('[class="btn btn-primary"]'); // click login button
                await page.waitForSelector('ul li'); // wait to load <ul> <li>
                const text = await page.$eval('ul li', (el) => el.textContent); // get text of <li>
                if (!text) console.log({ username, password }); // print username and password if login success
                await page.goto(WEBSITE_URL);
            }
        } catch (error) {
            console.log('error', error);
        }

    });
    test('Test SQL Injection', async () => {
        try {
            for (let i = 0; i < listUserPassInjection.length; i++) {
                const { username, password } = listUserPassInjection[i]; // get username and password from listUserPassInjection
                await page.type('#UserName', username); // type username
                await page.type('#Password', password); // type password
                await page.click('[class="btn btn-primary"]'); // click login button
                await page.waitForSelector('ul li'); // wait to load <ul> <li>
                const text = await page.$eval('ul li', (el) => el.textContent); // get text of <li>
                if (!text) console.log({ username, password }); // print username and password if login success
                await page.goto(WEBSITE_URL);
            }
        } catch (error) {
            console.log('error', error);
        }

    });

});

