
$("#messageButton").click(function () {
    $("#messageView").css("display","block");
    $("#scoreView").css("display","none");
    $("#mineView").css("display","none");
    $("#solveView").css("display","none");

})

$("#scoreButton").click(function () {
    $("#scoreView").css("display","block");
    $("#messageView").css("display","none");
    $("#mineView").css("display","none");
    $("#solveView").css("display","none");

})


$("#mineButton").click(function () {
    $("#mineView").css("display","block");
    $("#messageView").css("display","none");
    $("#scoreView").css("display","none");
    $("#solveView").css("display","none");
})

$("#solveButton").click(function () {
    $("#solveView").css("display","block");
    $("#mineView").css("display","none");
    $("#messageView").css("display","none");
    $("#scoreView").css("display","none");
    getAllTeacher();
})

$("#search").click(function () {
    var aa = $("#searchText").val();
    alert(aa);
})


