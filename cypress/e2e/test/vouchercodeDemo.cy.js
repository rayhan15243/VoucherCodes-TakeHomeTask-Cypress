// import class Offers
import { Offers } from "../page-objects/offers"

// initilise Offers function in order to access objects
const offers = new Offers()



describe("VoucherCodes Test Engineer Task Demo", function(){

    // A test that passes.
    it('Search for offers in London', function() {
        // baseUrl, see cypress.json for the full URL.
        cy.visit("/")

        // Asserts current url.
        cy.url().should('eq', 'https://www.vouchercodes.co.uk/')

        // Click and Assert View All Restaurants Link
        offers.clickViewAllRestaurants()

        // Asserts current url after clicking the 'View All Restaurants' link
        cy.url().should('eq', 'https://www.vouchercodes.co.uk/restaurant-vouchers.html')

        // Type and Assert Location textbox
        offers.enterLocation()

        // Select and Assert Day selected
        offers.selectDay()

        // Select and Asserts Number of people selected
        offers.selectNumberOfPeople()

        // Asserts and Click Find Restaurants Vouchers button
        offers.clickRestaurantVoucher()
  })

    // A test that fails. 
    it('Find "ASOS" & "Samsung" in Trending List', function() { 

        // Click and Assert Trending
        offers.clickTrending()

        // Find 'ASOS' and 'Samsung'
        offers.findTrendingMerchantName()

})
})