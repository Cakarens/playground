
/**
 * Actions for Edit and Delete Computer page
 */

var EditComputerPage = require('../pages/EditComputerPage')
var ComputersMainPage = require('../pages/ComputersMainPage')
var expect = require('chai').expect
var until = require('selenium-webdriver/lib/until')
const TIMEOUT = 1000


var EditComputerActions = function (driver) {
    this.driver = driver
    var editComputerPage = new EditComputerPage(driver)
    var computersMainPage = new ComputersMainPage(driver)

    this.verifyEditComputerPage = function () {
        driver.sleep(1000)
        driver.wait(until.elementIsVisible(editComputerPage.editComputerPage()), TIMEOUT).then(() => {
            expect(editComputerPage.editComputerPage()).to.be.displayed
        })
    }

    this.clickfirstColumnFirstRow = function () {
        driver.wait(until.elementIsVisible(computersMainPage.firstColumnFirstRow()), TIMEOUT).then(() => {
            computersMainPage.firstColumnFirstRow().click()
        })
    }

    this.clickButtonSaveThisComputer = function () {
        driver.wait(until.elementIsVisible(editComputerPage.buttonSaveThisComputer()), TIMEOUT).then(() => {
            editComputerPage.buttonSaveThisComputer().click()
        })
    }

    this.clickButtonCancel = function () {
        driver.wait(until.elementIsVisible(editComputerPage.buttonCancel()), TIMEOUT).then(() => {
            editComputerPage.buttonCancel().click()
        })
    }

    this.enterComputerName = function (obj) {
        const { computer_info } = obj
        driver.wait(until.elementIsVisible(editComputerPage.computerName()), TIMEOUT)
            .sendKeys(computer_info.computerName)
    }

    this.enterIntroducedDate = function (obj) {
        const { computer_info } = obj
        driver.wait(until.elementIsVisible(editComputerPage.introducedDate()), TIMEOUT)
            .sendKeys(computer_info.introduced_date)
    }

    this.enterDiscontinuedDate = function (obj) {
        const { computer_info } = obj
        driver.wait(until.elementIsVisible(editComputerPage.discontinuedDate()), TIMEOUT)
            .sendKeys(computer_info.discontinuedDate)
    }

    this.selectCompany = function (obj) {
        const { computer_info } = obj
        driver.wait(until.elementIsVisible(editComputerPage.company()), TIMEOUT).then(() => {
            clickSelectedhOption('Company', computer_info.company)
        })
    }

    this.clickButtonDeleteThisComputer = function () {
        driver.wait(until.elementIsVisible(editComputerPage.buttonDeleteThisComputer()), TIMEOUT).then(() => {
            editComputerPage.buttonDeleteThisComputer().click()
        })
    }
}


module.exports = EditComputerPageActions