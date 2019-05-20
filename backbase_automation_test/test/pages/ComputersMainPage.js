
/**
 * ComputersMainPage page object elements
 *
 * @param driver WebDriver
 */

var ComputersMainPage = function (driver) {
  this.driver = driver

  this.computersMainPage =function (){
    return this.driver.findElement({ xpath: '//h1[contains(text(),"computers found")]' })
  }
  this.filterTextField = function () {
    return this.driver.findElement({ css: '[name = f]' })
  }
  this.buttonFilter = function () {
    return this.driver.findElement({ css: '#searchsubmit' })
  }
  this.buttonAddANewComputer = function () {
    return this.driver.findElement({ css: '#add' })
  }
  this.tableColumn1Title=function (){
    return this.driver.findElement({ css : '.col2.header a' })
  }
  this.tableColumn2Title=function (){
    return this.driver.findElement({ css : '.col3.header a' })
  }
  this.tableColumn3Title=function (){
    return this.driver.findElement({ css : '.col4.header a' })
  }
  this.tableColumn3Title=function (){
    return this.driver.findElement({ css : 'col5.header  a' })
  }
  this.buttonPreviousEnabled =function (){
    return this.driver.findElement({ css :'.prev a' })
  }
  this.buttonPreviousDisabled =function (){
    return this.driver.findElement({ css :'.prev.disabled a' })
  }
  this.buttonNextEnabled =function (){
    return this.driver.findElement({ css :'.next a' })
  }
  this.buttonNextDisabled =function (){
    return this.driver.findElement({ css :'.next.disabled a' })
  }
  this.firstColumnFirstRow =function (){
    return this.driver.findElement({ css :'tbody>tr:nth-child(1)>td:nth-child(1)>a' })
  }
  this.messageSuccessfulAddComputer =function (){
    return this.driver.findElement({ xpath: '//a[text()="Computer AAA has been created"]' })
  }
}
module.exports = ComputersMainPage
