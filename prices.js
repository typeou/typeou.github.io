// Price data in CAD
var half = 725, full = 850, chibi = 210, expression = 15, animated = 45, toggles = 15, arms = 45, animatedArms = 90, mouthX = 60, cheekPuff = 60, tongueOut = 60, alternate = 180, chibiHead = 90;
// CAD-USD conversion rate
var rate;

// Returns the provided CAD price in USD.
function Convert(cad)
{
    return cad * rate;
}

// Returns the provided price rounded up to the nearest $5.
function Round(num)
{
    return "~$" + (num % 5 == 0 ? num : ((num - (num % 5)) + 5));
}

// Retrieving CAD-USD conversion rate.
var request = new XMLHttpRequest();
// This happens once the request receives a response.
request.onreadystatechange = function() {
    // If the conversion rate was successfully received, display the converted prices alongside the original.
    if (this.readyState == 4 && this.status == 200)
    {
        // Pull the CAD-USD conversion rate from the JSON response and store it.
        rate = JSON.parse(this.responseText).observations[0].FXCADUSD.v;
        // Fill in the price data on the page.
        $("#priceHalf").html(Round(Convert(half)) + " USD");
        $("#priceHalf").after("<span>$" + half + "+ CAD</span>");
        $("#priceFull").html(Round(Convert(full)) + " USD");
        $("#priceFull").after("<span>$" + full + "+ CAD</span>");
        $("#priceChibi").html(Round(Convert(chibi)) + " USD");
        $("#priceChibi").after("<span>$" + chibi + "+ CAD</span>");
        $("#priceExpression").html(Round(Convert(expression)) + "+ USD ($" + expression + "+ CAD)");
        $("#priceAnimated").html(Round(Convert(animated)) + "+ USD ($" + animated + "+ CAD)");
        $("#priceToggle").html(Round(Convert(toggles)) + "+ USD ($" + toggles + "+ CAD)");
        $("#priceArms").html(Round(Convert(arms)) + "+ USD ($" + arms + "+ CAD)");
        $("#priceAnimatedArms").html(Round(Convert(animatedArms)) + "+ USD ($" + animatedArms + "+ CAD)");
        $("#priceMouth").html(Round(Convert(mouthX)) + "+ USD ($" + mouthX + "+ CAD)");
        $("#priceCheek").html(Round(Convert(cheekPuff)) + "+ USD ($" + cheekPuff + "+ CAD)");
        $("#priceTongue").html(Round(Convert(tongueOut)) + "+ USD ($" + tongueOut + "+ CAD)");
        $("#priceAlternate").html(Round(Convert(alternate)) + "+ USD ($" + alternate + "+ CAD)");
        $("#priceChibiHead").html(Round(Convert(chibiHead)) + "+ USD ($" + chibiHead + "+ CAD)");
    }
    // Otherwise, display only the original CAD price.
    else
    {
        $("#priceHalf").html("$" + half + "+ CAD");
        $("#priceFull").html("$" + full + "+ CAD");
        $("#priceFull").html("$" + chibi + "+ CAD");
        $("#priceExpression").html("$" + expression + "+ CAD");
        $("#priceAnimated").html("$" + animated + " CAD");
        $("#priceToggle").html("$" + toggles + " CAD");
        $("#priceArms").html("$" + arms + "+ CAD");
        $("#priceAnimatedArms").html("$" + animatedArms + "+ CAD");
        $("#priceMouth").html("$" + mouthX + "+ CAD");
        $("#priceCheek").html("$" + cheekPuff + "+ CAD");
        $("#priceTongue").html("$" + tongueOut + "+ CAD");
        $("#priceAlternate").html("$" + alternate + " CAD");
        $("#priceChibiHead").html("$" + chibiHead + " CAD");
    }
};
// Open the request and send it.
request.open("GET", "https://www.bankofcanada.ca/valet/observations/FXCADUSD/json?recent=1", true);
request.send();