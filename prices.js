var half = 630, full = 750, expression = 10, animated = 45, toggles = 30, arms = 45, animatedArms = 90, bodyY = 90, ios = 60, alternate = 180, rate;

function Convert(data)
{
    return data * rate;
}

function Round(num)
{
    return "~$" + (num % 5 == 0 ? num : ((num - (num % 5)) + 5));
}

var request = new XMLHttpRequest();
request.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200)
    {
        rate = JSON.parse(this.responseText).observations[0].FXCADUSD.v;
        $("#priceHalf").html(Round(Convert(half)) + " USD");
        $("#priceHalf").after("<span>$" + half + "+ CAD</span>");
        $("#priceFull").html(Round(Convert(full)) + " USD");
        $("#priceFull").after("<span>$" + full + "+ CAD</span>");
        $("#priceExpression").html(Round(Convert(expression)) + "+ USD ($" + expression + "+ CAD)");
        $("#priceAnimated").html(Round(Convert(animated)) + "+ USD ($" + animated + "+ CAD)");
        $("#priceToggle").html(Round(Convert(toggles)) + "+ USD ($" + toggles + "+ CAD)");
        $("#priceArms").html(Round(Convert(arms)) + "+ USD ($" + arms + "+ CAD)");
        $("#priceAnimatedArms").html(Round(Convert(animatedArms)) + "+ USD ($" + animatedArms + "+ CAD)");
        $("#priceBodyY").html(Round(Convert(bodyY)) + "+ USD ($" + bodyY + "+ CAD)");
        $("#priceIOS").html(Round(Convert(ios)) + "+ USD ($" + ios + "+ CAD)");
        $("#priceAlternate").html(Round(Convert(alternate)) + "+ USD ($" + alternate + "+ CAD)");
    }
    else
    {
        $("#priceHalf").html("$" + half + "+ CAD");
        $("#priceFull").html("$" + full + "+ CAD");
        $("#priceExpression").html("$" + expression + "+ CAD");
        $("#priceAnimated").html("$" + animated + " CAD");
        $("#priceToggle").html("$" + toggles + " CAD");
        $("#priceArms").html("$" + arms + "+ CAD");
        $("#priceAnimatedArms").html("$" + animatedArms + "+ CAD");
        $("#priceBodyY").html("$" + bodyY + "+ CAD");
        $("#priceIOS").html("$" + ios + "+ CAD");
        $("#priceAlternate").html("$" + alternate + " CAD");
    }
};
request.open("GET", "https://www.bankofcanada.ca/valet/observations/FXCADUSD/json?recent=1", true);
request.send();