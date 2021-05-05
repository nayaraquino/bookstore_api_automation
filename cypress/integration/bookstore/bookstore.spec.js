/// <reference types="cypress" />
import assertions from '../../support/api/assertions'
import req from '../../support/api/requests'


context('BookStore', () => {
    it('Get all books registred', () => {
        req.getBooks().then(getBooksResponse => {
            assertions.shouldHaveStatus(getBooksResponse, 200)
        })
    });

    it('Register all books', () => {
        req.postNewBook().then(postNewBookResponse => {
            assertions.shouldHaveStatus(postNewBookResponse, 201)
        })
    });

    it('Remove all book', () => {
        req.deleteAllBooks().then(deleteAllBooksResponse => {
            assertions.shouldHaveStatus(deleteAllBooksResponse, 204)
        })
    });

    it('Get one book', () => {
        req.getOneBook().then(getOneBookResponse => {
            assertions.shouldHaveStatus(getOneBookResponse, 200)
        })
    });

    it('Remove a book', () => {
        req.deleteBook().then(deleteBookResponse => {
            assertions.shouldHaveStatus(deleteBookResponse, 204)
        })
    });

    it('Update ISBN on the books', () => {
        req.putBook().then(putBookResponse => {
            assertions.shouldHaveStatus(putBookResponse, 201)
        })
    });
});