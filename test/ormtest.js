var orm = require("orm");


describe('TopAPItest', function () {
    describe('Post', function () {
        it.skip('#extend() ', function () {
            var a = TopAPI.PostAPI();
            a.should.have.ownProperty('name');
            a.should.have.ownProperty('age');
        })
    })
})