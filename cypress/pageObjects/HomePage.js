import BasePage from "./BasePage";
class HomePage extends BasePage{

get desktop(){return cy.get('#menu > div.collapse.navbar-collapse.navbar-ex1-collapse > ul > li:nth-child(1) > a')}
get macBook(){return cy.get('#menu > div.collapse.navbar-collapse.navbar-ex1-collapse > ul > li:nth-child(1) > div > div > ul > li:nth-child(2) > a')}
get allLink(){return cy.get('#column-left > div.list-group')}

mouseHoverOnDeskTop(){
    this.desktop.trigger('mouseover')
}
clickOnMacBook(){
    this.macBook.click({force:true})
}

getAllLinkText(){
    this.allLink.find('a').each(($el,index,$list)=>{
        const avc = $el
        .text()
       cy.log(avc)
    })
    
}
}

module.exports = new HomePage();

