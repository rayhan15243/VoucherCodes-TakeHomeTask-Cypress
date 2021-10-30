describe("VoucherCodes Test Engineer Task", function(){

    it('Search for offers in Kentish Town', function() {
        cy.visit("https://www.vouchercodes.co.uk/restaurant-vouchers.html")
        cy.get('[placeholder="Town or postcode"]')
        .type('Kentish Town')
        .should('have.value', 'Kentish Town')
        cy.get('[name="day-select"]')
        .select('Today')
        .contains('Today')
        cy.get('[name="people-select"]')
        .select('5')
        .contains('5')
        cy.get('[data-qa="el:findRestaurantsVoucherButton"]')
        .contains('Find restaurants vouchers')
        .click()
  })

  it('Assert offers search query', function() {
    
    cy.get('[placeholder="Town or postcode"]')
    .should('have.value', 'Kentish Town')
    cy.get('[data-qa="el:dayDropdown"]', { force: true })
    .contains('Today')
    cy.get('[name="people-select"]')
    .contains('5')
})




})