/// <reference types="cypress" />
import assertions from '../../support/api/assertions'
import req from '../../support/api/requests'


context('Account', () => {
    it('Authorize user', () => {
        req.postAuth().then(postAuthResponse => {
            assertions.shouldHaveStatus(postAuthResponse, 201)
        })
    });

    it.only('Generate Token', () => {
        req.getGenerateToken().then(getGenerateTokenResponse => {
            assertions.shouldHaveStatus(getGenerateTokenResponse, 204)
        })
    });

    it('Create a user', () => {
        req.postNewUser().then(postNewUserResponse => {
            assertions.shouldHaveStatus(postNewUserResponse, 201)
        })
    });

    it.only('Delete user', () => {
        req.deleteUser().then(deleteUserResponse => {
            assertions.shouldHaveStatus(deleteUserResponse, 204)
        })
    });

    it.only('Get user', () => {
        req.getUser().then(getUserResponse => {
            assertions.shouldHaveStatus(getUserResponse, 200)
        })
    });
});