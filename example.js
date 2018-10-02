const puppeteer = require('puppeteer');

var myArgs = process.argv.slice(2);

console.log(myArgs[0], "fdsafsadf", myArgs[1]);

(async () => {
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  await page.setViewport({width: 1280, height: 800});
  await page.goto('https://github.com');
  await page.screenshot({path: 'example.png'});

  await browser.close();
})();