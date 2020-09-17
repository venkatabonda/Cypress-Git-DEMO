/// <reference types ="cypress"  />

describe('Drag and drop', () => {
    it('Verify The Drag and drop functionality ', () => {
        
      cy.visit('https://www.seleniumeasy.com/test/drag-and-drop-demo.html')
      cy.get('#todrag>span:nth-child(2)').drag('#mydropzone')

    })

})