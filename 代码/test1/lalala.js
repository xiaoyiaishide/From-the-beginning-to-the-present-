    function isFloat(oNum) //判断是否为浮点数的函数
    {
      if (!oNum)
        return false;
      var strP = /^\d+(\.\d+)?$/;
      if (!strP.test(oNum))
        return false;
      try {
        if (parseFloat(oNum) != oNum)
          return false;
      } catch (ex) {
        return false;
      }
      return true;
    }
    function check(num) {
      if (!isFloat(num)) //不是浮点数，返回false
      {
        alert("输入格式不正确");
        return;
      }
      if (num > 100 && num < 0) {
        alert("超过范围");
        return;
      }
      if (isFloat(num)) {
        str = num.split(".");
        if (str[1].length > 4) //小数部分大于4
        {
          alert("小数部分超过范围");
          return;

        }
      }
    }

    function insertSort(arr) {
      var j,temp;
      if(arr.length<2){
        return arr;
      }
      for(var i=1;i<arr.length;i++){
        temp = arr[i];
        j = i;
        while(j>0 && arr[j-1]>temp){
          arr[j] = arr[j-1];
          j--;
        }
        arr[j] = temp;
      }
      return arr;
    }

    function factory(name,age) {
      var obj = new Object();
      obj.name = name;
      obj.age = age;
      return obj;
    }
    var s = factory('劉毅',18);

    function gouzao(name,age) {
      this.name = name;
      this.age = age;
    }
    var s1 = new gouzao('六二',19);

    function superType() {
      this.superPorperty = true;
    }

    superType.prototype.getProperty = function() {
      return 
    }


