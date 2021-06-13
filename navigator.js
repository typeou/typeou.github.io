var page, typer;

$(function()
{
    if (window.location.href.indexOf("#") != -1)
    {
        page = window.location.href.substr(window.location.href.indexOf("#") + 1);
        if (!$("#" + page + "Div").length)
            page = "home";
    }
    else
        page = "home";

    $(".block").addClass("blockInit");
    RefreshBlocks(0);
    $("#" + page + "Link").addClass("current");
    TypeDirectory();
});

function RefreshBlocks(wait)
{
    $("#" + page + "Div .block").each(function(index)
    {
        $(this).removeClass("blockInit");
        var delay = ((wait == 1 ? 0.5 : 0) + (index * 0.25)) * (wait == 2 ? 0 : 1);
        $(this).css("-webkit-animation-delay", delay + "s");
        $(this).css("animation-delay", delay + "s");
        var old = $(this).css("-webkit-animation-name") != null ? $(this).css("-webkit-animation-name") : $(this).css("animation-name");
        var anim;
        do
        {
            anim = "open" + (Math.floor(Math.random() * 4) + 1);
        } while (old != null && anim == old);
        $(this).css("-webkit-animation-name", anim);
        $(this).css("animation-name", anim);
    });
}

function Navigate(event)
{
    if (page != event.target.href.substr(event.target.href.indexOf("#") + 1))
    {
        RefreshBlocks(2);
        $("#" + page + "Div .block").addClass("reverse");
    
        page = event.target.href.substr(event.target.href.indexOf("#") + 1);
    
        $("#links .current").removeClass("current");
        $("#" + page + "Link").addClass("current");
    
        RefreshBlocks(1);
        $("#" + page + "Div .block").removeClass("reverse");
        TypeDirectory();
    }
}

function TypeDirectory()
{
    clearInterval(typer);
    typer = setInterval(function()
    {
        if ($("#directory").html().length > 0)
        {
            $("#directory").html($("#directory").html().substr(0, $("#directory").html().length - 1));
            $("title").html("typeou.dev/" + $("#directory").html());
        }
        else
        {
            clearInterval(typer);
            typer = setInterval(function()
            {
                if ($("#directory").html() != (page == "home" ? "" : page))
                {
                    $("#directory").html(page.substr(0, $("#directory").html().length + 1));
                    $("title").html("typeou.dev/" + $("#directory").html());
                } 
                else
                    clearInterval(typer);
            }, 17);
        }
    }, 17);
}