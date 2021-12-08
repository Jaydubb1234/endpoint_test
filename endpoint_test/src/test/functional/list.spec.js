const Directory = require('../../main/Directory.js');

describe("LIST tests", function() {
    beforeEach(function() {
        spyOn(console, 'log');
    });

    it("List food/fruit/apple 1", function() {
        const resultStr = `food\n\tfruit\n\t\tapple`;

        const dir = new Directory();
        dir.create('food');
        dir.create('food/fruit');
        dir.create('food/fruit/apple');
        const listRes = dir.list();

        expect(console.log).toHaveBeenCalled();
        expect(resultStr).toEqual(listRes);
    });

    it("List food/fruit/apple 2", function() {
        const resultStr = `food\n\tfruit\n\t\tapple\n\tveggie\n\t\tcarrot`;

        const dir = new Directory();
        dir.create('food/fruit/apple');
        dir.create('food/veggie/carrot');
        const listRes = dir.list();

        expect(console.log).toHaveBeenCalled();
        expect(resultStr).toEqual(listRes);
    });
});