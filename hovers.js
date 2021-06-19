// Runs on page load.
$(function() {
    // Title logo hover
    $(".title").mouseenter(function() {
        $("#logoSides").addClass("hover");
    });

    $(".title").mouseleave(function() {
        $("#logoSides").removeClass("hover");
    });

    // Link hovers
    $("#links a").mouseenter(function(event) {
        $(this).siblings("span").addClass("hover");
    });

    $("#links a").mouseleave(function(event) {
        $(this).siblings("span").removeClass("hover");
    });

    // Commission example hovers
    $("#examples > div > div").mouseenter(function(event) {
        $(this).children(".cover").addClass("hover");
    });

    $("#examples > div > div").mouseleave(function(event) {
        $(this).children(".cover").removeClass("hover");
    });
});