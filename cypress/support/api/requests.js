class Requests {

    // Bookstore
    getBooks() {
        return cy.request({
            method: 'GET',
            url: 'bookstore/v1/books'
        })
    }

    postNewBook() {
        return cy.request({
            method: 'POST',
            url: 'bookstore/v1/books',
            body: {
                "userId": "string",
                "collectionOfIsbns": [
                  {
                    "isbn": "string"
                  }
                ]
              }
        });
    }

    deleteAllBooks() {
        return cy.request({
            method: 'DELETE',
            url: 'bookstore/v1/books'
        });
    }

    getOneBook() {
        return cy.request({
            method: 'GET',
            url: 'bookstore/v1/book'
        })
    }

    deleteBook() {
        return cy.request({
            method: 'DELETE',
            url: 'bookstore/v1/book'
        });
    }

    putBook() {
        return cy.request({
            method: 'PUT',
            url: 'bookstore/v1/books/{ISBN}',
            body: {
                "userId": "string",
                "isbn": "string"
              }
        });
    }

    // Account
    postAuth() {
        return cy.request({
            method: 'POST',
            url: 'account/v1/authorized',
            body: {
                "userName": "nayaraquino",
                "password": "N4qu1n0"
              }
        });
    }

    getGenerateToken() {
        return cy.request({
            method: 'POST',
            url: 'account/v1/generatetoken',
            body: {
                "userName": "nayaraquino",
                "password": "N4qu1n0"
              }
        });
    }

    postNewUser() {
        return cy.request({
            method: 'POST',
            url: 'account/v1/user',
            body: {
                "userName": "nayaraquino",
                "password": "N4qu1n0!"
              }
        });
    }

    deleteUser() {
        return cy.request({
            method: 'DELETE',
            url: 'account/v1/{UUID}'
        });
    }

    getUser() {
        return cy.request({
            method: 'GET',
            url: 'account/v1/{UUID}'
        });
    }


}

export default new Requests()