const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  await page.setViewport({width: 1280, height: 800});
  await page.goto('https://github.com');
  await page.screenshot({path: 'example.png'});

  await browser.close();
})();