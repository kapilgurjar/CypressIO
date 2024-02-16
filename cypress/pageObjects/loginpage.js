import BasePage from "./BasePage";
class loginpage extends BasePage{

    get fName() { return cy.get('#input-firstname'); }
    get lName() { return cy.get('#input-lastname'); }
    get Email(){return cy.get('#input-email')}
    get telePhone(){return cy.get('#input-telephone')}
    get passWord(){return cy.get('#input-password')}
    get passConfirm(){return cy.get('#input-confirm')}
    get privacyPolicyCheckBox(){return cy.get('#content > form > div > div > input[type=checkbox]:nth-child(2)')}
    get continueButton(){return cy.get('#content > form > div > div > input.btn.btn-primary')}
    get myAccount(){return cy.get('#top-links > ul > li.dropdown > a > span.hidden-xs.hidden-sm.hidden-md')}
    get register(){return cy.get('#top-links > ul > li.dropdown.open > ul > li:nth-child(1) > a')}
    get FailedMsg(){ return cy.get('#content > h1') }
    get userName(){return cy.get("#top-links > ul > li.dropdown.open > ul > li:nth-child(2) > a")}

   
    openURl(){
        cy.visit('/opencart');
    }

    enterUserNameAndPassword(username,pass){
        
        this.Email.type(username);
        cy.wait(4000)
        this.passWord.type(pass)
    }

    clickOnSignButton(){
        this.myAccount.click({ force: true });
        this.register.click({ force: true });
    }

    clickOnLoginButton(){
        this.myAccount.click({ force: true });
        this.userName.click({ force: true });
    }

    verifyClientLogo(){
       
        this.mainClientLogo.should("be.visible")
    }

    verifyFailedMsgOnLoginScreen(msg){
        this.FailedMsg.contains(msg)
    }

    fillRegistrationForm(FirstName,LastName,Phone,Password,ConfirmPassword){
        let num = Math.floor((Math.random() * 100) + 1);
        let text1 = "kapil.kumar";
        let newText=text1.concat(" ",num)
        let email=newText.concat(" ","@gmail.com");
        this.fName.type(FirstName)
        this.lName.type(LastName)
        this.Email.type(email)
        this.telePhone.type(Phone)
        this.passWord.type(Password)
        this.passConfirm.type(ConfirmPassword)
        this.privacyPolicyCheckBox.click();
        this.continueButton.click();
    }

    verifyAccountCreationMessage(){
        this.FailedMsg.should('have.text','Your Account Has Been Created!');
    }
   
}
module.exports = new loginpage();