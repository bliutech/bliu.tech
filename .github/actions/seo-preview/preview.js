const puppeteer = require('puppeteer');

(async () => {

  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Set the viewport's width and height
  await page.setViewport({ width: 1366, height: 768 });

  // Open Home Page
  await page.goto('http://localhost:3000');

  try {
    // Capture screenshot and save it in the current folder:
    await page.screenshot({ path: `../../../files/preview.jpg` });

  } catch (err) {
    console.log(`Error: ${err.message}`);
  } finally {
    await browser.close();
    console.log(`Screenshot has been captured successfully`);
  }
})();

