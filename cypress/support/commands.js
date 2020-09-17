// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
import 'cypress-file-upload';
import '@4tw/cypress-drag-drop'
// -- This is a parent command --
Cypress.Commands.add("login", (email, password) => { 
cy.get('.login').click()
cy.get('#email').type(email)
cy.get('#passwd').type(password)
cy.get('#SubmitLogin').click()

 })

 Cypress.Commands.add("search", (product) => { 
    cy.get('#search_query_top').type(product)
    cy.get("button[name='submit_search'] ").click()
    
     })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
