/// <reference types="cypress" />
import assertions from '../../support/api/assertions'
import req from '../../support/api/requests'


context('Account', () => {
    it('Authorize user', () => {
        req.postAuth().then(postAuthResponse => {
            assertions.shouldHaveStatus(postAuthResponse, 200)
            assertions.shouldDuractionBeFast(postAuthResponse)
        })
    });

    it('Generate Token', () => {
        req.getGenerateToken().then(getGenerateTokenResponse => {
            assertions.shouldHaveStatus(getGenerateTokenResponse, 200)
            assertions.shouldDuractionBeFast(getGenerateTokenResponse)
        })
    });

    it('Create a user', () => {
        req.postNewUser().then(postNewUserResponse => {
            assertions.shouldHaveStatus(postNewUserResponse, 201)
            assertions.shouldDuractionBeFast(postNewUserResponse)
        })
    });

    it('Delete user', () => {
        req.deleteUser().then(deleteUserResponse => {
            assertions.shouldHaveStatus(deleteUserResponse, 200)
            assertions.shouldDuractionBeFast(deleteUserResponse)
        })
    });

    it('Get user', () => {
        req.getUser().then(getUserResponse => {
            assertions.shouldHaveStatus(getUserResponse, 200)
            assertions.shouldDuractionBeFast(getUserResponse)
        })
    });
});