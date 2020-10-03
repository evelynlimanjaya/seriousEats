var testPage = {}
var pageElements = require('../testAssets/pageELements')
var sectionTitle=require('../testAssets/sectionTitle')


module.exports = {
    before: browser => {
        testPage = browser.page.seriousHomePage()
        testPage.navigate()
        testPage.maximizeWindow()
    },
    after: browser => {
        testPage
            .end()
    },
    // 'All necessary elements visible test':browser=>{
    //     pageElements.forEach(test=>
    //         testPage
    //             .verify.visible(test.selector))
    // },
    'Search result test':browser=>{
        var searchParameter=RegExp('chicken soup','i')
        testPage
            .click('@searchIcon')
            .setValue('@searchBox',['chicken soup',browser.Keys.ENTER])
            .waitForElementVisible('body')
            .getText('body',result=>{
                console.log(result)
            })
            // .equalsIgnoreCase('chicken soup','body')
            // .verify.containsText('body','CHICKEN SOUP')
            // ,result1=>{
            //     if(result1===true){
            //         console.log('Search success')
            //     }
            //     else{
            //         testPage.verify.containsText('body','Chicken soup',result2=>{
            //         if(result2===true){
            //             console.log('Search success')
            //         }
            //         else{
            //             testPage.verify.containsText('body',)
            //         }
            //         })
            //     }
            // }
            
            
            
            
            // ||||'chicken Soup'||'chicken soup'||'Chicken'||'chicken'||'Soup'||'soup')){
            // console.log('Success')
        // }
    },
    // 'Search suggestions test': browser => {
    //     testPage
    //         .useXpath()
    //         .click('@searchIcon')
    //         .api.elements('xpath','//*[@class="Search-overlay__curated_suggestions-list-item"]/a',result=>{
    //             var suggestions=result.value.length
    //             for(let i=0;i<suggestions;i++){
    //                 testPage
    //                     .waitForElementVisible('@searchIcon')
    //                     .click('@searchIcon')
    //                     .pause(1000)
    //                     .getText(`(//*[@class="Search-overlay__curated_suggestions-list-item"])[${i+1}]/a`,test=>{
    //                         var pageTitle=test.value.toLowerCase()
    //                         var pageTitleUpperCase=test.value.toUpperCase()
    //                         var pageUrl=pageTitle.replace(/ /g, "-")
    //                         console.log(pageUrl)
    //                     testPage
    //                         .click(`(//*[@class="Search-overlay__curated_suggestions-list-item"])[${i+1}]/a`)
    //                         .verify.urlContains(pageUrl,urlAddress=>{
    //                             if(urlAddress===true){
    //                             }
    //                             else{
    //                             testPage
    //                                 .verify.visible('(//*[@class="itcss__h2"])[1]', visibility => {
    //                                     if (visibility === true) {
    //                                     testPage
    //                                         .waitForElementVisible('(//*[@class="itcss__h2"])[1]')
    //                                         .verify.containsText('(//*[@class="itcss__h2"])[1]', pageTitleUpperCase)
    //                                     }
    //                                     else {
    //                                     testPage
    //                                         .waitForElementVisible('//h1')
    //                                         .verify.containsText('//h1', pageTitleUpperCase)

    //                                     }
    //                                 })
    //                             }
    //                         })
    //                     })
    //             }
    //         })
    // },
    // 'Recipe card amount test': browser => {
    //     testPage
    //         .api.elements('xpath','//*[@id="featured"]//*[@class="module"]',result=>{
    //             var cardAmount=result.value.length
    //             if(cardAmount===3){
    //                 console.log('Featured Recipes card amount is correct. Result:',cardAmount)
    //             }
    //             else{
    //                 console.log('Featured Recipes card amount is incorrect. Result:',cardAmount)
    //             }
    //         })
    //     for(let i=0;i<8;i++){
    //         testPage
    //             .api.elements('xpath',`(//section[@class="block block-primary block-no-nav"])[${i+1}]//article`,result=>{
    //                 var cardAmount=result.value.length
    //                 if(cardAmount===8){
    //                     console.log(sectionTitle[i],'card amount is correct. Result:',cardAmount)
    //                 }
    //                 else{
    //                     console.log(sectionTitle[i],'card amount is incorrect. Result:',cardAmount)
    //                 }
    //             })
    //     }
    // },
    // 'Navigation menu directs to the correct page test':browser=>{
    //     testPage
    //         .menuNav()
    // }
    
}