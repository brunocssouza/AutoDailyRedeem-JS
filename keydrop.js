// puppeteer-extra is a drop-in replacement for puppeteer,
// it augments the installed puppeteer with plugin functionality
const puppeteer = require('puppeteer-extra')

// add stealth plugin and use defaults (all evasion techniques)
const StealthPlugin = require('puppeteer-extra-plugin-stealth')
puppeteer.use(StealthPlugin())

function delay(time) {
    return new Promise(function(resolve) { 
        setTimeout(resolve, time)
    });
}

// puppeteer usage as normal
puppeteer.launch({ headless: true, userDataDir: "./data"}).then(async browser => {
    // Booting up
    const page = await browser.newPage();

    // 2. Daily Free
    await page.goto("https://key-drop.com/en/daily-case");
    console.log('Keydrop website accessed.')
    await page.waitForSelector('#dailyCase-root > div.container.hide-scrollbar.snap-x.snap-mandatory.overflow-x-auto > ul > li:nth-child(1) > button');
    const [dailyFree] = await page.$x('//*[@id="dailyCase-root"]/div[1]/ul/li[1]/button')
    await delay(4000);
    console.log('Daily Free obtained.')
    await dailyFree.click();
    console.log('Closing browser...');
    await delay(4000);
    await browser.close()
})