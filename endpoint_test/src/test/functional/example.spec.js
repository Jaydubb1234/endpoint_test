const Directory = require('../../main/Directory.js');

describe("EXAMPLE tests", function() {
    it("Example food/fruit/apple directy1", function() {
        const resultMap = {
            fruits: {
                apples: {
                    fuji: {}
                }
            },
            vegetables: {},
            grains: {}
        };

        const resultStr = `fruits\n\tapples\n\t\tfuji\nvegetables\ngrains`;

        const dir = new Directory();
        dir.create('fruits');
        dir.create('vegetables');
        dir.create('grains');
        dir.create('fruits/apples');
        dir.create('fruits/apples/fuji');
        const resultList = dir.list();

        expect(resultMap).toEqual(dir.getDirectoryMap());
        expect(resultStr).toEqual(resultList);
    });

    xit("Example food/fruit/apple directy2", function() {
        //TODO: Test is failing
        const resultMap = {
            foods: {
                fruits: {
                    apples: {
                        fuji: {}
                    }
                },
                grains: {},
                vegetables: {
                    squash: {}
                }
            }
        };

        const resultStr = `foods\n\tfruits\n\t\tapples\n\t\t\tfuji\n\tgrains\n\tvegetables\n\t\tsquash`;

        const dir = new Directory();
        dir.create('fruits');
        dir.create('vegetables');
        dir.create('grains');
        dir.create('fruits/apples');
        dir.create('fruits/apples/fuji');

        dir.create('grains/squash');
        dir.move('grains/squash', 'vegetables');
        dir.create('foods');
        dir.move('grains', 'foods');
        dir.move('fruits', 'foods');
        dir.move('vegetables', 'foods');
        const resultList = dir.list();

        expect(resultMap).toEqual(dir.getDirectoryMap());
        expect(resultStr).toEqual(resultList);
    });

    xit("Create food/fruit/apple directy3", function() {
        //TODO: this test should fail since previous test failed
        const resultMap = {
            foods: {
                fruits: {},
                grains: {},
                vegetables: {
                    squash: {}
                }
            }
        };

        const resultStr = `foods\n\tfruits\n\t\tgrains\n\tvegetables\n\t\tsquash`;

        const dir = new Directory();
        dir.create('fruits');
        dir.create('vegetables');
        dir.create('grains');
        dir.create('fruits/apples');
        dir.create('fruits/apples/fuji');

        dir.create('grains/squash');
        dir.move('grains/squash', 'vegetables');
        dir.create('foods');
        dir.move('grains', 'foods');
        dir.move('fruits', 'foods');
        dir.move('vegetables', 'foods');

        dir.delete('fruits/apples'); //should not delete
        dir.delete('foods/fruits/appples');
        const resultList = dir.list();

        expect(resultMap).toEqual(dir.getDirectoryMap());
        expect(resultStr).toEqual(resultList);
    });
});