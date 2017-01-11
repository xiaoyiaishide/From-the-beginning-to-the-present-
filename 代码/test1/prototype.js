function A() {
  this.flag=true;
}
A.prototype.getFlag=function() {
  // body...
  return this.flag;
}
function B() {
  // body...
  this.flag=false;
}
B.prototype.getFlag=function(argument) {
  // body...
  return this.flag;
}
B.prototype=new A()
var AB=new B();
alert(B.getFlag());
