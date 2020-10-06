var searchData=require('../testAssets/searchData')

module.exports=(test)=>{
for(let i=0;i<searchData.length;i++){
    test
        .click('@searchIcon')
        .setValue('@searchBox',searchData[i])
        .api.keys(test.api.Keys.ENTER)
    test
        .waitForElementVisible('@searchPosts')
        .getText('@searchPosts',postsResult=>{
            test.getValue('@searchInput',valueResult=>{
                var fullSearch=valueResult.value
                var searchWords=fullSearch.split(' ')
                var searchString=String(searchWords)
                var replaceSearchString=searchString.replace(',','|')
                var fullRegExp=fullSearch+'|'+replaceSearchString
                var searchRegExp=(fullRegExp,'i')
                var searchCheck=postsResult.value.search(searchRegExp)
                console.log(searchCheck)
            })
    
        })
    }
}