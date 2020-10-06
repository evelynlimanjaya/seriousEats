var sectionTitle=require('../testAssets/sectionTitle')


module.exports=(browser)=>{
    browser
            .api.elements('xpath','//*[@id="featured"]//*[@class="module"]',result=>{
                var cardAmount=result.value.length
                if(cardAmount===3){
                    console.log('Featured Recipes card amount is correct. Result:',cardAmount)
                }
                else{
                    console.log('Featured Recipes card amount is incorrect. Result:',cardAmount)
                }
            })
        for(let i=0;i<8;i++){
            browser
                .api.elements('xpath',`(//section[@class="block block-primary block-no-nav"])[${i+1}]//article`,result=>{
                    var cardAmount=result.value.length
                    if(cardAmount===8){
                        console.log(sectionTitle[i],'card amount is correct. Result:',cardAmount)
                    }
                    else{
                        console.log(sectionTitle[i],'card amount is incorrect. Result:',cardAmount)
                    }
                })
        }
}