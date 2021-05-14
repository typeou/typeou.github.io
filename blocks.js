$(function()
{
    $(".block").each(function(index)
    {
        $(this).css("animation-delay", (index * 0.25) + "s");
        $(this).css("animation-name", "open" + (Math.floor(Math.random() * 4) + 1));
    });
});