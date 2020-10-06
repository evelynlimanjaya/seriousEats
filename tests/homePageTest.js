var testPage = {}
var pageElements = require('../testAssets/pageELements')
var searchSuggestion=require('../testAssets/searchSuggestionFunction')
var searchFunction = require('../testAssets/searchFunction')
var recipeAmount=require('../testAssets/recipeAmountFunction')
var shopNav=require('../testAssets/shopNavigationFunction')
var saveRecipe=require('../testAssets/saveRecipeFunction')


module.exports = {
    beforeEach: browser => {
        testPage = browser.page.seriousHomePage()
        testPage.navigate()
        testPage.maximizeWindow()
    },

    after: browser => {
        testPage
            .end()
    },

    'All necessary elements visible test':browser=>{
        pageElements.forEach(test=>
            testPage
                .verify.visible(test.selector))
    },

    'Search result test':browser=>{
        searchFunction(testPage)
    },

    'Search suggestions test': browser => {
        searchSuggestion(testPage)
    },

    'Recipe card amount test': browser => {
        recipeAmount(testPage)
    },

    'Navigation menu directs to the correct page test':browser=>{
        testPage
            .menuNav()
    },

    'Shop test':browser=>{
        shopNav(testPage)
    },

    'Save recipe test':browser=>{
        saveRecipe(testPage)
    }
    
}