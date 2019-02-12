
$("#messageButton").click(function () {
    $("#messageView").css("display","block");
    $("#scoreView").css("display","none");
    $("#mineView").css("display","none");

})

$("#scoreButton").click(function () {
    $("#scoreView").css("display","block");
    $("#messageView").css("display","none");
    $("#mineView").css("display","none");

})


$("#mineButton").click(function () {
    $("#mineView").css("display","block");
    $("#messageView").css("display","none");
    $("#scoreView").css("display","none");
})
