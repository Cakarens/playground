/**
 * WebDriver helper methods
 */
require('chromedriver')
var webdriver = require('selenium-webdriver'),
  driver

var getDriver = function () {
  driver = buildDriver()
  return driver
}

var buildDriver = function () {
  switch (process.env.PLATFORM) {
    case 'FIREFOX':
      return new webdriver.Builder().
        withCapabilities(webdriver.Capabilities.firefox()).
        build()
    default:
      return new webdriver.Builder()
        .forBrowser('chrome')
        .usingServer('http://localhost:4444/wd/hub')
        .build()
  }
}

module.exports.getDriver = getDriver