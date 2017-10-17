"use strict";

// argument orjects no longer bound

var add = function add(a, b) {
    return a + b;
};

console.log(add(4, 5));

//this keyword - no longer bound

var user = {
    name: "Omer",
    cities: ["istanbul", 'izmir', 'antalya'],

    printPlacesLived: function printPlacesLived() {
        var _this = this;

        var cityMessages = this.cities.map(function (city) {
            return _this.name + ' has live in ' + city + '!';
        });
        return cityMessages;

        this.cities.forEach(function (city) {
            console.log(_this.name + 'has lived in ' + city);
        });
    }
};

console.log(user.printPlacesLived());

//challenge area

var multiplier = {
    // numbers - array of numbers
    // multiplyBy - single number 

    numbers: [20, 30, 10],
    multiplyBy: 3,
    multiply: function multiply() {
        var _this2 = this;

        return this.numbers.map(function (number) {
            return number * _this2.multiplyBy;
        });
    }
};

console.log(multiplier.multiply());
