function Dog(name) {
  this.name = name;
  this.bark = function() {
    // body...
  }
}
Dog.prototype.age = [1];

var dog = new Dog(1);
var dog1 = new Dog(1);
