/// <reference types ="cypress"  />

describe('Dates Page', () => {
    it('Verify The dates functionality Test', function() {
     
        cy.visit('https://phptravels.net/')
        cy.get("#cookyGotItBtnBox").click({force: true})
        cy.get('.select2-input').type('london')
        cy.get('.select2-input').click()
        
    // cy.get('#checkin').click
    // cy.get('#checkin').type('15-09-2020')
    // cy.get('#checkout').type('25-09-2020')
     })
})