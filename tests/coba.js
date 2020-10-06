function setElementValue(selector, value) {
    document.querySelector(selector).textContent = value;
  }

module.exports={
    'Test':browser=>{
        browser
            .url('https://www.seriouseats.com/')
            .maximizeWindow()
            .useXpath()
            .moveToElement('//*[@class="Nav--desktop"]//span[contains(text(),"Product Recs")]', 5, 5)
            .click('//*[@class="Nav--desktop"]//*[contains(text(),"Shop")]')
            // .execute(document.getElementsByClassName('bottom-sticky-ad closeable').className = 'bottom-sticky-ad closeable collapsed')
        setElementValue('bottom-sticky-ad closeable','bottom-sticky-ad closeable collapsed')
        browser
            .click('(//*[@class="c-shopify-buy__btn"])[4]')
            .pause()
    }

}