const person = {
    fullName : function(city, country) {
        return this.firstName + " " + this.lastName + ", " + city + ", " + country;
    }
}

var person1 = {
    firstName: "John",
    lastName: "Doe"
}

person.fullName.apply(person1, ["Oslo", "Norway"]);

console.log(person.fullName.apply(person1, ["Oslo", "Norway"]))

/**
In JavaScript strict mode, if the first argument of the apply() method is not an object,
it becomes the owner (object) of the invoked function.

In "non-strict" mode, it becomes the global object.
 */