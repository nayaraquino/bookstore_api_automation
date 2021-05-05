class Assertions {
    
    shouldHaveStatus(response, status){
        expect(response.status).to.eq(status)
    }
}

export default new Assertions();