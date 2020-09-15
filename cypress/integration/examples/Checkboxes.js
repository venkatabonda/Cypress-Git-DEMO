/// <reference types ="cypress"  />

describe('Checkbox Page', () => {
    it('Verify The checkbox functionality Test', () => {
        cy.visit('http://demo.automationtesting.in/Register.html')
        cy.get('#checkbox1').check().should('be.checked').and('have.value','Cricket')
        cy.get('#checkbox2').check().should('be.checked').and('have.value','Movies')

        // to uncheck the check box
cy.get('#checkbox1').uncheck().should('not.be.checked')

// to selecct multiple checkboxes at same time
cy.get('input[type=checkbox]').check(['Movies','Hockey'])
// type is same as commontype for all checkboxes, add the value to check
    
    
    })

})