const Directory = require('../../main/Directory.js');

describe("DELETE tests", function() {
    it("Delete food/fruit/apple directy1", function() {
        const resultMap = {
            food: {
                veggie: {
                    peas: {}
                }
            }
        };

        const dir = new Directory();
        dir.create('food/veggie/peas');
        dir.create('food/veggie/carrots');
        dir.delete('food/veggie/carrots');

        expect(resultMap).toEqual(dir.getDirectoryMap());
    });

    it("Delete food/fruit/apple directy2", function() {
        const resultMap = {
            food: {}
        };

        const dir = new Directory();
        dir.create('food/veggie/peas');
        dir.create('food/veggie/carrots');
        dir.delete('food/veggie');

        expect(resultMap).toEqual(dir.getDirectoryMap());
    });

    it("Delete food/fruit/apple directy3", function() {
        const resultMap = {};

        const dir = new Directory();
        dir.create('food/veggie/peas');
        dir.create('food/veggie/carrots');
        dir.delete('food');

        expect(resultMap).toEqual(dir.getDirectoryMap());
    });
});