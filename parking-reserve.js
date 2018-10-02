const puppeteer = require('puppeteer');

(async () => {

    // let username = "someemail@gmail.com";
    // let password = "somepass";

    let loginUsingGoogle = true;
    let username = "";
    let password = "";
    let googleUsername = "";
    let googlePassword = "";
    let plateNumber = "";

    const browser = await puppeteer.launch({ headless: false, sloMo: 250 });
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 800 });
    await page.goto('https://cpa.permit.calgaryparking.com/login');

    //click the Welcome button
    await page.waitForSelector('a.btn-primary')
    await page.click('a.btn-primary');

    if (loginUsingGoogle) {
        const navigationPromise = page.waitForNavigation()
        await page.waitForSelector('#google-login')
        await page.click('#google-login');

        await navigationPromise;
        await page.waitForSelector('input[type="email"]');
        await page.type('input[type="email"]', googleUsername);
        await page.click('#identifierNext');

        await page.waitForSelector('input[type="password"]', {visible: true});
        await page.type('input[type="password"]', googlePassword);

        await page.waitForSelector('#passwordNext', {visible: true});
        await page.click('#passwordNext');

        await navigationPromise;

        

    }
    else {
        //login using the username and password
        await page.waitForSelector('#login')
        await page.type('#login', username);
        await page.type('#password', password);
        await page.click('#login-submit');
    }

//click the first address
    await page.waitForSelector('#addressList > li > a.clickable');
    await page.click('#addressList > li > a.clickable');

    //enter the plate number and start the session
    await page.waitForSelector('#plateEntry');
    await page.type('#plateEntry', plateNumber);
    await page.click('#start');

    //await browser.close();
})();