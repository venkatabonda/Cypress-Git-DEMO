/// <reference types ="cypress"  />

describe('DemoLogin Page', () => {
    it('Verify The Title Of The Page positive Test', () => {
        
      cy.visit('https://opensource-demo.orangehrmlive.com/index.php/auth/validateCredentials')
      cy.title().should('eq','OrangeHRM')
      cy.get("#divUsername").type("Admin")
      cy.get("#txtPassword").type("admin123")
      cy.get('#btnLogin').click()
      cy.contains('welcome')
      cy.get('#menu_pim_viewMyDetails > b').click()
      cy.contains('Personal Details')
    })

})