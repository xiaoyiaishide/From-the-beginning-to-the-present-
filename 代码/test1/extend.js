function supperType() {
  this.property = true;
}
supperType.getProperty = function () {
  return this.property;
}
function subType() {
  this.property = false;
}
subType.prototype = new supperType();
subType.getProperty = function () {
  this.property = false;
}

function test1(argument) {
  var s = 1;
}
function test2(argument) {
  console.log(s);
}