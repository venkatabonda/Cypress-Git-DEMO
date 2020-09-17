/// <reference types ="cypress"  />

describe('Dates Page', () => {
    it('Verify The dates functionality Test', function() {
     
        cy.visit('https://phptravels.net/')
        cy.get("#cookyGotItBtnBox").click({force: true})
        cy.get('.select2-input').type('london')
        cy.get('.select2-input').click()

     })
})