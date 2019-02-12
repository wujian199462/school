
inti();

/*初始化*/
function inti() {
    getAllScore();
    tableScore();
    chinese();
    ysw();
}

/*卡片分数的分*/
function getAllScore(){
    $.ajax({
        url:"score/getAllScoreByStuNo",
        dataType:"json",
        data:{"stuNo":"1"},
        success:function (data) {
            $("#cardChinese").empty();
            $("#cardMath").empty();
            $("#cardEnglish").empty();
            $("#cardPhysical").empty();
            $("#cardChemical").empty();
            $("#cardBiological").empty();
            $("#cardGeographic").empty();
            $("#cardPolitical").empty();
            $("#cardHistory").empty();

            $("#cardChinese").append(data.chinese);
            $("#cardMath").append(data.math);
            $("#cardEnglish").append(data.english);
            $("#cardPhysical").append(data.physical);
            $("#cardChemical").append(data.chemical);
            $("#cardBiological").append(data.biological);
            $("#cardGeographic").append(data.geographic);
            $("#cardPolitical").append(data.political);
            $("#cardHistory").append(data.history);
        },
        error:function (data) {
            alert("error");
        }
    })
}

/*表格分数*/
function tableScore() {
    $.ajax({
        url:"score/getAllScore",
        data:{"stuNo":"1"},
        dataType:"json",
        success:function (data) {
            var testname = "";
            var testscore = "";
            $.each(data,function (index,item) {
                testname+="<tr><td>"+item.testName+"</td></tr>";
                testscore+="<tr><td>"+item.chinese+"</td><td>"+item.math+"</td><td>"+item.english+"</td><td>"+item.physical+"</td><td>"+item.chemical+"</td><td>"+item.biological+"</td><td>"+item.geographic+"</td><td>"+item.political+"</td><td>"+item.history+"</td></tr>";
            })
            $("#testName").empty();
            $("#testScore").empty();
            $("#testName").append(testname);
            $("#testScore").append(testscore);
        }
    });

}


function chinese() {

    $("#math").css("display","none");
    $("#english").css("display","none");
    $("#chinese").css("display","block");

    var myChart = echarts.init(document.getElementById('chinese'));
    var option = {
        title: {
            text: '语文',
            x:'center'
        },
        tooltip: {
            trigger: 'axis',
        },
        legend: {
            data: ['语文'],
            x:'left'
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['6月', '7月', '8月', '9月', '10月', '11月', '12月']
        },
        yAxis: {
            type: 'value',
        },
        series: [{
                name: '语文',
                type: 'line',
                stack: '总量',
                data: [26, 49, 77, 76, 80, 49, 72],

            }]
    };
    myChart.setOption(option);
}
function math() {
    $("#chinese").css("display","none");
    $("#english").css("display","none");
    $("#math").css("display","block");
    var myChart = echarts.init(document.getElementById('math'));
    var option = {
        title: {
            text: '数学',
            x:'center'
        },
        tooltip: {
            trigger: 'axis',
        },
        legend: {
            data: ['数学'],
            x:'left'
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['6月', '7月', '8月', '9月', '10月', '11月', '12月']
        },
        yAxis: {
            type: 'value',
        },
        series: [
            {
                name: '数学',
                type: 'line',
                stack: '总量',
                data: [99, 160, 370, 379, 372, 208.5, 322],
            }]
    };
    myChart.setOption(option);
}
function english() {
    $("#chinese").css("display","none");
    $("#math").css("display","none");
    $("#english").css("display","block");
    var myChart = echarts.init(document.getElementById('english'));
    var option = {
        title: {
            text: '英语',
            x:'center'
        },
        tooltip: {
            trigger: 'axis',
        },
        legend: {
            data: ['英语'],
            x:'left'
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['6月', '7月', '8月', '9月', '10月', '11月', '12月']
        },
        yAxis: {
            type: 'value',
        },
        series: [
            {
                name: '英语',
                type: 'line',
                stack: '总量',
                data: [99, 160, 370, 379, 372, 208.5, 322],
            }]
    };
    myChart.setOption(option);
}
function ysw() {
    var myChart = echarts.init(document.getElementById('ysw'));
    var option = {
        title : {
            text: '语数外占比',
            subtext: '你的外语还要加油哦',
            x:'center'
        },
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            data: ['语文','数学','外语']
        },
        series : [
            {
                name: '访问来源',
                type: 'pie',
                radius : '55%',
                center: ['50%', '60%'],
                data:[
                    {value:90, name:'语文'},
                    {value:89, name:'数学'},
                    {value:60, name:'外语'},
                ],
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };
    myChart.setOption(option);
}





$("#allCourse").click(function () {
    var flag = $(".menu").css("display");
    if(flag=='none'){
        $(".menu").css("display","block");
    }else {
        $(".menu").css("display","none");
    }

});
$("#mathEchart").click(function () {
    math();
    $(".menu").css("display","none");
});
$("#chineseEchart").click(function () {
    chinese();
    $(".menu").css("display","none");
});
$("#englishEchart").click(function () {
    english();
    $(".menu").css("display","none");
});


