

describe('File upload', () => {

    it('Verify file upload functionality ', () => {
        
      cy.visit('http://automationpractice.com/index.php?controller=contact')
      const yourFixturePath = 'venkata.JPG'; // the file to be uploaded, from the cypress/fixtures/ directory
cy.get('#fileUpload').attachFile(yourFixturePath);
      

    })

    it('Verify drag and drop file upload functionality ', () => {
        
        cy.visit('https://css-tricks.com/examples/DragAndDropFileUploading/')
        const yourFixturePath = 'venkata.JPG'; // the file to be uploaded, from the cypress/fixtures/ directory
  cy.get('#file').attachFile(yourFixturePath);
  cy.get('.box__success').should('contain.text','Done!')   // assertion
        
  
      })

      it('Verify Multiple file uploads functionality ', () => {
        
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
        const yourFixturePath1 = 'venkata.JPG'; // the file to be uploaded, from the cypress/fixtures/ directory
        const yourFixturePath2 = 'example.json';
        const yourFixturePath3 = 'users.json';
  cy.get('#filesToUpload')
  .attachFile(yourFixturePath1)
  .attachFile(yourFixturePath2)
  .attachFile(yourFixturePath3)
  cy.get('p:nth-child(6)>strong').should('contain.text','Files You Selected:')   // assertion
        
  
      })

      it('Chnage the file name while uploading ', () => {
        
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
        const yourFixturePath1 = 'venkata.JPG'; // the file to be uploaded, from the cypress/fixtures/ directory

  cy.get('#filesToUpload').attachFile({ filePath: yourFixturePath1, fileName: 'Ven.json' })

  cy.get('p:nth-child(6)>strong').should('contain.text','Files You Selected:')   // assertion
        
  
      })

})