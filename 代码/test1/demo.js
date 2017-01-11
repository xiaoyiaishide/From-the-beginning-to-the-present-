function bubbleSort(arr) {
  var tmp=0;
  if(arr.length<1){return arr;}
  for (var i = 0; i < arr.length; i++) {
    for (var j = i; j < arr.length; j++) {
      if(arr[j]>arr[j+1]){
        tmp=arr[j];
        arr[j]=arr[j+1];
        arr[j+1]= tmp;
      }
    }
  }
  return arr;
}

for(var i = 0;i<5;i++){
  setTimeout(function() {
    console.log(i);
  },500);
}

function quchong(arr) {
  if(toString.call(arr)!=='[object Array]'){
    debugger;
  }else{
    var arr1 = [];
    for(var i = 0;i<arr.length;i++){
      debugger
      if(arr1.indexOf(arr[i])===-1){
        arr1.push(arr[i]);
      }
    }
  }
  return arr1;
}

function Person(name,age) {
  this.name = name;
  this.age = age;
}
var ly = new Person('male',26);
Person.prototype.sayName = function() {
  return this.name;
}
var ly1 = new Person('female',27);



//红皮书面向对象
//1、
var person = new Object()
person.name = 'a';
person.age = 1;
person.sayName = function() {
  alert(this.name);
}

Object.defineProperty(person,'height',{
  //可选四个描述对象行为的数据属性:configurable、enumberable、writable、value前三个为boolean值。
  value: 175
})