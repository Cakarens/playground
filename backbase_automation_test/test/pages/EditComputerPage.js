
/**
 * EditComputerPage page object elements
 *
 * @param driver WebDriver
 */

var EditComputerPage = function (driver) {
  this.driver = driver

  this.editComputerPage =function (){
    return this.driver.findElement({ xpath: '//h1[text()="Edit computer"]' })
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
  this.buttonSaveThisComputer = function () {
    return this.driver.findElement({ css: 'input[value="Save this computer"]' })
  }
  this.buttonCancel = function () {
    return this.driver.findElement({ xpath: '//a[text()="Cancel"]' })
  }
  this.buttonDeleteThisComputer=function (){
    return this.driver.findElement({ css : 'input[value="Delete this computer"]' })
  }
}

module.exports = EditComputerPage
