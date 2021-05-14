$(function() {
    $("#links > div").mouseenter(function(event){
        $(this).children("span").addClass("hover");
    })

    $("#links > div").mouseleave(function(event){
        $(this).children("span").removeClass("hover");
    })
});