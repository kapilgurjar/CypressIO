const loginpage = require('../../pageObjects/loginpage');
describe('Dom command ',()=>{

    it('---TC01---',()=>{

        cy.visit('https://naveenautomationlabs.com/opencart/')
        //cy.get('div.image').first().click();
       // cy.get('div.image').last().click();
      // cy.get('div.image').eq(2).click();
        //cy.contains('MacBook').click();
       // cy.get('div.caption').find('h4').find('a');
       console.log('text user')
        cy.get('div.caption').find('h4').each(($ele) => {
           const abd= $ele.find('a').text();
           cy.log(abd);
           if(abd.includes('iPhone')){
            cy.log('i am inside if block')
            //$ele.find('a').on('click')
            cy.wrap($ele).find('a').click({force:true})
           } 
        });

       //cy.verifyProductPrice();
        loginpage.getPrice().then($ele=>{
           const price = $ele.text();
           cy.log("procudt price is "+price)
           assert.equal(price,'$123.20');
        })

      // cy.log('price is equal to '+ price)

    

    //     cy.get('li>h2').then($ele=>{
    //        const price=$ele.text();
    //         cy.log(price)
    //         //cy.wrap($ele).should("have.text",'$123.20')
    //         assert.equal(price,'$123.20');
    //     })
    })

})