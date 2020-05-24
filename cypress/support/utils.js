const isElementVisible = (locator) => {
    cy.get(locator).should('be.visible')
};

export {isElementVisible}