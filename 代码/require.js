define(["juery"],function($){
	var renderCheckDatagrid=function(dg){
		dg.datagrid({
			nowarp:false,
			cellHover:false,
			pagination:true,
			url:...,
			queryParams:{xxx:xxx},
			toolbar:[
			{text:µ¼³ö£¬handler:handleExport},
			{},
			]
		});
	};
	return{
		attached:function(view,parent){
			var dg=$("#check-datagrid",view);
			renderCheckDatagrid(dg);
		}
	};
});