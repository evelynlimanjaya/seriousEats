var seriousCommands={
    menuNav:function(){
        this
            .api.elements('xpath', '//*[@class="Nav--desktop"]/*[@class="Nav__category"]', result => {
                var categoryNum = result.value.length
                for (let i = 0; i < categoryNum; i++) {
                    this
                        .useXpath()
                        .waitForElementVisible(`(//*[@class="Nav--desktop"]/*[@class="Nav__category"])[${i + 1}]/a`)
                        .getText(`(//*[@class="Nav--desktop"]/*[@class="Nav__category"])[${i + 1}]/a`, title => {
                            this
                                .click(`(//*[@class="Nav--desktop"]/*[@class="Nav__category"])[${i + 1}]/a`)
                                .waitForElementVisible('//h1')
                                .verify.containsText('//h1', title.value)
                        })
                        .moveToElement(`(//*[@class="Nav--desktop"]/*[@class="Nav__category"])[${i + 1}]/a`, 10, 10)
                        .verify.visible('//*[@class="Nav--desktop"]//*[@class="Nav__item Nav__item--indent "]', (test) => {
                            if (test === true) {
                                this.api.elements('xpath', '//*[@class="Nav--desktop"]//*[@class="Nav__item Nav__item--indent "]', indentNum => {
                                    var indentTotal = indentNum.value.length
                                    for (let n = 0; n < indentTotal; n++) {
                                        this
                                            .waitForElementVisible(`(//*[@class="Nav--desktop"]/*[@class="Nav__category"])[${i + 1}]/a`)
                                            .moveToElement(`(//*[@class="Nav--desktop"]/*[@class="Nav__category"])[${i + 1}]/a`, 10, 10)
                                            .waitForElementVisible(`(//*[@class="Nav--desktop"]//*[@class="Nav__item Nav__item--indent "])[${n + 1}]`)
                                            .getText(`(//*[@class="Nav--desktop"]//*[@class="Nav__item Nav__item--indent "])[${n + 1}]`, indentName => {
                                                var pageTitle = indentName.value.toUpperCase()
                                                this
                                                    .click(`(//*[@class="Nav--desktop"]//*[@class="Nav__item Nav__item--indent "])[${n + 1}]`)
                                                    .verify.visible('(//*[@class="itcss__h2"])[1]', visibility => {
                                                        if (visibility === true) {
                                                            this
                                                                .waitForElementVisible('(//*[@class="itcss__h2"])[1]')
                                                                .verify.containsText('(//*[@class="itcss__h2"])[1]', pageTitle)

                                                        }
                                                        else {
                                                            this
                                                                .waitForElementVisible('//h1')
                                                                .verify.containsText('//h1', pageTitle)

                                                        }
                                                    })

                                            })

                                    }
                                })
                                this
                                    .moveToElement(`(//*[@class="Nav--desktop"]/*[@class="Nav__category"])[${i + 1}]/a`, 10, 10)
                                    .api.elements('xpath', `//*[@class="Nav--desktop"]/*[@data-idx="${i}"]//*[@class="Nav__item  "]`, categoryNum => {
                                        var categoryTotal = categoryNum.value.length
                                        for (let n = 0; n < categoryTotal; n++) {
                                            this
                                                .moveToElement(`(//*[@class="Nav--desktop"]/*[@class="Nav__category"])[${i + 1}]/a`, 9, 9)
                                                .waitForElementVisible(`(//*[@class="Nav--desktop"]/*[@data-idx="${i}"]//*[@class="Nav__item  "])[${n + 1}]`)
                                                .getText(`(//*[@class="Nav--desktop"]/*[@data-idx="${i}"]//*[@class="Nav__item  "])[${n + 1}]`, categoryName => {
                                                    var pageTitle = categoryName.value.toUpperCase()
                                                    this
                                                        .click(`(//*[@class="Nav--desktop"]/*[@data-idx="${i}"]//*[@class="Nav__item  "])[${n + 1}]`)
                                                        .verify.visible('//h1', visibility => {
                                                            if (visibility === true) {
                                                                this.verify.containsText('//h1', pageTitle)
                                                            }
                                                            else {
                                                                this.verify.containsText('(//*[@class="itcss__h2"])[1]', pageTitle)
                                                            }
                                                        })
                                                })
                                        }
                                    })
                                this
                                    .moveToElement(`(//*[@class="Nav--desktop"]/*[@class="Nav__category"])[${i + 1}]/a`, 10, 10)
                                    .verify.visible(`(//*[@class="Nav--desktop"]//*[text()="View All"])[${i+1}]`,visibility=>{
                                        if(visibility===true){
                                            this
                                                .moveToElement(`(//*[@class="Nav--desktop"]/*[@class="Nav__category"])[${i + 1}]/a`, 10, 10)
                                                .waitForElementVisible(`(//*[@class="Nav--desktop"]/*[@class="Nav__category"])[${i + 1}]/a`)
                                                .getText(`(//*[@class="Nav--desktop"]/*[@class="Nav__category"])[${i + 1}]/a`,title=>{
                                                    this.click(`(//*[@class="Nav--desktop"]//*[text()="View All"])[${i+1}]`)
                                                    .waitForElementVisible('//h1')
                                                    .verify.containsText('//h1', title.value)
                                                })
                                                
                                        }
                                    })

                                
                            }


                            else {
                                this
                                    .moveToElement(`(//*[@class="Nav--desktop"]/*[@class="Nav__category"])[${i + 1}]/a`, 10, 10)
                                    .api.elements('xpath', `//*[@class="Nav--desktop"]/*[@data-idx="${i}"]//*[@class="Nav__item  "]`, categoryNum => {
                                    var categoryTotal = categoryNum.value.length
                                    for (let n = 0; n < categoryTotal; n++) {
                                        this
                                            .moveToElement(`(//*[@class="Nav--desktop"]/*[@class="Nav__category"])[${i + 1}]/a`, 9, 9)
                                            .waitForElementVisible(`(//*[@class="Nav--desktop"]/*[@data-idx="${i}"]//*[@class="Nav__item  "])[${n + 1}]`)
                                            .getText(`(//*[@class="Nav--desktop"]/*[@data-idx="${i}"]//*[@class="Nav__item  "])[${n + 1}]`, categoryName => {
                                                var pageTitle = categoryName.value.toUpperCase()
                                                this
                                                    .click(`(//*[@class="Nav--desktop"]/*[@data-idx="${i}"]//*[@class="Nav__item  "])[${n + 1}]`)
                                                    .waitForElementVisible('//h1')
                                                    .verify.visible('//h1', visibility => {
                                                        if (visibility === true) {
                                                            this
                                                                .waitForElementVisible('//h1')
                                                                .verify.containsText('//h1', pageTitle)
                                                        }
                                                        else {
                                                            this
                                                                .waitForElementVisible('(//*[@class="itcss__h2"])[1]')
                                                                .verify.containsText('(//*[@class="itcss__h2"])[1]', pageTitle)
                                                        }
                                                    })
                                            })
                                    }
                                })
                                this
                                    .moveToElement(`(//*[@class="Nav--desktop"]/*[@class="Nav__category"])[${i + 1}]/a`, 10, 10)
                                    .verify.visible(`(//*[@class="Nav--desktop"]//*[text()="View All"])[${i+1}]`,visibility=>{
                                        if(visibility===true){
                                            this
                                                .moveToElement(`(//*[@class="Nav--desktop"]/*[@class="Nav__category"])[${i + 1}]/a`, 10, 10)
                                                .waitForElementVisible(`(//*[@class="Nav--desktop"]/*[@class="Nav__category"])[${i + 1}]/a`)
                                                .getText(`(//*[@class="Nav--desktop"]/*[@class="Nav__category"])[${i + 1}]/a`,title=>{
                                                    this.click(`(//*[@class="Nav--desktop"]//*[text()="View All"])[${i+1}]`)
                                                    .waitForElementVisible('//h1')
                                                    .verify.containsText('//h1', title.value)
                                                })
                                                
                                        }
                                    })
                            }

                        })

                }
            })
    }
}

module.exports={
    url:'https://www.seriouseats.com/',
    commands:[seriousCommands],
    elements:{
        seriousLogo:{
            selector:'(//a[@data-click-id="logo"]/div[@class="header-global__logo"])[2]',
            locateStrategy:'xpath'
        },
        recipesNav:'[data-click-id="recipes"]',
        howToNav:'[data-click-id="how-tos"]',
        productsNav:'[data-click-id="products"]',
        cultureNav:'[data-click-id="culture"]',
        diningNav:'[data-click-id="dining"]',
        grillingNav:'[data-click-id="grilling"]',
        accountIcon:'[class="icon icon-your-account"]',
        searchIcon:{
            selector:'(//*[@class="icon icon-search-glass"])[2]',
            locateStrategy:'xpath'
        },
        searchBox:'#search-box',
        featuredRec:{
            selector:'//*[@id="featured"]//*[@class="module"]',
            locateStrategy:'xpath'
        },
        featuredRecCards:{
            selector:'//*[@id="featured"]//*[@class="module"]',
            locateStrategy:'xpath'
        },
        sectionTitle:{
            selector:'//*[@class="itcss__h2"]',
            locateStrategy:'xpath'
        },
        sectionCards:{
            selector:'//section[@class="block block-primary block-no-nav"])[1]//article',
            locateStrategy:'xpath'
        },
        moreBtn:'.more',
        cocktailTitle:{
            selector:'//h4[contains(text(),"Cocktail Recipes")]',
            locateStrategy:'xpath'
        },
        cocktailBtn:{
            selector:'//span[contains(text(),"Pick Your Poison")]',
            locateStrategy:'xpath'
        },
        videosTitle:{
            selector:'//h2[contains(text(),"Videos")]',
            locateStrategy:'xpath'
        },
        podcastTitle:{
            selector:'//h4[contains(text(),"Special Sauce Podcast")]',
            locateStrategy:'xpath'
        },
        bottomLogo:'[class="logo-se reversed"]',
        aboutLinks:'.about-links',
        socialLinks:'[class="social-links self-clear"]',
        utilityLinks:'[class="utility-links"]',
        
    }
}