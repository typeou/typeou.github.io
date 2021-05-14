$(function() {
    $("#examples > div > div").mouseenter(function(event){
        $(this).children(".cover").addClass("hover");
    })

    $("#examples > div > div").mouseleave(function(event){
        $(this).children(".cover").removeClass("hover");
    })
});