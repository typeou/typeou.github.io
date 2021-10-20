// Current page.
var page;

// Runs on page load.
function NavigatorLoad()
{
    // If there's a directory specified in the URL, attempt to navigate to it.
    if (window.location.href.indexOf("#") != -1)
    {
        // Retrieve the directory name.
        page = window.location.href.substr(window.location.href.indexOf("#") + 1);
        // If the directory is not valid, default to the home page.
        if (page == "commissionsLive2D" || page == "comms")
            page = "commissions";
        else if (document.querySelector("#" + page + "Div") == null)
            page = "home";
    }
    // Otherwise, default to the home page.
    else
        page = "home";

    // Class initially added to all block elements.
    // It hides the elements so they don't affect the page layout.
    // After they're viewed once, the animator will take care of this so this class will be removed.
    document.querySelectorAll(".block").forEach(element => {
        element.classList.add("blockInit");
    });
    document.querySelectorAll("#" + page + "Div .block").forEach((element) => {
        // Remove the starting class, since the animator will handle showing and hiding it now.
        element.classList.remove("blockInit");
        element.classList.add("blockLoad");
    });
    document.querySelector("#main").classList.remove("maininit");
    // Display the current page's blocks with no delay.
    // Highlight the current page link.
    document.querySelector("#" + page + "Link").classList.add("current");
    // Type out the directory into the header and window title.
    TypeDirectory();
};

// Hide the last page's blocks and show the current page's.
function RefreshBlocks(wait)
{
    // Performs these actions on each block element on the current page.
    document.querySelectorAll("#" + page + "Div .block").forEach((element, index) => {
        // Remove the starting class, since the animator will handle showing and hiding it now.
        element.classList.remove("blockInit");
        element.classList.remove("blockLoad");
        if (wait != 0)
        {
            // Delay before the animation starts.
            // Depending on the value passed into this function, the delay can vary.
            var delay = ((wait == 1 ? 0.5 : 0) + (index * 0.25)) * (wait == 2 ? 0 : 1);
            // Applies the delay to the block.
            element.style.animationDelay = delay + "s";
    
            // Retrieve the last animation played on this block.
            // We need to tell it to play a different one or else it won't animate a second time.
            var old = element.style.animationName;
            // New animation to play.
            var anim;
            do
            {
                // Select a random animation.
                anim = "open" + (Math.floor(Math.random() * 4) + 1);
            // Loop until a new animation is selected.
            } while (old != null && anim == old);
            // Applies the animation to the block.
            element.style.animationName = anim;
        }
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
        if (target == "commissionsLive2D" || target == "comms")
            target = "commissions";
        else if (document.querySelector("#" + target + "Div") == null)
            target = "home";
    }

    // If the new page is different from the old page.
    if (page != target)
    {
        // Refresh the old page's animations with no delay.
        RefreshBlocks(2);
        // Tells the old page's blocks to play their animation in reverse.
        // This will hide them from view.
        document.querySelectorAll("#" + page + "Div .block").forEach(element => {
            element.classList.add("reverse");
        });
    
        // Set the current page to the target page.
        page = target;
    
        // Remove the highlight on the old link.
        document.querySelectorAll("#links .current").forEach(element => {
            element.classList.remove("current");
        });
        // Highlight the new link.
        document.querySelector("#" + page + "Link").classList.add("current");
    
        // Display the new page's blocks with a small delay to wait for the old page's blocks to hide.
        RefreshBlocks(1);
        // Make sure the animations for the new page play forwards.
        document.querySelectorAll("#" + page + "Div .block").forEach(element => {
            element.classList.remove("reverse");
        });
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
        if (document.querySelector("#directory").innerHTML.length > 0)
        {
            // Set the directory text to the directory text with the last character removed.
            document.querySelector("#directory").innerHTML = document.querySelector("#directory").innerHTML.substr(0, document.querySelector("#directory").innerHTML.length - 1);
            // Copy the directory text to the window title.
            document.querySelector("title").innerHTML = "typeou.dev" + document.querySelector("#directory").innerHTML;
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
                if (document.querySelector("#directory").innerHTML != (page == "home" ? "" : page))
                {
                    // Type out the page name one character at a name.
                    document.querySelector("#directory").innerHTML = "/" + page.substr(0, document.querySelector("#directory").innerHTML.length);
                    // Copy the directory text to the window title.
                    document.querySelector("title").innerHTML = "typeou.dev" + document.querySelector("#directory").innerHTML;
                }
                // Once there are no characters left to type, stop the interval.
                else
                    clearInterval(typer);
            }, 17);
        }
    }, 17);
}

function ShowVideo(html)
{
    document.querySelector("#playerBody").innerHTML = html;

    var element = document.querySelector("#player");
    // Retrieve the last animation played on this block.
    // We need to tell it to play a different one or else it won't animate a second time.
    var old = element.style.animationName;
    // New animation to play
    var anim;
    do
    {
        // Select a random animation.
        anim = "openPlayer" + (Math.floor(Math.random() * 4) + 1);
    // Loop until a new animation is selected.
    } while (old != null && anim == old);
    // Applies the animation to the block.
    element.style.animationName = anim;
    element.classList.remove("reverse");
    element.querySelector("video").play();
}

function CloseVideo(event)
{
    if (event.target.id == "player" || event.target.id == "playerX" || event.key == "Escape")
    {
        var element = document.querySelector("#player");
        if (!element.classList.contains("reverse"))
        {
            // Retrieve the last animation played on this block.
            // We need to tell it to play a different one or else it won't animate a second time.
            var old = element.style.animationName;
            // New animation to play
            var anim;
            do
            {
                // Select a random animation.
                anim = "openPlayer" + (Math.floor(Math.random() * 4) + 1);
            // Loop until a new animation is selected.
            } while (old != null && anim == old);
            // Applies the animation to the block.
            element.style.animationName = anim;
            element.classList.add("reverse");
            element.querySelector("video").pause();
        }
    }
}

window.onload = function(){ HoverEvents(); NavigatorLoad(); }