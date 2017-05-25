
var button = document.querySelector('#id');
//注册事件
button.addEventListener('click', ()=>console.log('click me!');)
//注册事件使用RX
Rx.Observable.fromEvent(button, 'click')
			 .subcribe(()=>console.log('click me!');)

//impurity function
var count = 0;
button.addEventListener('click', ()=> console.log(`The count is ${count}`);)

//use rxjs produce purity function
Rx.Observable.fromEvent(button, 'click')
			 .scan(count=> count + 1,0)
			 .subcribe(count=> console.log(`The count is ${count}`);)

