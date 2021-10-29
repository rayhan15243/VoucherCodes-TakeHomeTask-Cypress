describe("Pass restaurant test", function(){

    it('Search for restaurant', function() {
        cy.visit("https://www.vouchercodes.co.uk/restaurant-vouchers.html")
        cy.get('[placeholder="Town or postcode"]')
        .type('London')
        cy.get('[name="day-select"]')
        .select('Today')
        cy.get('[name="people-select"]')
        .select('5')
        cy.get('[data-qa="el:findRestaurantsVoucherButton"]')
        .click()
  })



})