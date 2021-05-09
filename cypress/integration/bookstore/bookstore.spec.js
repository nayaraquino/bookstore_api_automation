/// <reference types="cypress" />
import assertions from '../../support/api/assertions'
import req from '../../support/api/requests'


context('BookStore', () => {
    it('Get all books registred', () => {
        req.getBooks().then(getBooksResponse => {
            assertions.shouldHaveStatus(getBooksResponse, 200)
            assertions.shouldDuractionBeFast(getBooksResponse)
        })
    });

    it('Register all books', () => {
        req.postNewBook().then(postNewBookResponse => {
            assertions.shouldHaveStatus(postNewBookResponse, 201)
            assertions.shouldDuractionBeFast(postNewBookResponse)
        })
    });

    it('Remove all book', () => {
        req.deleteAllBooks().then(deleteAllBooksResponse => {
            assertions.shouldHaveStatus(deleteAllBooksResponse, 204)
            assertions.shouldDuractionBeFast(deleteAllBooksResponse)
        })
    });

    it('Get one book', () => {
        req.getOneBook().then(getOneBookResponse => {
            assertions.shouldHaveStatus(getOneBookResponse, 200)
            assertions.shouldDuractionBeFast(getOneBookResponse)
        })
    });

    it('Remove a book', () => {
        req.deleteBook().then(deleteBookResponse => {
            assertions.shouldHaveStatus(deleteBookResponse, 204)
            assertions.shouldDuractionBeFast(deleteBookResponse)
        })
    });

    it('Update ISBN on the books', () => {
        req.putBook().then(putBookResponse => {
            assertions.shouldHaveStatus(putBookResponse, 200)
            assertions.shouldDuractionBeFast(putBookResponse)
        })
    });
});