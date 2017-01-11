var myModule=angular.module("ly",[]);
myModule.controller("mainControl",function(){
	var main=this;
	main.items=[{name:"zc1",age:1},
						 {name:"zc2",age:2}];
  main.msg="<h1>哈哈哈哈</h1>";
});
myModule.config(function($interpolateProvider){
	$interpolateProvider.startSymbol('[[');
	$interpolateProvider.endSymbol(']]');
});
