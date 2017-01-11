var myModule=angular.module("myApp",[]);
myModule.controller("mainControl",function(){
  mainControl=this;
  mainControl.items=[{name:"zs1",age:1},{name:"zs2",age:2}];
  mainControl.remove=function(index){
    mainControl.items.remove(index,1);
  }
  mainControl.add=function(){
    mainControl.items.push({name:"zc3",age:3});
  }
});

function shellSort(arr) {
  if(arr.length<2){
    return arr;
  }

  var step = 1;
  var l = arr.length;
  while(step<l/3){
    step = step*3;
  }

  while(step>=1){
    for(var i = step;i < l;i++){
      for(var j = i;j >= step && arr[j-step] > arr[j];j = j-step){
        var temp = arr[j];
        arr[j] = arr[j-1];
        arr[j-1] = temp;
      }
    }
    step = Math.floor(step/3);
  }

  return arr;
}

function shellSort(arr) {
  if(arr.length<2){
    return arr;
  }

  var step = 1;
  var l = arr.length;

  while(step<l/3){
    step = step*3 + 1;
  }

  while(step>=1){
    for(var i = step;i < l;i++){
      for(var j = i;j >= step&&arr[j-step]>arr[j];j=j-step){
        var temp = arr[j];
        arr[j] = arr[j-step];
        arr[j-step] = arr[j];
      }
    }
    step = Math.floor(step/3);
  }

  return arr;
}

 1 function shellSort(arr){
 2     var N=arr.length;
 3     var h=1;
 4     while(h<N/3){
 5         h=3*h+1;//设置间隔
 6     }
 7     while(h>=1){
 8         for(var i=h; i<N; i++){
 9             for(j=i; j>=h && arr[j]<arr[j-h]; j-=h){
10                 swap(arr, j, j-h);
11             }
12         }
13         h=(h-1)/3;
14     }
return arr;
15 }
16 function swap(array, i, j){//两个数调换
17     var temp =array[j];
18     array[j]=array[i];
19     array[i]=temp;
20 }

function chunk(arr,size) {
  // if(toString.apply(arr)!=='[object Array]'){
  //   return [];
  // }
  
}

function isInt(value) {
  if(Number.isNaN(value)){
    return false;
  }else if(value>value.toFixed(0)){
    return false;
  }else{
    return true;
  }
}