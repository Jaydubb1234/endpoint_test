const Directory = require('../../main/Directory.js');

describe("CREATE tests", function() {
    it("Create food/fruit/apple directy1", function() {
        const resultMap = {
            food: {
                fruit: {
                    apple: {}
                }
            }
        };

        const dir = new Directory();
        dir.create('food');
        dir.create('food/fruit');
        dir.create('food/fruit/apple');

        expect(resultMap).toEqual(dir.getDirectoryMap());
    });

    it("Create food/fruit/apple directy2", function() {
        const resultMap = {
            food: {
                fruit: {
                    apple: {}
                }
            }
        };

        const dir = new Directory();
        dir.create('food');
        dir.create('food/fruit/apple');

        expect(resultMap).toEqual(dir.getDirectoryMap());
    });

    it("Create food/fruit/apple directy3", function() {
        const resultMap = {
            food: {
                fruit: {
                    apple: {}
                }
            }
        };

        const dir = new Directory();
        dir.create('food');
        dir.create('food/fruit/apple');

        expect(resultMap).toEqual(dir.getDirectoryMap());
    });

    it("Create food with multiple directy4", function() {
        const resultMap = {
            food: {
                fruit: {
                    apple: {}
                },
                veggie: {
                    carrot: {}
                }
            }
        };

        const dir = new Directory();
        dir.create('food');
        dir.create('food/fruit/apple');
        dir.create('food/veggie/carrot');

        expect(resultMap).toEqual(dir.getDirectoryMap());
    });
});