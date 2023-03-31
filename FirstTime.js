// puppeteer-extra is a drop-in replacement for puppeteer,
// it augments the installed puppeteer with plugin functionality
const puppeteer = require('puppeteer-extra')

// add stealth plugin and use defaults (all evasion techniques)
const StealthPlugin = require('puppeteer-extra-plugin-stealth')
puppeteer.use(StealthPlugin())

// puppeteer usage as normal
puppeteer.launch({ headless: false, userDataDir: "./data"}).then(async browser => {
  // Booting up
  const page = await browser.newPage();
  page.setDefaultTimeout(60000)

  // Steam and Hellcase login
  await page.goto("https://store.steampowered.com/login/");
  const finalRequest = await page.waitForRequest(
    request => request.url() === 'https://store.steampowered.com/'
  );
  return finalRequest.response(await page.goto("https://key-drop.com/en/daily-case"))?.ok();
})