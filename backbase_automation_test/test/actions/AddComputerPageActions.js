
/**
 * Actions for Add Computer main page
 */

var AddComputerPage = require('../pages/AddComputerPage')
var expect = require('chai').expect
var until = require('selenium-webdriver/lib/until')
const TIMEOUT = 1000


var AddComputerPageActions = function (driver) {
    this.driver = driver
    var addComputerPage = new AddComputerPage(driver)

    this.verifyAddComputerPage = function () {
        driver.sleep(1000)
        driver.wait(until.elementIsVisible(addComputerPage.addComputerPage()), TIMEOUT).then(() => {
            expect(addComputerPage.addComputerPage()).to.be.displayed
        })
    }

    this.clickButtonCreateThisComputer = function () {
        driver.wait(until.elementIsVisible(addComputerPage.buttonCreateThisComputer()), TIMEOUT).then(() => {
            addComputerPage.buttonCreateThisComputer().click()
        })
    }

    this.clickButtonCancel = function () {
        driver.wait(until.elementIsVisible(addComputerPage.buttonCancel()), TIMEOUT).then(() => {
            addComputerPage.buttonCancel().click()
        })
    }

    this.enterComputerName = function (obj) {
        const { computer_info } = obj
        driver.wait(until.elementIsVisible(addComputerPage.computerName()), TIMEOUT)
            .sendKeys(computer_info)
    }

    this.enterIntroducedDate = function (obj) {
        const { computer_info } = obj
        driver.wait(until.elementIsVisible(addComputerPage.introducedDate()), TIMEOUT)
            .sendKeys(computer_info)
    }

    this.enterDiscontinuedDate = function (obj) {
        const { computer_info } = obj
        driver.wait(until.elementIsVisible(addComputerPage.discontinuedDate()), TIMEOUT)
            .sendKeys(computer_info)
    }

    this.selectCompany = function (obj) {
        const { computer_info } = obj
        driver.wait(until.elementIsVisible(addComputerPage.company()), TIMEOUT).then(() => {
            clickSelectedhOption('Company', computer_info.company)
        })
    }
}


module.exports = AddComputerPageActions