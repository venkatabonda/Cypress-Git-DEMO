/// <reference types ="cypress"  />

describe('Aceesibility testing', () => {
    it('Verify The Accessibility testing', () => {
        
      cy.visit('https://www.gov.uk/book-driving-test')
      cy.injectAxe();
    //  // cy.title().should('eq','BBC - Home')
    //   cy.checkA11y('.global-bar-message')
   
    // })
    // it(testName, () => {
    //     cy.visit(route);
    //     cy.injectAxe();
        
        cy.get('.cypress-wrapper').each((element, index) => {
          cy.checkA11y(
            '.cypress-wrapper',
            {
              runOnly: {
                type: 'tag',
                values: ['wcag2aa'],
              },
            }
          );
        });
      });
    });

