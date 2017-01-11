// var a1=1;
// function A(argument) {
//   // body...
//   var a2=2;
//   console.log(a1);
//   function a(argument) {
//     // body...
//     var a3=3;
//     console.log(a2);
//   }
// }
// (function a() {
//   alert(1);
// })();
define(function() {
  function a() {
    alert(1);
  }
  a();
})
function transForm(str) {
  var strCopy = str.split();
  for(var i = 0;i<strCopy.length;i++){
    if(strCopy[i].charCodeAt()>=65&&strCopy[i].charCodeAt()<=90){
      debugger;
      strCopy[i] = strCopy[i].toLocaleLowerCase();
      strCopy.splice(i,0,'-');
      strCopy.length--;
    }
  }
  return strCopy.join('');
}
