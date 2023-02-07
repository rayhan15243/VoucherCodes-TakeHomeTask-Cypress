// Class for offers page object

export class Offers {

    view_all_restaurant_link = '[data-qa="el:restaurantVouchersLink"]'
    location_box = '[placeholder="Town or postcode"]'
    day_drop_down = '#day-select'
    number_of_people_drop_down = '#people-select'
    restaurant_voucher_button = '[data-qa="el:findRestaurantsVoucherButton"]'
    trending_link = '#trending-dialog'
    trending_merchant_name_link = '[data-qa="el:trendingMerchant"]'

    clickViewAllRestaurants() {
        cy.get(this.view_all_restaurant_link)
        .click()
        .contains('View all Restaurants')
    }

    enterLocation() {
        cy.get(this.location_box)
        .type('London')
        .should('have.value', 'London')
    }

    selectDay() {
        cy.get(this.day_drop_down)
        .select('Today')
        .contains('Today')
    }

    selectNumberOfPeople() {
        cy.get(this.number_of_people_drop_down)
        .select('5')
        .contains('5')
    }

    clickRestaurantVoucher() {
        cy.get(this.restaurant_voucher_button)
        .contains('Find restaurants vouchers')
        .click()
    }

    clickTrending(){
        cy.get(this.trending_link)
        .contains('Trending')
        .click()
    }

    findTrendingMerchantName() {
        cy.get(this.trending_merchant_name_link)
        .contains('ASOS')
        .contains('Samsung')
    }



}