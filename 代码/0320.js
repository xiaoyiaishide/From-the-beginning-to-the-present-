for (var i = 0; i < 5; i++) {
    setTimeout(function() {
        console.log(new Date, i);
    }, 1000);
}

console.log(new Date, i);

let s: Array<string>=['a', 'b', 'c']

var MutationObserver = window.MutationObserver ||
        window.WebKitMutationObserver || 
        window.MozMutationObserver;

var mutationObserverSupport = !!MutationObserver;

var callback = function(records){
    console.log('MutationObserver callback');
    records.map(function(record){
        console.log('Mutation type: '+ record.type, ', target: ', record.target.nodeName);
    });
};

var mo = new MutationObserver(callback);

var option = {
    'childList': true, 
    'subtree': true
};

mo.observe(document.body, option);

window.onload = init;

function init(){
    if (!mutationObserverSupport) {
        return;
    }
    
    var addBtn = document.getElementById('myelement'),
        body = document.getElementsByTagName('body')[0];
    addBtn.addEventListener('click', function(e) {
        for (var i = 0, j = 100; i < j; i++) {
            var p = document.createElement('p');
            p.appendChild(document.createTextNode(i));
            body.appendChild(p);
            console.log('append child node: ' + i);
        }
    }, false);
}

function getCookie(key) {
    var cookieArr = document.cookie.split('; ');
    var cookieResult;
    cookieArr.forEach((v, i, r)=>{
        var index = decodeURIComponent(v).indexOf('=');
        if(index>-1 && key===decodeURIComponent(v).substr(0, index)){
            cookieResult = decodeURIComponent(v).substr(index+1);
        }
    });
    return cookieResult;
}
