/// <reference types="Cypress" />

import { isElementVisible } from "../../support/utils";

const webSiteTitle = 'Home | Cypress Hill | Official Website'

describe('Test of DuckDuckGo searching', () => {
    before(() => {
        cy.visit('');
    })     
    context('When page is initially loaded', () => {               
        it('Search input is available', () => {            
            isElementVisible('#search_form_homepage')                        
        });
    context('When user enter text to search input field', () => {
        it('Correct text is displayed in input field', () => {
            cy.get('#search_form_homepage').type(textToSearch)
            cy.get('input[name="q"]').should('have.value', textToSearch)            
        });
        it('Search autocomplete list is displayed', () => {
            isElementVisible('div .search__autocomplete')            
        });
    });
    context('When user clicks on search button', () => {
        it('Search results should contain expected website title', () => {
            cy.get('#search_button_homepage').click()                                    
            cy.get('.result__title .result__a').contains(webSiteTitle)                        
        });
    });
    context('When user clicks on first result link', () => {
        it('Landing page should be opened with expected image', () => {            
            cy.get('.result__title .result__a').contains(webSiteTitle).click()                    
            isElementVisible('img[alt="Cypress Hill Logo"]')            
        });
    });
});

});
