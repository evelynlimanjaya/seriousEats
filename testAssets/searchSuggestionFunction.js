module.exports=(browser)=>{
    browser
            .useXpath()
            .click('@searchIcon')
            .api.elements('xpath','//*[@class="Search-overlay__curated_suggestions-list-item"]/a',result=>{
                var suggestions=result.value.length
                for(let i=0;i<suggestions;i++){
                    browser
                        .waitForElementVisible('@searchIcon')
                        .click('@searchIcon')
                        .pause(1000)
                        .getText(`(//*[@class="Search-overlay__curated_suggestions-list-item"])[${i+1}]/a`,test=>{
                            var pageTitle=test.value.toLowerCase()
                            var pageTitleUpperCase=test.value.toUpperCase()
                            var pageUrl=pageTitle.replace(/ /g, "-")
                            console.log(pageUrl)
                        browser
                            .click(`(//*[@class="Search-overlay__curated_suggestions-list-item"])[${i+1}]/a`)
                            .verify.urlContains(pageUrl,urlAddress=>{
                                if(urlAddress===true){
                                }
                                else{
                                browser
                                    .verify.visible('@header2', visibility => {
                                        if (visibility === true) {
                                        browser
                                            .waitForElementVisible('@header2')
                                            .verify.containsText('@header2', pageTitleUpperCase)
                                        }
                                        else {
                                        browser
                                            .waitForElementVisible('@header1')
                                            .verify.containsText('@header1', pageTitleUpperCase)

                                        }
                                    })
                                }
                            })
                        })
                }
            })
}