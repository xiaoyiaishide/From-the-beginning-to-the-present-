function A(argument) {
  this.colors=["red","blue","green"];
}
A.prototype.colors=["red","blue","green"];

  function a(argument) {
  }
  a.prototype=new A();
  var a1=new a();
  a1.colors.push("black");
