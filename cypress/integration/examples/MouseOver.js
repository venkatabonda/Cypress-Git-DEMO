/// <reference types ="cypress"  />

describe('Click on signup test', () => {

    it('Verify file upload functionality ', () => {
        
      cy.visit('https://www.spicejet.com//')
      cy.injectAxe();
      cy.title().should('eq','SpiceJet - Flight Booking for Domestic and International, Cheap Air Tickets')
      cy.contains("LOGIN/SIGNUP").trigger("mouseover")
      cy.contains("SpiceClub Members").trigger("mouseover")
      cy.contains("Signup").click()
      cy.checkA11y();
             })


   it('Verify file upload functionality ', () => {
        
         cy.visit('http://automationpractice.com/index.php')
                cy.title().should('eq','My Store')
                cy.get(".ajax_add_to_cart_button").first().click()
                cy.get(".cross").click()
                cy.wait(3000)
                cy.contains("Cart").trigger("#button_order_cart").click()
                 cy.url().should('include','controller=order')
             
              })
})