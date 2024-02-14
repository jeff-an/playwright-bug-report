const { chromium } = require('playwright');

async function main() {
  const browser = await chromium.launch({
    headless: false
  });

  const context = await browser.newContext({deviceScaleFactor: 2});
  const page = await context.newPage();

  const path = require('path');
  const filePath = path.join(__dirname, 'index.html');
  const fileUrl = `file://${filePath}`;

  await page.goto(fileUrl);

  await page.locator('#main-frame').screenshot()
}

main()
