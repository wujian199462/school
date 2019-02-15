
$("#takePhoto").click(function () {
    $("#video").css("display","block");
    $("#corver").css("display","none");
    $("#chooseWay").css("display","none");
    let constraints = {
        video: {width: 200, height: 200},
        audio: true
    };
    //获得video摄像头区域
    let video = document.getElementById("video");
    //这里介绍新的方法，返回一个 Promise对象
    // 这个Promise对象返回成功后的回调函数带一个 MediaStream 对象作为其参数
    // then()是Promise对象里的方法
    // then()方法是异步执行，当then()前的方法执行完后再执行then()内部的程序
    // 避免数据没有获取到
    let promise = navigator.mediaDevices.getUserMedia(constraints);
    promise.then(function (MediaStream) {
        video.srcObject = MediaStream;
        video.play();
    });

})
function takePhoto() {
    $("#canvas").css("display","block");
    //获得Canvas对象
    let video = document.getElementById("video");
    let canvas = document.getElementById("canvas");
    let ctx = canvas.getContext('2d');
    ctx.drawImage(video, 0, 0, 200, 200); //最大根据canvas的宽高决定
}



function getAllTeacher() {
    $("#teacherList").empty();
    $.ajax({
        url:"teacher/getAllTeacher",
        dataType:"json",
        success:function (data) {
            var list =""
            $.each(data,function (index,item) {
                var sex ='';
                var state ='';
                item.sex==1?sex='男':sex='女';
                item.state==1?state='#00FF7F':state='#D3D3D3';
                if(index==data.length-1){
                    list+="<div style='width: 100%;height: 60px;text-align: center;line-height: 50px;margin-top: 10px;z-index: 1;background-color: #ffff;border-bottom: solid #DCDCDC 1px'>" +
                        "                <div class='row'>" +
                        "                    <div  class='col-xs-3'>"+item.name+"</div>" +
                        "                    <div  class='col-xs-1'>"+sex+"</div>" +
                        "                    <div  class='col-xs-6'style='overflow: hidden;text-overflow: ellipsis;white-space: nowrap;'><span>"+item.describe+"</span></div>" +
                        "                    <div  class='col-xs-2'><li class='glyphicon glyphicon-heart'style='color: "+state+"'></li></div>" +
                        "                </div>" +
                        "            </div>";
                }else{
                    list+="<div style='width: 100%;height: 60px;text-align: center;line-height: 50px;margin-top: 10px;z-index: 1;background-color: #ffff'>" +
                        "                <div class='row'>" +
                        "                    <div  class='col-xs-3'>"+item.name+"</div>" +
                        "                    <div  class='col-xs-1'>"+sex+"</div>" +
                        "                    <div  class='col-xs-6'style='overflow: hidden;text-overflow: ellipsis;white-space: nowrap;'><span>"+item.describe+"</span></div>" +
                        "                    <div  class='col-xs-2'><li class='glyphicon glyphicon-heart'style='color: "+state+"'></li></div>" +
                        "                </div>" +
                        "            </div>";
                }

            })
            $("#teacherList").append(list);
        }
    })
}



$("#toPhoto").click(function () {
    $("#photoArea").css("display","block");
    $("#toPhotoArea").css("display","none");
});

$("#choosePhoto").click(function () {
   /* $("#chooseWay").css("display","block");*/
    $("#corver").css("display","block");
    $("#chooseWay").slideToggle(300);
});

$("#chooseFromAlbum").click(function () {
    $("#corver").css("display","none");
    $("#chooseWay").css("display","none");
});
