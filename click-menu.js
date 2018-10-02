

const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({ headless: false, sloMo: 250 });
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 800 });
    await page.goto('https://www.w3schools.com/');

    //const name = await page.$eval('.w3-bar-block > a', el => el.innerText)
    //console.log(name);

    await page.click('a[title="Search W3Schools"]');

    await page.focus('#gsc-i-id1');
    await page.keyboard.type('id selector\n');

    
    //await browser.close();
})();