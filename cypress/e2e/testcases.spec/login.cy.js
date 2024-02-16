//import 'cypress-iframe'
//const { property } = require('cypress/types/lodash');
const loginpage = require('../../pageObjects/loginpage');
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
    
    it.only('Registration for new user',()=>{
        cy.log("User id and password entered")
        loginpage.clickOnSignButton()
        cy.log("Clicked on sign in button")
        loginpage.fillRegistrationForm(userdata.FirstName,userdata.LastName,userdata.Telephone,userdata.Password,userdata.PasswordConfirm);
        loginpage.verifyAccountCreationMessage();
    });

    it.only('login with valid user',()=>{
        loginpage.clickOnLoginButton();
        loginpage.enterUserNameAndPassword(userdata.userName,userdata.Password);

    })

    it('login with empty username and password',()=>{
        loginpage.clickOnSignButton()
        //cy.wait(40000)
        cy.get('input[placeholder="Password"]').invoke('prop','validationMessage').should('contain','Please fill out this field.')

    })

});