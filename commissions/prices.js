var half = 600, full = 725, expression = 30, animated = 125, arms = 175, alternate = 225, ios = 60, bodyY = 100, rate;

function Convert(data)
{
    return data * rate;
}

function Round(num)
{
    return "~$" + (num % 5 == 0 ? num : ((num - (num % 5)) + 5)) + " USD";
}

var request = new XMLHttpRequest();
request.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200)
    {
        rate = JSON.parse(this.responseText).observations[0].FXCADUSD.v;
        $("#priceHalf").html(Round(Convert(half)));
        $("#priceHalf").after("<span>$" + half + " CAD</span>");
        $("#priceFull").html(Round(Convert(full)));
        $("#priceFull").after("<span>$" + full + " CAD</span>");
        $("#priceExpression").html(Round(Convert(expression)) + " ($" + expression + " CAD)");
        $("#priceAnimated").html(Round(Convert(animated)) + " ($" + animated + " CAD)");
        $("#priceArms").html(Round(Convert(arms)) + " ($" + arms + " CAD)");
        $("#priceAlternate").html(Round(Convert(alternate)) + " ($" + alternate + " CAD)");
        $("#priceIOS").html(Round(Convert(ios)) + " ($" + ios + " CAD)");
        $("#priceBodyY").html(Round(Convert(bodyY)) + " ($" + bodyY + " CAD)");
    }
    else
    {
        $("#priceHalf").html("$" + half + " CAD");
        $("#priceFull").html("$" + full + " CAD");
        $("#priceExpression").html("$" + expression + " CAD");
        $("#priceAnimated").html("$" + animated + " CAD");
        $("#priceArms").html("$" + arms + " CAD");
        $("#priceAlternate").html("$" + alternate + " CAD");
        $("#priceIOS").html("$" + ios + " CAD");
        $("#priceBodyY").html("$" + bodyY + " CAD");
    }
};
request.open("GET", "https://www.bankofcanada.ca/valet/observations/FXCADUSD/json?recent=1", true);
request.send();