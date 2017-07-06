// import RX from 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';

let stream$ = Observable.of(1,2,3).map(x=> x + '!!!');
stream$.subscribe((val)=>{
	console.log(val);
})

setTimeout(()=>{
	console.log('it works!');	
}, 3000);


function doWork(cb) {
	setTimeout(()=>{
		cb();
	}, 1000)
}

function cb() {
	console.log('it works!');
}

// Rx.Observable.of(1, 2, 3);