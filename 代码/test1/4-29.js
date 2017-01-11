var single = (function function_name(argument) {
  var instance;

  var Person = function() {
    return {
      name: "Tom",
      getName: function() {
        alert(this.name);
      }
    }
  }
})();
function compare(a,b) {
  return a-b;
}
function quicklySort(arr) {
  if(arr.length<=1){
    return arr;
  }
  var pivotIndex = Math.floor(arr.length/2);
  var pivot = arr.splice(pivotIndex,1)[0];
  var left = [];
  var right = [];
  for (var i = 0; i < arr.length; i++) {
    if(arr[i]<pivot){
      left.push(arr[i]);
    }else{
      right.push(arr[i]);
    }
  }
  return quicklySort(left)+[pivot]+quicklySort(right);
}


function selectionSort(arr) {
  if(arr.length<2){
    return arr;
  }

  for(var i = 0;i<arr.length;i++){
    var min = i;
    for(var j = i+1;j<arr.length;j++){
      if(arr[min]>arr[j]){
        var temp;
        temp = arr[min];
        arr[min] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

function transformStr() {
  var str='i love you'
  var s=[];
  for(var i=str.length;i>0;i--){
    s.push(str[i]);
  } 
  return s.toString().replace(',','');
} 

function Person(name,age,sayName){
  this.name = name;
  this.age = age;
  this.sayName = function() {
    alert(this.name);
  }
}


function shellSort(arr){
    var N=arr.length;
    var h=1;
    while(h<N/3){
        h=3*h+1;//设置间隔
    }
    while(h>=1){ 
        for(var i=h; i<N; i++){
            for(j=i; j>=h && arr[j]<arr[j-h]; j-=h){
                swap(arr, j, j-h);
            }
        }
        h=(h-1)/3;
    }
    return arr;
}

function swap(array, i, j){//两个数调换
    var temp =array[j];
    array[j]=array[i];
    array[i]=temp;
}

function quChong(arr) {
  var i = 0;
  var newArr = [];
  if(arr.length<2){
    return arr;
  }
  for(;i<arr.length;i++){
    if(newArr.indexOf(arr[i])===-1){
      newArr.push(arr[i])
    }
  }
  return newArr;
}

function spacicy(str) {
  return str.split('').join(' ');
}
String.prototype.spacicy = function() {
  return this.split('').join(' ');
}

function log() {
  console.log.apply(console,'app'+arguments);
}

function sum(){
  var first = arguments[0];
  if(arguments.length===2){
    return arguments[0]+arguments[1];
  }else{
    return function(second) {
      return first+second;
    }
  }
}

for (var i = 0; i < 5; i++) {
    var btn = document.createElement('button');
    btn.appendChild(document.createTextNode('Button ' + i));
    btn.addEventListener('click', function(){ console.log(i); });
    document.body.appendChild(btn);
}

var arr1 = "john".split(''); j o h n
var arr2 = arr1.reverse(); n h o j
var arr3 = "jones".split(''); j o n e s
arr2.push(arr3); n h o jj o n e s
console.log("array 1: length=" + arr1.length + " last=" + arr1.slice(-1));
                                  7                        n h o j

console.log("array 2: length=" + arr2.length + " last=" + arr2.slice(-1));
                                    16                    n h o jj o n e s


var myObject = {
   foo: "bar",
   func: function() {
   var self = this;
   console.log("outer func: this.foo = " + this.foo);
   console.log("outer func: self.foo = " + self.foo);
   (function() {
   console.log("inner func: this.foo = " + this.foo);
   console.log("inner func: self.foo = " + self.foo);
   }());
   }
};
// myObject.func();
var s = myObject.func;
s();


(function() {
  // body...
var arr1 = "john".split('');
var arr3 = "jones".split('');
arr2.push(arr3);
console.log("·array 1: length=" + arr1.length + " last=" + arr1.slice(-1));
console.log("array 2: length=" + arr2.length + " last=" + arr2.slice(-1));
})()

var a={},
  b={key:'b'},
  c={key:'c'};
  a[b]=123;
  a[c]=456;
console.log(a[b]);

var jsonArr = [{name:'a',total:10}
              ,{name:'b',total:15}
              ,{name:'a',total:20}];
function quchong(jsonArr) {
  var arr1 = [];
  var obj = {};
  for(var i = 0;i<jsonArr.length;i++){
    obj[jsonArr[i]['name']] = (obj[jsonArr[i]['name']]||0) + jsonArr[i]['total'];
  }
  for (s in obj){
    var objTem = {};
    objTem.name = s;
    objTem.Total = obj[s];
    arr1.push(objTem);
  }
  return arr1;
};

function Foo() {
    getName = function () { alert (1); };
    return this;
}
Foo.getName = function () { alert (2);};
Foo.prototype.getName = function () { alert (3);};
var getName = function () { alert (4);};
function getName() { alert (5);}

//请写出以下输出结果：
Foo.getName();2
getName();4
Foo().getName();1
getName();1
new Foo.getName();2
new Foo().getName();1
new new Foo().getName();

var arr=[
{name:'ly',age:3},
{name:'zfy',age:1},
{name:'zjc',age:2}
];
arr.sort(function(a,b){return a.age - b.age;});


function s(argument) {
  // body...
}
var s1 = new s();
s1._proto_ === s.prototype;
s.prototype.constructor === s
s1

var s = [1,2,3]
var s1 = [];
s.forEach(function(v,r,i){
  s1.push(v);
});

function array() {
  var result = new Array();
  for(var i = 0;i<10;i++){
    result[i] = function() {
      return i;
    };
  }
  return result;
}

class Person{
  constructor(){
    
  }
  toString(){
    
  }
}
var name  ='ly';
let templateStr = `<span> My Name=${name} <span>`;

var superType = function() {
  this.superProperty = true;
}

superType.prototype.getProperty = function() {
  return this.superProperty;
}

var subType = function() {
  this.subType = false;
}

subType.prototype = new superType();

var arr=[
{name:'ly',age:3},
{name:'zfy',age:1},
{name:'zjc',age:2}
];
arr.sort(function(a,b) {
  return b.age-a.age;
})