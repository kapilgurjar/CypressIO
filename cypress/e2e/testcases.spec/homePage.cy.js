const loginpage = require('../../pageObjects/loginpage');
const homePage = require('../../pageObjects/HomePage');
//const { contains } = require('cypress/types/jquery');
let userdata;
describe('login test cases ',()=>{
    

    beforeEach(()=>{
        loginpage.openURl()
        cy.log("URL open")
    });
    before(()=>{
        cy.fixture('login.json').then(data=>{
            userdata=data;
    });
})
    
    it.only('Selecting macbook from list',()=>{
        cy.log("User id and password entered")
        homePage.mouseHoverOnDeskTop();
        homePage.clickOnMacBook();
        homePage.getAllLinkText();
    });
});