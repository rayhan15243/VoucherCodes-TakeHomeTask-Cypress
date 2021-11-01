describe("VoucherCodes Test Engineer Task", function(){

    // A test that passes.
    it('Search for offers in London', function() {
        // baseUrl, see cypress.json for the full URL.
        cy.visit("/")
        // Asserts current url.
        cy.url().should('eq', 'https://www.vouchercodes.co.uk/')
        // Asserts link
        cy.get('[data-ga-action="Restaurant"]')
        .contains('Food')
        .click()
        // Asserts current url after clicking the 'Food' link
        cy.url().should('eq', 'https://www.vouchercodes.co.uk/restaurant-vouchers.html')
        cy.get('[placeholder="Town or postcode"]')
        // Type in Location 
        .type('London')
        // Asserts textbox to enter Location
        .should('have.value', 'London')
        cy.get('[name="day-select"]')
          // Select Day
        .select('Today')
        // Asserts the day selected
        .contains('Today')
        cy.get('[name="people-select"]')
         // Select number of people
        .select('5')
        // Asserts the number of people selected
        .contains('5')
        cy.get('[data-qa="el:findRestaurantsVoucherButton"]')
        // Asserts button
        .contains('Find restaurants vouchers')
        .click()
  })

  // A test that fails. 
  it('Find "ASOS" & "Apple" in Trending dropdown', function() { 
    
    // Trending dropdown
    cy.get('[data-qa="el:trendingHeader"]')
    .contains('Trending')
    .click()
    cy.get('.duration-2000')
    // Find 'ASOS'
    .contains('ASOS')
    // Find 'Apple'
    .contains('Apple')
})
})