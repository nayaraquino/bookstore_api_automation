class Requests {

    // Account
    getBooks() {
        return cy.request({
            method: 'GET',
            url: 'bookstore/v1/books'
        })
    }

    postNewBook() {
        return cy.request({
            method: 'POST',
            url: 'bookstore/v1/books'
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
            url: 'bookstore/v1/books/{ISBN}'
        });
    }

    // BookStore
    postAuth() {
        return cy.request({
            method: 'POST',
            url: 'account/v1/authorized'
        });
    }

    getGenerateToken() {
        return cy.request({
            method: 'POST',
            url: 'account/v1/generatetoken'
        });
    }

    postNewUser() {
        return cy.request({
            method: 'POST',
            url: 'account/v1/user'
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