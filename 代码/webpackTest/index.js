window.onload = function(){
    showtime();
    function addZero(i){
        if(i<10){
            i = "0" + i;
        }return i;
    }
    function showtime() {
        var nowtime = new Date();
        var endtime = new Date("2016/05/20,20:20:20");
        var lefttime = parseInt((endtime.getTime() - nowtime.getTime()) / 1000);
        var d = parseInt(lefttime / (24 * 60 * 60));
        var h = parseInt(lefttime / (60 * 60) % 24);
        var m = parseInt(lefttime / 60 % 60);
        var s = parseInt(lefttime % 60);
        h = addZero(h);
        m = addZero(m);
        s = addZero(s);
        document.getElementById("contdown").innerHTML = "倒计时    " + d + ":" + h + ":" + m + ":" + s;
        if(lefttime<=0){
            document.getElementById("contdown").innerHTML = "活动已结束";
            return;
        } 
        setTimeout(showtime,1000);
    }
}

function splitNumber(num) {
    var numStr = num.toString();
    var result = '';
    for(var i=0;i<numStr.length;i++){
        result+=numStr[i];
        if (i>0&&i%3==0) {
            result+=',';
        }
    }
    return result;
}