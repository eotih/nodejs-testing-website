const puppeteer = require('puppeteer');
const { listUserPassInjection, listUserPassDefault } = require('../../mocks/bruteforce.mocks');

let browser = null;
let page = null;
let loginSuccessAccount = [];

export const testLogin = async (req, res) => {
    const { website, userId, passId, buttonId } = req.body; // nhận về từ client gửi lên
    describe('Test login with listUserPassDefault', () => {
        beforeAll(async () => {
            browser = await puppeteer.launch({
                headless: true,
                slowMo: 80,
                args: ['--no-sandbox', '--disable-setuid-sandbox']
            });
            page = await browser.newPage();
            await page.goto(website);
        }); // mở trình duyệt
        afterAll(async () => {
            await browser.close();
        });
        test('Test login with listUserPassDefault', async () => { // test login
            for (let i = 0; i < listUserPassDefault.length; i++) {
                const { username, password } = listUserPass[i];
                await page.type(userId, username);
                await page.type(passId, password);
                await page.click(buttonId);
                await page.waitFor(1000);
                // if page has alert 
                const title = await page.title();
                expect(title).toBe('Login');
            }

        });

    });
    res.json({ status: 200, message: 'Test login with listUserPassDefault success', data: loginSuccessAccount });
}
