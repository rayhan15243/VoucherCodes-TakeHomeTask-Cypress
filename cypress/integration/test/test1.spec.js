describe("VoucherCodes Test Engineer Task", function(){

    it('Search for offers in Kentish Town', function() {
        cy.visit("https://www.vouchercodes.co.uk/")
        cy.url().should('eq', 'https://www.vouchercodes.co.uk/')
        cy.get('[data-ga-action="Restaurant"]')
        .contains('Food')
        .click()
        cy.url().should('eq', 'https://www.vouchercodes.co.uk/restaurant-vouchers.html')
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

  it('Assert search query in "Start searching" search bar ', function() {
    
    cy.get('[placeholder="Start searching"]')
    .type('Nandos')
    .should('have.value', 'Nandoes')
    .type('{enter}')
    

})




})