// Current page.
var page;

// Runs on page load.
$(function()
{
    // If there's a directory specified in the URL, attempt to navigate to it.
    if (window.location.href.indexOf("#") != -1)
    {
        // Retrieve the directory name.
        page = window.location.href.substr(window.location.href.indexOf("#") + 1);
        // If the directory is not valid, default to the home page.
        if (page == "commissions")
            page = "commissionsLive2D";
        else if (!$("#" + page + "Div").length)
            page = "home";
    }
    // Otherwise, default to the home page.
    else
        page = "home";

    // Class initially added to all block elements.
    // It hides the elements so they don't affect the page layout.
    // After they're viewed once, the animator will take care of this so this class will be removed.
    $(".block").addClass("blockInit");
    // Display the current page's blocks with no delay.
    RefreshBlocks(0);
    // Highlight the current page link.
    $("#" + page + "Link").addClass("current");
    // Type out the directory into the header and window title.
    TypeDirectory();
});

// Hide the last page's blocks and show the current page's.
function RefreshBlocks(wait)
{
    // Performs these actions on each block element on the current page.
    $("#" + page + "Div .block").each(function(index)
    {
        // Remove the starting class, since the animator will handle showing and hiding it now.
        $(this).removeClass("blockInit");

        // Delay before the animation starts.
        // Depending on the value passed into this function, the delay can vary.
        var delay = ((wait == 1 ? 0.5 : 0) + (index * 0.25)) * (wait == 2 ? 0 : 1);
        // Applies the delay to the block.
        $(this).css("-webkit-animation-delay", delay + "s");
        $(this).css("animation-delay", delay + "s");

        // Retrieve the last animation played on this block.
        // We need to tell it to play a different one or else it won't animate a second time.
        var old = $(this).css("-webkit-animation-name") != null ? $(this).css("-webkit-animation-name") : $(this).css("animation-name");
        // New animation to play.
        var anim;
        do
        {
            // Select a random animation.
            anim = "open" + (Math.floor(Math.random() * 4) + 1);
        // Loop until a new animation is selected.
        } while (old != null && anim == old);
        // Applies the animation to the block.
        $(this).css("-webkit-animation-name", anim);
        $(this).css("animation-name", anim);
    });
}

// Whenever an on-site link is clicked.
window.onhashchange = function()
{
    // Attempts to retrieve the new page. Defaults to the home directory.
    var target;
    if (window.location.href.indexOf("#") == -1)
        target = "home";
    else
    {
        target = window.location.href.substr(window.location.href.indexOf("#") + 1);
        if (target == "commissions")
            target = "commissionsLive2D";
        else if (!$("#" + target + "Div").length)
            target = "home";
    }

    // If the new page is different from the old page.
    if (page != target)
    {
        // Refresh the old page's animations with no delay.
        RefreshBlocks(2);
        // Tells the old page's blocks to play their animation in reverse.
        // This will hide them from view.
        $("#" + page + "Div .block").addClass("reverse");
    
        // Set the current page to the target page.
        page = target;
    
        // Remove the highlight on the old link.
        $("#links .current").removeClass("current");
        // Highlight the new link.
        $("#" + page + "Link").addClass("current");
    
        // Display the new page's blocks with a small delay to wait for the old page's blocks to hide.
        RefreshBlocks(1);
        // Make sure the animations for the new page play forwards.
        $("#" + page + "Div .block").removeClass("reverse");
        // Type out the directory into the header and window title.
        TypeDirectory();
    }
}

var typer;
// For typing out the directory name in the header and title.
function TypeDirectory()
{
    // Stop any existing typing.
    clearInterval(typer);
    // Run this every 17ms (~60fps) until it's stopped.
    typer = setInterval(function()
    {
        // First, delete the old directory.
        // Removes a character from the end until there are none left.
        if ($("#directory").html().length > 0)
        {
            // Set the directory text to the directory text with the last character removed.
            $("#directory").html($("#directory").html().substr(0, $("#directory").html().length - 1));
            // Copy the directory text to the window title.
            $("title").html("typeou.dev" + $("#directory").html());
        }
        // Once there are no characters left to remove.
        else
        {
            // Stop the old interval.
            clearInterval(typer);
            // Create a new one.
            typer = setInterval(function()
            {
                // Second, type out the new directory.
                // Won't type anything if the new directory is the home page.
                if ($("#directory").html() != (page == "home" ? "" : page))
                {
                    // Type out the page name one character at a name.
                    $("#directory").html("/" + page.substr(0, $("#directory").html().length));
                    // Copy the directory text to the window title.
                    $("title").html("typeou.dev" + $("#directory").html());
                }
                // Once there are no characters left to type, stop the interval.
                else
                    clearInterval(typer);
            }, 17);
        }
    }, 17);
}