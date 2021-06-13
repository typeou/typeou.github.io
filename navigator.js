var page;

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
    $("#directory").html(page == "home" ? "" : page);
    $("title").html("typeou.dev/" + (page == "home" ? "" : page));
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
        $("#directory").html(page == "home" ? "" : page);
        $("title").html("typeou.dev/" + (page == "home" ? "" : page));
        var old = $("#directory").css("-webkit-animation-name") != null ? $("#directory").css("-webkit-animation-name") : $("#directory").css("animation-name");
        if (old == "type")
        {
            $("#directory").css("-webkit-animation-name", "type2");
            $("#directory").css("animation-name", "type2");
        }
        else
        {
            $("#directory").css("-webkit-animation-name", "type");
            $("#directory").css("animation-name", "type");
        }
    }
}