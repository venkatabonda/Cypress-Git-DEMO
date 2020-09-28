/// <reference types ="cypress"  />

describe('background color ', () => {
    it('Verify The background color  functionality Test', function() {
     
        cy.visit('https://www.virgintrains.co.uk/')
    // check the buytickets button background color 
    cy.get('body')
    .should('have.css', 'background-color', 'rgba(0, 0, 0, 0)')

     })

     it('Verify The background colorfor uk forecast link Buy now functionality Test', function() {
      // check the uk forcast link background color
        cy.visit('https://www.metoffice.gov.uk/')
        cy.title().should('eq','Weather and climate change - Met Office')
        cy.get("#ccc-recommended-settings").click({force: true})
    cy.get('.uk-forecast-link') // uk forcast link
    .should('have.css', 'background-color', 'rgb(42, 42, 42)')

     })
     it('Verify The background colorfor googleplay Buy now functionality Test', function() {
     
        cy.visit('https://www.metoffice.gov.uk/')
        cy.get("#ccc-recommended-settings").click({force: true})
    cy.get('.google-play-badge') // googleplay icon
    .should('have.css', 'background-color')
    .and('eq', 'rgba(0, 0, 0, 0)')

     })
})