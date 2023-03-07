describe('PetStore API Testing - Create User - POST', () => {

    beforeEach(() => {
        // request to URL
        // add request body
        let body = {
            "id": 123,
            "username": "Fatima123",
            "firstName": "Fatima",
            "lastName": "Zza",
            "email": "fatima@mail.com",
            "password": "Pass123",
            "phone": "081234567890",
            "userStatus": 0
        }
        console.log(body)
        // request to URL
        cy.request('POST', '/user', body)
            .as('createUser');
    })

    it('Validate Status Code should be 200', () => {
        // assertion
        cy.get('@createUser').then(user => {
            expect(user.status).to.equal(200);
        })
    })
})
