var screenEffectPosition = 0;

var screenEffect = setInterval(function()
{
    screenEffectPosition++;
    if(screenEffectPosition >= 200)
        screenEffectPosition = 0;
    $("#screenEffect").css("mask-position", "0 " + screenEffectPosition + "%");
}, 1000/24)

window.onload = function()
{
    if(!CSS.supports("mask-image", "linear-gradient(transparent 45%, black 50%, transparent 55%)") && !CSS.supports("-webkit-mask-image", "linear-gradient(transparent 45%, black 50%, transparent 55%)"))
    {
        console.warn("CSS property 'mask-image' not supported on this browser. Hiding #screenEffect.")
        $("#screenEffect").prop("hidden", "hidden");
        clearInterval(screenEffect);
    }
}