const Directory = require('../../main/Directory.js');

describe("MOVE tests", function() {
    xit("Move food/fruit/apple directy1", function() {
        //TODO: test started to fail, need to investigate
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
        dir.create('food/fruit/apple');
        dir.create('food/fruit/carrot');
        dir.move('food/fruit/carrot', 'food/veggie');

        expect(resultMap).toEqual(dir.getDirectoryMap());
    });

    it("Move food/fruit/apple directy2", function() {
        const resultMap = {
            food: {
                fruit: {
                    apple: {
                        red: {}
                    }
                },
                veggie: {}
            }
        };

        const dir = new Directory();
        dir.create('food/fruit/apple');
        dir.create('food/veggie/red');
        dir.move('food/veggie/red', 'food/fruit/apple');

        expect(resultMap).toEqual(dir.getDirectoryMap());
    });

    it("Move food/fruit/apple directy3", function() {
        const resultMap = {
            meal: {
                fruit: {
                    apple: {}
                }
            }
        };

        const dir = new Directory();
        dir.create('food/fruit/apple');
        dir.move('food', 'meal');

        expect(resultMap).toEqual(dir.getDirectoryMap());
    });
});