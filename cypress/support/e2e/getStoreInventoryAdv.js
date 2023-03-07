describe('PetStore API Testing - Store Inventory - GET', () => {

    beforeEach(() => {
        // request to URL
        cy.request('/store/inventory').as('getInventory');
    })

    it('Validate Status Code should be 200', () => {
        // assertion
        cy.get('@getInventory').then(inventory => {
            expect(inventory.status).to.equal(200);
        })
    })
})