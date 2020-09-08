/*
  EXAMPLE TASK:
    - Write an Airplane constructor that initializes `name` from an argument.
    - All airplanes built with Airplane should initialize with an `isFlying` of false.
    - Give airplanes the ability to `.takeOff()` and `.land()`:
        + If a plane takes off, its `isFlying` property is set to true.
        + If a plane lands, its `isFlying` property is set to false.
*/

// EXAMPLE SOLUTION CODE:
function Airplane(name) {
  this.name = name;
  this.isFlying = false;
}
Airplane.prototype.takeOff = function () {
  this.isFlying = true;
};
Airplane.prototype.land = function () {
  this.isFlying = false;
};


/*
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
*/

/*
  TASK 1
    - Write a Person Constructor that initializes `name` and `age` from arguments.
    - All instances of Person should initialize with an empty `stomach` array.
    - Give instances of Person the ability to `.eat("someFood")`:
        + When eating an edible, it should be pushed into the `stomach`.
        + The `eat` method should have no effect if there are 10 items in the `stomach`.
    - Give instances of Person the ability to `.poop()`:
        + When an instance poops, its `stomach` should empty.
    - Give instances of Person a method `.toString()`:
        + It should return a string with `name` and `age`. Example: "Mary, 50"
*/

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.stomach = [];
}
Person.prototype.eat = function(food){
  if (this.stomach.length < 10){
    this.stomach.push(food);
  }
}
  
Person.prototype.poop = function(){
  this.stomach = [];
}

Person.prototype.toString = function () {
  return `${this.name}, ${this.age}`;
}
/*
  TASK 2
    - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
    - All instances built with Car:
        + should initialize with an `tank` at 0
        + should initialize with an `odometer` at 0
    - Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`.
    - STRETCH: Give cars ability to `.drive(distance)`. The distance driven:
        + Should cause the `odometer` to go up.
        + Should cause the the `tank` to go down taking `milesPerGallon` into account.
    - STRETCH: A car which runs out of `fuel` while driving can't drive any more distance:
        + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
*/

function Car(model, milesPerGallon) {
  this.model = model;
  this.milesPerGallon = milesPerGallon;
  this.tank = 0;
  this.odometer = 0;
}

Car.prototype.fill = function (gallons) {
  this.tank += gallons;
}

Car.prototype.drive = function(distance){  
  if (this.tank >= distance / this.milesPerGallon){
    this.tank -= distance / this.milesPerGallon;
    this.odometer += distance;
  }else {
    this.odometer += (this.tank * this.milesPerGallon);
    this.tank = 0;
    return `I ran out of fuel at ${this.odometer} miles!`;
  }
}


/*
  TASK 3
    - Write a Baby constructor subclassing Person.
    - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
    - Besides the methods on Person.prototype, babies have the ability to `.play()`:
        + Should return a string "Playing with x", x being the favorite toy.
*/
function Baby(name, age, favoriteToy) {
  Person.call(this, name, age); // binding this to Person
  this.favoriteToy = favoriteToy; // this will be a special attribute to Baby
}

Baby.prototype = Object.create(Person.prototype);

Baby.prototype.play = function(){
  return `Playing with ${this.favoriteToy}`;
}

/* 
  In your own words explain the four principles for the "this" keyword below:
  1. The first principle of this refers to the global or console binding of this. This binding occurs by default(unless in strict mode) when this is given no other context.
  2. A second principle of this is implicit binding. Implicit binding occures when a method is called on an object using dot notation. The object to the left of the dot is implicitly bound to this in the invoked method.
  3. A third principle of this is new binding. This can be defined in context of an object constructor function using the keyword new. The constructor function creates and returns a new object which sets the context for this in its created attributes and methods.
  4. A fourth principle of this is explicit binding. This can be defined explicitly using .call(), .apply(), or .bind(). These methods are called on a function. .call() and .apply() bind this and any other arguments to and invoke the function, either by passing in one by one using .call(), or as an array using .apply() to the function they are called on. .bind() allows the function to be bound to the this object and its needed parameters and stored in a new function name to be invoked later. 
*/


///////// END OF CHALLENGE /////////
///////// END OF CHALLENGE /////////
///////// END OF CHALLENGE /////////
if (typeof exports !== 'undefined') {
  module.exports = module.exports || {}
  if (Airplane) { module.exports.Airplane = Airplane }
  if (Person) { module.exports.Person = Person }
  if (Car) { module.exports.Car = Car }
  if (Baby) { module.exports.Baby = Baby }
}
