/// <reference types ="cypress"  />

describe('Metoffice Page', () => {
    it('Verify The Title Of The Page positive Test', () => {
        
      cy.visit('https://www.wikipedia.org/')
      cy.title().should('eq','Wikipedia')
      cy.get("#searchInput").type("exeter")
      cy.get('.pure-button').click()
      cy.title().should('eq','Exeter - Wikipedia')
      cy.get('.tocsection-3 > a > .toctext').click()
      cy.url().should("include","/wiki/Exeter#Prehistory")
      cy.contains("Roman times")
      cy.get('.mw-wiki-logo')
      cy.title().should("eq",">Wikipedia, the free encyclopedia")
     //   cy.wait(5000)
    // cy.get('.css-179dbdg-ConsentButton').dblclick
     //cy.get('#bbccookies-continue-button > [data-region-filter="gb"]').click
     //cy.get('.css-1knqc0l-SignIn').click
       
       // cy.get(".exhqgzu4").click 
        // cy.wait(5000)
        // cy.get("#search-input").type("exeter")  // search location
        // cy.wait(5000)
        // cy.get("div.hub-hero.hub-hero-uk section.container.location-search.no-print:nth-child(1) div.search-results-container:nth-child(3) div.location-results div.result-indented:nth-child(4) ul:nth-child(3) li:nth-child(1) > span:nth-child(1)").click // click on search button
        //cy.get("#btnDetailedView > span").click()// click on lessdetails button
        //cy.get(" #btnDetailedView").contains("More detail")



    })

  })