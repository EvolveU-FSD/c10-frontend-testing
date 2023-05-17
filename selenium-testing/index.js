import selenium from "selenium-webdriver";
import chrome from "selenium-webdriver/chrome.js";
// Create a new instance of the chrome driver with hidden window

const driver = new selenium.Builder()
  .forBrowser("chrome")
  // .setChromeOptions(new chrome.Options().headless())
  .build();

await driver.get("https://google.com");

const searchInput = await driver.findElement(selenium.By.name("q"));
await searchInput.sendKeys("inceptionu\n");
const firstResult = await driver.findElement(selenium.By.css("h3"));
await firstResult.click();
await driver.wait(
  selenium.until.elementLocated(selenium.By.css("main")),
  10000
);
const title = await driver.getTitle();
console.log("The title of the page is", title);
const designLearnMoreButton = await driver.findElement(
  selenium.By.xpath(
    '//*[@id="sections"]/section[5]/div[2]/div/div/ul/li[3]/div/div[2]/div/a'
  )
);
const designUrl = designLearnMoreButton.getAttribute("href");
await driver.get(designUrl);
await driver.sleep(10);
// await driver.quit();
