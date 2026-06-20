const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  // Wait for server to be ready
  let ready = false;
  for (let i = 0; i < 10; i++) {
    try {
      await page.goto('http://localhost:3000');
      ready = true;
      break;
    } catch (e) {
      await new Promise(resolve => setTimeout(resolve, 2000));
    }
  }

  if (!ready) {
    console.error('Server not ready');
    process.exit(1);
  }

  await page.setViewportSize({ width: 1280, height: 800 });
  await page.screenshot({ path: 'home_final.png', fullPage: true });
  console.log('Home screenshot taken');

  await page.goto('http://localhost:3000/about');
  await page.screenshot({ path: 'about_final.png', fullPage: true });
  console.log('About screenshot taken');

  await page.goto('http://localhost:3000/get-involved');
  await page.screenshot({ path: 'support_final.png', fullPage: true });
  console.log('Support screenshot taken');

  await browser.close();
})();
