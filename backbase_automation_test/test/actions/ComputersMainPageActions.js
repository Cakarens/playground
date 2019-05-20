
/**
 * Actions for Computers main page
 */

var ComputersMainPage = require('../pages/ComputersMainPage')
var expect = require('chai').expect
var until = require('selenium-webdriver/lib/until')
const TIMEOUT = 1000


var ComputersMainActions = function (driver) {
    this.driver = driver
    var computersMainPage = new ComputersMainPage(driver)

    this.verifyComputersMainPage = function () {
        driver.sleep(1000)
        driver.wait(until.elementIsVisible(computersMainPage.computersMainPage()), TIMEOUT).then(() => {
            expect(computerMainPage.computersMainPage()).to.be.displayed
        })
    }

    this.clickButtonFilterByName = function () {
        driver.wait(until.elementIsVisible(computersMainPage.buttonFilter()), TIMEOUT).then(() => {
            computerMainPage.buttonFilter().click()
        })
    }

    this.clickButtonAddANewComputer = function () {
        driver.wait(until.elementIsVisible(computersMainPage.buttonAddANewComputer()), TIMEOUT).then(() => {
            computerMainPage.buttonAddANewComputer().click()
        })
    }

    this.enterComputerNameInFilterField = function (obj) {
        const { computer_info } = obj
        driver.wait(until.elementIsVisible(computersMainPage.filterTextField()), TIMEOUT)
            .sendKeys(computer_info.computerName)
    }

    this.clickFirstComputerInTable = function () {
        driver.sleep(1000)
        driver.wait(until.elementIsVisible(computersMainPage.firstColumnFirstRow()), TIMEOUT).then(() => {
            computerMainPage.firstColumnFirstRow().click()
        })
    }

    this.clickButtonNext = function () {
        driver.sleep(1000)
        driver.wait(until.elementIsVisible(computersMainPage.buttonNextEnabled()), TIMEOUT).then(() => {
            computerMainPage.buttonNextEnabled().click()
        })
    }

    this.verifyMessageSuccessfulAddComputer = function () {
        driver.sleep(1000)
        driver.wait(until.elementIsVisible(computersMainPage.messageSuccessfulAddComputer()), TIMEOUT).then(() => {
            computerMainPage.messageSuccessfulAddComputer().click()
        })
    }
}


module.exports = ComputersMainActions