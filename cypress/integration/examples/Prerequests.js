



describe('Prerequests', ()=>{

    beforeEach(()=>{
        cy.visit('http://automationpractice.com/')
        cy.login('naveenanimation3@gmail.com','Test@1234')
        cy.injectAxe()
})
    it('Verify The login functionality with prerequests', () => {

        // cy.visit('http://automationpractice.com/')
        // cy.login('naveenanimation3@gmail.com','Test@1234')
        cy.url().should('includes','controller=authentication')
        cy.get('.icon-home').click()
        cy.url().should('includes','index.php')
        cy.checkA11y();
        

    })

    it('Verify The search functionality on home page', ()=> {
        cy.get('.icon-home').click()
        cy.search('Dress')
        cy.get('.lighter').should('contain,text','Dress')

    });

})