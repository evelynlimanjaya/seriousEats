module.exports=(browser)=>{
    browser
        .useXpath()
        .moveToElement('//*[@class="Nav--desktop"]//span[contains(text(),"Recipes")]', 5, 5)
        .click('//*[@class="Nav--desktop"]//*[contains(text(),"Dish Type")]')
    for(let i=1;i<21;i++){
        browser
            .waitForElementVisible(`(//*[@class="c-card c-card--small "])[${i+3}]`,1000)
            .moveToElement(`(//*[@class="c-card c-card--small "])[${i+3}]`,5,5)
            .click(`(//*[@class="c-card c-card--small "])[${i}]`)
            .getText('@header1',recipeTitle=>{
                var recipeName=recipeTitle.value
                var splitRecipeName=recipeName.split(' ')
                var stringRecipeName=String(splitRecipeName)
                var replaceRecipeName=stringRecipeName.replace(/[,()]/g,'|')
                var recipeRegExp=RegExp(replaceRecipeName,'i')
                browser
                    .click('@saveRecipeBtn')
                    .useCss()
                    .getAttribute('#fexy-relish-outer>iframe','id',result=>{
                        browser
                            .api.frame(result.value)
                        browser
                            .useXpath()
                            .waitForElementVisible('(//*[@class="title ng-tns-c16-2"])[1]',1000)
                            .getText('(//*[@class="title ng-tns-c16-2"])[1]',savedRecipe=>{
                                var savedRecipeName=savedRecipe.value
                                var checkSavedRecipe=savedRecipeName.search(recipeRegExp)
                                console.log(savedRecipeName)
                                if(checkSavedRecipe!==-1){
                                    console.log('Saved recipe match')
                                }
                                else{
                                    console.log('Saved recipe does not match')
                                }
                            })
                            .api.frameParent()
                        browser
                            .api.back()
    
                    })

            })
    }
    browser
        .click('@saveRecipeTab')
        .useCss()
        .getAttribute('#fexy-relish-outer>iframe','id',result=>{
            browser
                .api.frame(result.value)
            browser
                .api.elements('xpath','//*[@class="title ng-tns-c16-2"]',savedItem=>{
                    var checkAmount=savedItem.value.length
                    if(checkAmount==20){
                        console.log('Saved recipe amount is correct')
                    }
                    else{
                        console.log('Saved recipe amount is incorrect')
                    }
                })

        })

        
}