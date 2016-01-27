"use strict";
describe('the class keyword', function() {
  it('can create a class', function() {
    var Employee = function Employee(name) {
      this._name = name;
    };
    ($traceurRuntime.createClass)(Employee, {getName: function() {
        return this._name;
      }}, {});
    var e1 = new Employee('Paulo');
    expect(e1.getName()).toBe('Paulo');
  });
});

//# sourceMappingURL=Index_ES6.js.map
