
/**
 * AddComputerPage page object elements
 *
 * @param driver WebDriver
 */

var AddComputerPage = function (driver) {
  this.driver = driver

  this.addComputerPage =function (){
    return this.driver.findElement({ xpath: '//h1[text()="Add a computer"]' })
  }
  this.computerName = function () {
    return this.driver.findElement({ css: 'input[name="name"]' })
  }
  this.introducedDate = function () {
    return this.driver.findElement({ css: 'input[name="introduced"]' })
  }
  this.discontinuedDate = function () {
    return this.driver.findElement({ css: 'input[name="discontinued"]' })
  }
  this.company = function () {
    return this.driver.findElement({ css: 'select[name="company"]' })
  }
  this.buttonCreateThisComputer = function () {
    return this.driver.findElement({ css: 'input[value="Create this computer"]' })
  }
  this.buttonCancel = function () {
    return this.driver.findElement({ xpath: '//a[text()="Cancel"]' })
  }
}

module.exports = AddComputerPage
