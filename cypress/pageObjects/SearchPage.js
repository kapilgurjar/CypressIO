import BasePage from "./BasePage";

class SearchPage extends BasePage{

    get searchIcon(){return cy.get('img[ng-hide=MainSearchIconClass]');}
    get searchDropDown(){ return cy.get('.searchbar-first-screen > :nth-child(1) > .row > .input-boxes > label > .search-for');}
    get mapTextBox(){ return cy.get('#smart-search');}
    get searchButton(){return cy.get('.locate-parcel-btn');}
    get serverErrorMsg(){return cy.get('body > div:nth-child(75)')}
    get ContinueButton() {return cy.get('#ui-id-12 > div > div:nth-child(3) > button.basic-button.cancel.ng-binding')}
    clickOnSearchIcon(){

    this.searchIcon.click();
    
    }

    selectValueFromDropDown(dropdownValue){
        this.searchDropDown.select('Map Layers').should('have.value','string:Map Layers')
    }
    enterDataInMapTextBox(location){
       this.mapTextBox.type(location)
    }

    clickOnSearchButton(){
       this.searchButton.click(); 
    }

    // 


    clickOnContinueButton(){
        cy.wait(40000)
        //this.serverErrorMsg.then(($btn)=>{
            // if (cy.contains('Continue').should("be.visible")) {

            //     cy.contains('Continue').click();
               
            //   } else {
                 
            //   }

            cy.get('[aria-describedby="ui-id-12"] > .ui-dialog-titlebar > .ui-button',{force: true}).click()
            
    }

    verifyMapSearchResult(){
        cy.contains('');
    }


}

module.exports = new SearchPage();

