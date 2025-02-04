"use strict";
console.log("Hello World");
// @ts-ignore
function sayHello(object) {
    console.log("Heloooo... " + object.name);
    object.greet("ANshu");
}
sayHello({
    name: "Anshu",
    age: 21,
    greet: (name) => {
        console.log("Good Morning");
    }
});
;
function updateUser(updatedProps) {
    // hit the database tp update the user
}
updateUser({});
