/// <reference types ="cypress"  />

describe('Dropdown Page', () => {
    it('Verify The dropdown functionality Test', () => {
        
      cy.visit('https://www.orangehrm.com/orangehrm-30-day-trial/')
  //cy.title().should('eq','Candidate log in')
      cy.get("#Form_submitForm_Country").select("Angola")
      .should("have.value","Angola")

      cy.get("#Form_submitForm_Industry").select("Healthcare")
      .should("have.value","health")
    
    })

    
        // it('Verify The dropdown functionality Test 2', () => {
            
        //   cy.visit('https://www.google.com')
        //   cy.get("[name='q']").type("cypress testing")
        //   cy.get('.erkvQe li span').contains('cypress testing').click()
        
        // })

        
            it('Verify The static dropdown functionality Test for skills', function() {
                
              cy.visit('http://demo.automationtesting.in/Register.html')
         
              cy.get("#Skills").select("Android")
              .should("have.value","Android")
            
            })

            
            it('Verify The multiselect dropdown functionality Test for language', function() {
           
                cy.get("#msdd")
 //cy.wait(2000)
                cy.select('.ui-corner-all').contains('English').click()
                //.select('.ui-corner-all').contains('Japanese').click()
 
              
              })
    

})