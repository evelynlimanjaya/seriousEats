module.exports=(browser)=>{
    browser
            .useXpath()
            .moveToElement('//*[@class="Nav--desktop"]//span[contains(text(),"Product Recs")]', 5, 5)
            .click('//*[@class="Nav--desktop"]//*[contains(text(),"Shop")]')
            for(let i=1;i<10;i++){
                browser
                    .getText(`(//*[@class="c-shopify-product-tile__title"])[${i}]`,result=>{
                        console.log(result.value)
                        var productName=result.value
                        var splitProductName=productName.split(' ')
                        var productNameString=String(splitProductName)
                        var replaceProductName=productNameString.replace(/,/g,'|')
                        var productRegExp=RegExp(replaceProductName,'i')
                        browser
                            .moveToElement(`(//*[@class="c-shopify-product-tile__flipper"])[${i+3}]`,5,5)
                            .click(`(//*[@class="c-shopify-product-tile__flipper"])[${i}]`)
                            .waitForElementVisible(`(//*[@class="c-shopify-product-tile"])[${i}]/*[@class="c-shopify-product-tile__flipper c-shopify-product-tile__flipper--flipped"]`,1000)
                            .click(`(//*[@class="c-shopify-product-tile"])[${i}]/*[@class="c-shopify-product-tile__flipper c-shopify-product-tile__flipper--flipped"]`)
                            .click(`(//*[@class="c-shopify-buy__btn"])[${i}]`)
                            .api.windowHandles(handleID=>{
                                var amazonHandleID=handleID.value[1]
                                var seriousEatsHandleID=handleID.value[0]
                                browser
                                    .switchWindow(amazonHandleID)
                                    .api.url(shopUrl=>{
                                        var shopUrlText=shopUrl.value
                                        var shopUrlCheck=shopUrlText.search(productRegExp)
                                        if(shopUrlCheck!==-1){
                                            console.log('Search match')
                                        }
                                        else{
                                            browser
                                                .getText('//*[@id="productTitle"]',amazonTitle=>{
                                                    var productTitle=amazonTitle.value
                                                    var searchResult=productTitle.search(productRegExp)
                                                    if(searchResult!==-1){
                                                        console.log('Search match')
                                                    }
                                                    else if(searchResult==-1){
                                                        browser
                                                            .getText('//*[@id="feature-bullets"]',featureText=>{
                                                        var featureSearch=featureText.value.search(productRegExp)
                                                        if(featureSearch!==-1){
                                                            console.log('Search match')
                                                        }
                                                        else{
                                                    console.log('No search match')
                                                        }
                                                        })
                                                    }
            
                
            
                                                })
        

                                        }
                                    })
                                browser
                                    .closeWindow()
                                    .switchWindow(seriousEatsHandleID)

                            })
                    })
                
            }
}