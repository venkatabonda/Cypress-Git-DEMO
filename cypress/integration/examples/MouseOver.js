/// <reference types ="cypress"  />

<<<<<<< HEAD
describe('Click on signup test', () => {

    it('Verify file upload functionality ', () => {
=======

describe('Click on signup test', () => {

    it.skip('Verify file upload functionality ', () => {
>>>>>>> 51ecdea37542f40591c578c6bc2ef2d5707d7cf6
        
      cy.visit('https://www.spicejet.com//')
      cy.injectAxe();
      cy.title().should('eq','SpiceJet - Flight Booking for Domestic and International, Cheap Air Tickets')
      cy.contains("LOGIN/SIGNUP").trigger("mouseover")
      cy.contains("SpiceClub Members").trigger("mouseover")
      cy.contains("Signup").click()
      cy.checkA11y();
             })


<<<<<<< HEAD
   it('Verify file upload functionality ', () => {
        
         cy.visit('http://automationpractice.com/index.php')
=======
   it('Verify file upload functionality', () => {
        
         cy.visit('http://automationpractice.com/index.php')
         //cy.injectAxe();
>>>>>>> 51ecdea37542f40591c578c6bc2ef2d5707d7cf6
                cy.title().should('eq','My Store')
                cy.get(".ajax_add_to_cart_button").first().click()
                cy.get(".cross").click()
                cy.wait(3000)
                cy.contains("Cart").trigger("#button_order_cart").click()
<<<<<<< HEAD
                 cy.url().should('include','controller=order')
             
              })
})
=======
                cy.url().should('include','?controller=order')
                 //cy.checkA11y();
              })

            })
>>>>>>> 51ecdea37542f40591c578c6bc2ef2d5707d7cf6
