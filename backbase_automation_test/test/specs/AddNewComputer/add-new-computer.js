function sharedDescribe (computer_name,introduced_date,discontinued_date,company) {
    var test = require('selenium-webdriver/testing'),
        AddComputerPageActions = require('../../actions/AddComputerPageActions'),
        data = require('../Utils/reset_password.json')


        test.describe('Add a new Computer', function () {
            var driver = require('../../driver').getDriver()
            var addComputerPageActions = new addComputerPageActions(driver)
            var computersMainPageActions = new computersMainPageActions(driver)
            var config = require('config')
            var url = config.get('url')

            test.before(function (done) {
                driver.get(url)
                driver.manage().timeouts().implicitlyWait(1000)
                done()
            })

            test.after(function (done) {
                driver.quit()
                done()
            })

            test.it('When the User adds a new computer', function (done) {
                computersMainPageActions.verifyComputersMainPage()
                computersMainPageActions.clickButtonAddANewComputer()
                addComputerPageActions.verifyAddComputerPage()
                addComputerPageActions.enterComputerName(computer_name)
                addComputerPageActions.enterIntroducedDate(introduced_date)
                addComputerPageActions.enterDiscontinuedDate(discontinued_date)
                addComputerPageActions.selectCompany(company)
                addComputerPageActions.clickButtonCreateThisComputer()
                done()
            })
            test.it('Then the computer page is opened and the confirmation massige is displayed', function (done) {
                computersMainPageActions.verifyAddComputerPag()
                computersMainPageActions.verifyMessageSuccessfulAddComputer()
                done()
            })


        })
}

describe('FEATURE: Add a new Computer', function () {
    sharedDescribe('AAA','1987-05-27','1987-05-27','RCA')
})