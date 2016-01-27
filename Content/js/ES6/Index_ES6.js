describe('the class keyword', function () {
    it('can create a class', function () {

        class Employee {

            constructor(name) {
                this._name = name;
            }

            getName() {
                return this._name;
            }

        }

        let e1 = new Employee('Paulo');

        expect(e1.getName()).toBe('Paulo');

    });

});