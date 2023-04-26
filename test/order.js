const versionMatcher = require("chromedriver-version-matcher");

const { By, Key, Builder, Select, until } = require("selenium-webdriver");

require("chromedriver");
describe("task for go phptravels", async function () {
  it("automate all links", async function () {
    //create driver
    // Set up the Selenium driver
    const driver = await new Builder().forBrowser("chrome").build();

    // Navigate to the webpage
    driver.get("https://www.graze.com/uk/");

    await driver.manage().window().maximize();
    await driver
      .findElement(
        By.className("button button--primary signup-button text-center")
      )
      .click();
    const boxes = await driver.findElements(
      By.className("button button--secondary button--block")
    );

    await boxes[1].click();
    //filling first data page with info
    const firstName = await driver.findElement(By.id("firstName"));
    await firstName.sendKeys("Denis");
    const secondName = await driver.findElement(By.id("lastName"));
    await secondName.sendKeys("Poplavskii");
    const email = await driver.findElement(By.id("email"));
    await email.sendKeys("mymail@gmail.com");
    const password = await driver.findElement(By.id("password"));
    await password.sendKeys("easy1357$");

    await driver.findElement(By.id("submit-button")).click();

    // Wait for the new page to load
    await driver.wait(
      until.urlContains("https://www.graze.com/uk/registration/address"),
      5000
    );
    //filling second data page
    const streetAdress = await driver.findElement(By.id("line1"));
    await streetAdress.sendKeys("Rakowicka 12");
    const townName = await driver.findElement(By.id("town"));
    await townName.sendKeys("Cracow");
    const postcode = await driver.findElement(By.id("postcode"));
    await postcode.sendKeys("TW9 1EW");
    await driver.findElement(By.id("continue")).click();

    //filling second data page
    await driver.wait(
      until.urlContains("https://www.graze.com/uk/registration/card-details"),
      5000
    );
    const cardHolder = await driver.findElement(By.id("nameOnCard"));
    await cardHolder.sendKeys("Newyork Englishman");

    const cardNumber = await driver.findElement(By.id("number"));
    await cardNumber.sendKeys("4739");
    await cardNumber.sendKeys("6270");
    await cardNumber.sendKeys("4100");
    await cardNumber.sendKeys("7923");
    
    const cvc = await driver.findElement(By.id("cv2"));
    await cvc.sendKeys("127");
    const billingCode = await driver.findElement(By.id("billingPostcode"));
    await billingCode.sendKeys("TW9 1EW");
    await driver.findElement(By.id("submit-button")).click();
    setTimeout(async function () {
      await driver.quit();
    }, 5000);
  });
});
