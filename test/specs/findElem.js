

describe('findElem',()=>{
  
 xit('findElem Test',async()=>{

  await driver.pause(3000)
   const Views = $('~Views')
   await Views.click()
   const Auto_Complete =$('//*[@content-desc="Auto Complete"]')
   await Auto_Complete.click()
   const Screen_Top=$('//*[@content-desc="1. Screen Top"]')
   await Screen_Top.click()
   await driver.pause(4000)
   const country =$('//*[@resource-id="io.appium.android.apis:id/edit"]')
   await country.addValue('canada')
   await expect(country).toHaveText('canada')
 })
 xit('activity',async()=>{
await $('~Open navigation menu').click()
 await driver.pause(2000)
 await $('~Login').click()
 const username =$$('//*[@class="android.widget.EditText"]')[0]
 await username.click()
   await username.setValue("كندا")
   const pasword =$$('//*[@class="android.widget.EditText"]')[1]
 await pasword.click()
   await pasword.setValue("Admin@2022")
   await driver.pause(2000)
   await driver.hideKeyboard() 
   const login =$$('//*[@class="android.widget.Button"]')[4]
 await login.click()
 await driver.pause(2000)
const UsdTry=$$('//*[@class="android.view.View"]')[0]
   await UsdTry.click()
   const USD =$('~1,000')
 await USD.click()
   //await USD.setValue("1500")
    await driver.pause(2000)
   const pay=$$('//*[@class="android.view.View"]')[21]
   await pay.click()
   console.log('pay',pay.getElementText())
 await driver.pause(4000)
   const logout=$$('//*[@class="android.widget.ImageView"]')[1]
   await logout.doubleClick()
 }),
 it('balance',async()=>{
  await $('~Open navigation menu').click()
 await driver.pause(2000)
 await $('~Login').click()
 const username =$$('//*[@class="android.widget.EditText"]')[0]
 await username.click()
   await username.setValue("ضياء4")
   const pasword =$$('//*[@class="android.widget.EditText"]')[1]
 await pasword.click()
   await pasword.setValue("Admin@2022")
   await driver.pause(2000)
   await driver.hideKeyboard() 
   const login =$$('//*[@class="android.widget.Button"]')[4]
 await login.click()
 await driver.pause(2000)
//  Ledger
//  Tab 1 of 5
await $('~Open navigation menu').click()
 await driver.pause(2000)
 const ledger =$('~Ledger')
 await ledger.click()
 driver.pause(1000)
 const lastmonth =$("~LastMonth")
 await lastmonth.click()
 driver.pause(5000)
//  await $('android= new UiScrollable( new UiSelector().scrollable(true)).scrollToEnd(1,5)')
//  driver.pause(5000)
 await $('android= new UiScrollable( new UiSelector().scrollable(true)).scrollDescriptionIntoView(Opreation : 72.05 Balance : -576,888.44 Cut of amount : 65.5 Euro With price 1.1 = 72.05 US Dollar USD Between Currencies 2023/09/15)').click()
 driver.pause(5000)
 const Confirmation =$("~Confirmation")
 await Confirmation.click()
 driver.pause(1000)
 const logout=$$('//*[@class="android.widget.ImageView"]')[1]
 await logout.doubleClick()
 //asda
 //asdad
 //dsfkjsdf sdkfjskdf


 })

})