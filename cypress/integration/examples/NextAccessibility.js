/// <reference types ="cypress"  />
describe('Next shopping page', () => {

    it('Verify file upload functionality ', () => {
        
      cy.visit('https://www.next.co.uk/')
      cy.injectAxe();
      cy.title().should('eq','Next Official Site: Online Fashion, Kids Clothes & Homeware')
     // cy.get("#gdpr-ok-button").click({force: true})
      cy.get("#NI11").click({force: true})  // click on sports
      cy.title().should('eq','Sportswear | Gym Clothing | Next Official Site')
     // cy.get('.module-product-title').should('contains,text','Shop By Gender')
      cy.get('.carousel-card-img-product').click
      cy.checkA11y();
            cy.get('ResultHeader').should('contains.text','Men"s Sportswear')

        
      

    })
})