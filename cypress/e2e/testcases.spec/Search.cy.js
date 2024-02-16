const loginpage = require('../../pageObjects/loginpage')
const searchPage = require('../../pageObjects/SearchPage')
let userdata;

describe('Search test cases ',()=>{

    // before(()=>{
    //     cy.fixture('login.json').then(data=>{
    //         userdata=data;
    // });
    beforeEach(()=>{
        cy.fixture('login.json').then(data=>{
            userdata=data;
        loginpage.openURl()
        cy.log("URL open")
        loginpage.enterUserNameAndPassword(userdata.username,userdata.pass)
        cy.log("User id and password entered")
        loginpage.clickOnSignButton()
        cy.log("Clicked on sign in button")
    }); 
})

    it('Verify map layers search with valid data',()=>{
        searchPage.clickOnContinueButton();
        searchPage.clickOnSearchIcon();
        searchPage.selectValueFromDropDown('Map Layers');
        searchPage.enterDataInMapTextBox('noth')
    })

});