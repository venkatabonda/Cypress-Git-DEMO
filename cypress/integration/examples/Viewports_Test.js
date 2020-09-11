/// <reference types ="cypress"  />

describe('Open in responsive sizes', () => {

    before(()=>{
        console.log('running my tests')
    })

    beforeEach(()=>{
        cy.visit("https://www.google.com/")
    })
    it('open in iphone6', () => {
        cy.viewport('iphone-6')
        cy.screenshot()
        cy.wait(3000)
    })
    it('open in iphone-xr', () => {
        cy.viewport('iphone-xr')
        cy.screenshot()
        cy.wait(3000)
    })
    it('open in samsung-s10', () => {
        cy.viewport('samsung-s10')
        cy.screenshot()
        cy.wait(3000)
    })
    it('open in macbook-15', () => {
        cy.viewport(550, 750)
        cy.screenshot()
        cy.wait(3000)
    })

})