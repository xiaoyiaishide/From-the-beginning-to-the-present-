function bubbleSort(arr) {
  if(arr.length<2){
    return arr;
  }

  for(var i = 0;i<arr.length;i++){
    for(var j = 0;j<arr.length-i;j++){
      if(arr[j]>arr[j+1]){
        var tmp;
        tmp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = tmp;
      }
    }
  }
  return arr;
}
