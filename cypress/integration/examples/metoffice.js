describe('Metoffice Page', () => {
    it('Verify The Title Of The Page positive Test', () => {
        
        cy.visit('https://www.metoffice.gov.uk/')
        cy.title().should('eq','Weather and climate change - Met Office')
        cy.get("#gdpr-ok-button").click({force: true})
        cy.get("#location-search-input").type("exeter").click()
        cy.get('#location-search-submit > .icon').click()
        cy.title().should('eq','Exeter (Devon) weather - Met Office')
        cy.get('#btnDetailedView').click()
        cy.url().should("include","/weather/forecast/gcj2x8gt4#?date=2020-09-04")
        // cy.wait(3000)
        // cy.get('#btnDetailedView')
        cy.wait(3000)
        cy.get('#btnDetailedView').click()
        cy.contains("Today")
        
      
    })

  //   it('Verify The Title Of The Page Negitive Test', () => {
        
  //     cy.visit('https://www.metoffice.gov.uk/')
  //     cy.title().should('eq','Met Office')
  //   expect(true).to.equal(true)
  // })
  })