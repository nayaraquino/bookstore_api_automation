class Assertions {

    shouldHaveStatus(response, status) {
        expect(response.status).to.eq(status)
    }

    shouldDuractionBeFast(response) {
        expect(response.duration, 'response duraction').lt(900)
    }
}

export default new Assertions();