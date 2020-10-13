var screenEffectPosition = 0;

setInterval(function()
{
    screenEffectPosition++;
    if(screenEffectPosition >= 200)
        screenEffectPosition = 0;
    $("#screenEffect").css("mask-position", "0 " + screenEffectPosition + "%");
}, 1000/24)

if(!CSS.supports("mask-image") && !CSS.supports("-webkit-mask-image"))
    $("#screenEffect").css("hidden", "hidden");