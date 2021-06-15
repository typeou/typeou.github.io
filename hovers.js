$(function() {
    // Link hovers
    $("#links > div").mouseenter(function(event){
        $(this).children("span").addClass("hover");
    });

    $("#links > div").mouseleave(function(event){
        $(this).children("span").removeClass("hover");
    });

    // Commissions hovers
    $("#examples > div > div").mouseenter(function(event){
        $(this).children(".cover").addClass("hover");
    });

    $("#examples > div > div").mouseleave(function(event){
        $(this).children(".cover").removeClass("hover");
    });

    // Title logo hover
    $(".title").mouseenter(function(){
        $("#logo").addClass("hover");
    });

    $(".title").mouseleave(function(){
        $("#logo").removeClass("hover");
    });
});