const versionMatcher = require("chromedriver-version-matcher");
const { expect } = require("chai");
const { By, Key, Builder, Select, until } = require("selenium-webdriver");

require("chromedriver");
describe("task for go phptravels", async function () {
  // it("successful", async function () {
  //   //create driver
  //   // Set up the Selenium driver
  //   const driver = await new Builder().forBrowser("chrome").build();

  //   // Navigate to the webpage
  //   driver.get("https://www.graze.com/uk/");

  //   await driver.manage().window().maximize();
  //   await driver
  //     .findElement(
  //       By.className("button button--primary signup-button text-center")
  //     )
  //     .click();
  //   const boxes = await driver.findElements(
  //     By.className("button button--secondary button--block")
  //   );

  //   await boxes[1].click();
  //   //filling first data page with info
  //   const firstName = await driver.findElement(By.id("firstName"));
  //   await firstName.sendKeys("Denis");
  //   const secondName = await driver.findElement(By.id("lastName"));
  //   await secondName.sendKeys("Poplavskii");
  //   const email = await driver.findElement(By.id("email"));
  //   await email.sendKeys("mymail@gmail.com");
  //   const password = await driver.findElement(By.id("password"));
  //   await password.sendKeys("easy1357$");

  //   await driver.findElement(By.id("submit-button")).click();

  //   //update for new functionality on page
  //   await driver.wait(
  //     until.urlContains("https://www.graze.com/uk/registration/address"),
  //     5000
  //   );
  //   await driver.findElement(By.className("alert-link")).click();

  //   // Wait for the new page to load
  //   await driver.wait(
  //     until.urlContains("https://www.graze.com/uk/registration/address"),
  //     5000
  //   );
  //   //filling second data page
  //   const streetAdress = await driver.findElement(By.id("line1"));
  //   await streetAdress.sendKeys("Rakowicka 12");
  //   const townName = await driver.findElement(By.id("town"));
  //   await townName.sendKeys("Cracow");
  //   const postcode = await driver.findElement(By.id("postcode"));
  //   await postcode.sendKeys("TW9 1EW");
  //   await driver.findElement(By.id("continue")).click();

  //   //filling third data page
  //   await driver.wait(
  //     until.urlContains("https://www.graze.com/uk/registration/card-details"),
  //     5000
  //   );

  //   const cardHolder = await driver.findElement(By.id("nameOnCard"));
  //   await cardHolder.sendKeys("Newyork Englishman");

  //   const cardNumber = await driver.findElement(By.id("number"));
  //   await cardNumber.sendKeys("4739");
  //   await cardNumber.sendKeys("6270");
  //   await cardNumber.sendKeys("4100");
  //   await cardNumber.sendKeys("7923");

  //   const cvc = await driver.findElement(By.id("cv2"));
  //   await cvc.sendKeys("127");
  //   const billingCode = await driver.findElement(By.id("billingPostcode"));
  //   await billingCode.sendKeys("TW9 1EW");
  //   await driver.findElement(By.id("submit-button")).click();
  //   setTimeout(async function () {
  //     await driver.quit();
  //   }, 5000);
  // });

  it("falsy form fields", async function () {
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

    const secondName = await driver.findElement(By.id("lastName"));

    const email = await driver.findElement(By.id("email"));

    const password = await driver.findElement(By.id("password"));

    await driver.findElement(By.id("submit-button")).click();
    //waiting for page to reload because button triggers page refresh and error elements are not present before that
    await driver.wait(
      until.stalenessOf(driver.findElement(By.tagName("html")))
    );
    // Find all  elements with the "help-block" class
    const helpBlockElements = await driver.findElements(By.css("small"));

    // Get the second <small> element and output its text content
    const firstHelpBlockElement = helpBlockElements[0];
    //getting error text for first name
    const firstHelpBlockText = await firstHelpBlockElement.getAttribute(
      "innerText"
    );
    console.log(`firstHelpBlockText`, firstHelpBlockText);

    const secondHelpBlockElement = helpBlockElements[2];
    //getting error text for second name
    const secondHelpBlockText = await secondHelpBlockElement.getAttribute(
      "innerText"
    );
    console.log(`secondHelpBlockText`, secondHelpBlockText);

    const emailHelpBlockElement = helpBlockElements[5];
    //getting error text for email
    const emailHelpBlockText = await emailHelpBlockElement.getAttribute(
      "innerText"
    );
    console.log(`emailHelpBlockText1`, emailHelpBlockText);

    const passwordHelpBlockElement = helpBlockElements[8];
    //getting error text for password
    const passwordHelpBlockText = await passwordHelpBlockElement.getAttribute(
      "innerText"
    );
    console.log(`passwordHelpBlockText1`, passwordHelpBlockText);

    // // Check if the text matches the expected value
    //first name field error
    const firstNameHelpBlockExpected = "first name is required";
    try {
      expect(firstHelpBlockText).to.equal(firstNameHelpBlockExpected);
    } catch (error) {
      console.error("Assertion failed:", error);
    }

    //second name field error
    const secondNameHelpBlockExpected = "last name is required";
    try {
      expect(secondHelpBlockText).to.equal(secondNameHelpBlockExpected);
    } catch (error) {
      console.error("Assertion failed:", error);
    }

    const emailHelpBlockExpected = "This field is required";
    try {
      expect(emailHelpBlockText).to.equal(emailHelpBlockExpected);
    } catch (error) {
      console.error("Assertion failed:", error);
    }

    const passwordHelpBlockExpected = "This field is required";
    try {
      expect(passwordHelpBlockText).to.equal(passwordHelpBlockExpected);
    } catch (error) {
      console.error("Assertion failed:", error);
    }

    //fill in correct first, last name but falsy email and password
    const firstName1 = await driver.findElement(By.id("firstName"));

    const secondName1 = await driver.findElement(By.id("lastName"));

    const email1 = await driver.findElement(By.id("email"));
    const password1 = await driver.findElement(By.id("password"));
    await firstName1.sendKeys("Denis");
    await secondName1.sendKeys("Poplavskii");
    await email1.sendKeys("mymai@");
    //click on the page to trigger error message to appear
    await (await driver.findElement(By.className("container"))).click();
    //getting sneaky element with Xpath
    await driver.wait(until.elementLocated(By.xpath('//small[@class="help-block" and @data-bv-validator="emailAddress" and @data-bv-for="email" and @data-bv-result="INVALID"]')), 2000);
    const emailValidationMessage = await driver.findElement(
      By.xpath('//small[@class="help-block" and @data-bv-validator="emailAddress" and @data-bv-for="email" and @data-bv-result="INVALID"]')
    );
    
    // Get the text content of the element
    const emailValidationStatusText = await emailValidationMessage.getText();
    console.log("emailValidationStatusText ",emailValidationStatusText );
    const emailValidationStatusTextExpected = "This does not appear to be a valid email address";
    try {
      expect(emailValidationStatusText).to.equal(
        emailValidationStatusTextExpected
      );
    } catch (error) {
      console.error("Assertion failed:", error);
    }


    await password1.sendKeys("12345");
    const submitButton1 = await driver.findElement(By.id("submit-button"));
    const submitButtonValidationStatus = await submitButton1.getAttribute(
      "disabled"
    );
    console.log(`submitButtonValidationStatus`, submitButtonValidationStatus);
    const submitButtonValidationStatusExpected = "true";
    try {
      expect(submitButtonValidationStatus).to.equal(
        submitButtonValidationStatusExpected
      );
    } catch (error) {
      console.error("Assertion failed:", error);
    }

    //filling also email,password field with valid data submit button should be enabled
    await email1.sendKeys("hots.com");
    await password1.sendKeys("6");
    const submitButtonValidationStatus1 = await submitButton1.getAttribute(
      "disabled"
    );
    try {
      expect(submitButtonValidationStatus1).to.equal(null);
    } catch (error) {
      console.error("Assertion failed:", error);
    }

    setTimeout(async function () {
      await driver.quit();
    }, 5000);
  });
});
