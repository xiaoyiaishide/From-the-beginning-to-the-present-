//定义列表类
function List() {
  this.listSize = 0;
  this.dataStore = [];
  this.append = append;
  this.find = find;
  this.insert = insert;
  this.length = length;
  this.remove = remove;
  this.toString = toString;
}
//实现列表类
function append(element) {
  this.dataStore[this.listSize++] = element;
}
function find(element) 
  for(var i=0;i<this.listSize;i++){
    if (element===List[i]) {
      return i
    }else{
      return -1;
    }
  }
}
function length() {
  return this.listSize;
}
function insert(element) {
  this.
}
function remove(element) {
  var i = find(element);
  if(i!=-1){
    dataStore.splice(i,1);
    --this.listSize;
    return true;
  }else{
    return false;
  }
}
function toString() {
  return this.dataStore;
}
//测试列表类
var listDemo = new List();
listDemo.append(1);
listDemo.append(2);
listDemo.append(3);
listDemo.append(4);

//定义栈类
function stack() {
  this.dataStore = [];
  this.top = top;
  this.push = push;
  this.pop = pop;
  this.peek = peek; 
}

function push(element) {
  this.dataStore.unshift(element);
}
function pop(element) {
  this.dataStore.pop();
}

function quickSort(arr) {
  if(arr.length<2){
    return arr;
  }

  var pivotIndex = Math.floor(arr/2);
  var pivot = arr.splice(pivotIndex,1);
  var left = [];
  var right = [];

  for(var i=0;i<arr.length;i++){
    if(arr[i]<=pivot){
      left.push(arr[i]);
    }else if(arr[i]>pivot){
      right.push(arr[i]);
    }
  }

  return quickSort(left).concat(pivot,quickSort(right));
}

function bubbleSort(arr) {
  if(arr.length<2){
    return arr;
  }

  for(var i=0;i<arr.length;i++){
    for(var j=0;j<arr.length-i;j++){
      if(arr[j]>arr[j+1]){
        var temp=arr[j+1];
        arr[j+1]=arr[j];
        arr[j]=temp;
      }
    }
  }
  return arr;
}





