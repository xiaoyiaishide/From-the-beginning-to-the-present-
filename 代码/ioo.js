/**
 * 生成X轴为分类类型的图表 两个Y轴坐标尺
 * @param target 显示图表的目标区域 如 '#chart-container'
 * @param title 图表的标题
 * @param categories 图表X轴分类数据
 * @param data 图表数据
 *
 */
function handleChartsDoubleYAxis(target, title, categories, data){
    var curDate = new Date();
    var startDatetime = Date.parse($("input[name=startDate]").val()) - curDate.getTimezoneOffset()*60*1000;
    if(data==null || data.length==0){
        //没有数据
        data = [{
            name: '没有数据',
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        }];
        $(target).highcharts({
            title: {
                text: title,
                align: 'left',
                style: {
                    fontSize: '12px',
                    fontWeight: 'bold',
                    color: 'gray'
                }
            },
            xAxis: {
                type: 'datetime',
                dateTimeLabelFormats: {
                    day: '%Y-%m-%d'
                }
            },
            yAxis: {
                title: {
                    text: ''
                },
                min: 0,
                max: 100,
                tickInterval: 20,
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#808080'
                }]
            },
            credits:{
                enabled: false
            },
            tooltip: {
                xDateFormat: '%Y-%m-%d',
                shared: true
            },
            legend: {
                layout: 'horizontal',
                align: 'left',
                borderWidth: 0
            },
            plotOptions:{
                series:{
                    pointStart: startDatetime,
                    pointInterval: 24 * 60 * 60 * 1000
                }
            },
            series: data
        });
    }
    else{
        //有数据
        $(target).highcharts({
            title: {
                text: title,
                align: 'left',
                style: {
                    fontSize: '12px',
                    fontWeight: 'bold',
                    color: 'gray'
                }
            },
            xAxis: {
                /*
                 type: 'datetime',
                 dateTimeLabelFormats: {
                 day: '%Y-%m-%d'
                 }
                 */
                type: 'category',
                tickmarkPlacement: 'on',
                categories: categories
            },
            yAxis: [{
                lineWidth: 1,
                title: {
                    text: ''
                },
                min:0
            }, {
                lineWidth: 1,
                opposite: true,
                title: {
                    text: ''
                },
                min:0
            }],
            credits:{
                enabled: false
            },
            tooltip: {
                shared: true
            },
            legend: {
                layout: 'horizontal',
                align: 'left',
                borderWidth: 0
            },
            series:  [{
                data: data[0]['data'],
                name:data[0]['name']
            }, {
                data: data[1]['data'],
                name:data[1]['name'],
                yAxis: 1
            }]
        });
    }
}