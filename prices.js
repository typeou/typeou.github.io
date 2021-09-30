// Price data in CAD
var half = 725, full = 850, chibi = 210, expression = 15, animated = 45, toggles = 15, arms = 60, animatedArms = 90, headPosZ = 60, mouthX = 60, cheekPuff = 30, tongueOut = 90, alternate = 180, chibiHead = 90;
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
        document.querySelector("#priceHalf").innerHTML = Round(Convert(half)) + " USD";
        document.querySelector("#priceHalf").after(document.createElement("span").innerHTML = "$" + half + "+ CAD");
        document.querySelector("#priceFull").innerHTML = Round(Convert(full)) + " USD";
        document.querySelector("#priceFull").after(document.createElement("span").innerHTML = "$" + full + "+ CAD");
        document.querySelector("#priceChibi").innerHTML = Round(Convert(chibi)) + " USD";
        document.querySelector("#priceChibi").after(document.createElement("span").innerHTML = "$" + chibi + "+ CAD");
        document.querySelector("#priceExpression").innerHTML = Round(Convert(expression)) + "+ USD ($" + expression + "+ CAD)";
        document.querySelector("#priceAnimated").innerHTML = Round(Convert(animated)) + "+ USD ($" + animated + "+ CAD)";
        document.querySelector("#priceToggle").innerHTML = Round(Convert(toggles)) + "+ USD ($" + toggles + "+ CAD)";
        document.querySelector("#priceArms").innerHTML = Round(Convert(arms)) + "+ USD ($" + arms + "+ CAD)";
        document.querySelector("#priceAnimatedArms").innerHTML = Round(Convert(animatedArms)) + "+ USD ($" + animatedArms + "+ CAD)";
        document.querySelector("#priceHeadPosZ").innerHTML = Round(Convert(headPosZ)) + "+ USD ($" + headPosZ + "+ CAD)";
        document.querySelector("#priceMouth").innerHTML = Round(Convert(mouthX)) + "+ USD ($" + mouthX + "+ CAD)";
        document.querySelector("#priceCheek").innerHTML = Round(Convert(cheekPuff)) + "+ USD ($" + cheekPuff + "+ CAD)";
        document.querySelector("#priceTongue").innerHTML = Round(Convert(tongueOut)) + "+ USD ($" + tongueOut + "+ CAD)";
        document.querySelector("#priceAlternate").innerHTML = Round(Convert(alternate)) + "+ USD ($" + alternate + "+ CAD)";
        document.querySelector("#priceChibiHead").innerHTML = Round(Convert(chibiHead)) + "+ USD ($" + chibiHead + "+ CAD)";
    }
    // Otherwise, display only the original CAD price.
    else
    {
        document.querySelector("#priceHalf").innerHTML = "$" + half + "+ CAD";
        document.querySelector("#priceFull").innerHTML = "$" + full + "+ CAD";
        document.querySelector("#priceFull").innerHTML = "$" + chibi + "+ CAD";
        document.querySelector("#priceExpression").innerHTML = "$" + expression + "+ CAD";
        document.querySelector("#priceAnimated").innerHTML = "$" + animated + " CAD";
        document.querySelector("#priceToggle").innerHTML = "$" + toggles + " CAD";
        document.querySelector("#priceArms").innerHTML = "$" + arms + "+ CAD";
        document.querySelector("#priceAnimatedArms").innerHTML = "$" + animatedArms + "+ CAD";
        document.querySelector("#priceHeadPosZ").innerHTML = "$" + headPosZ + "+ CAD";
        document.querySelector("#priceMouth").innerHTML = "$" + mouthX + "+ CAD";
        document.querySelector("#priceCheek").innerHTML = "$" + cheekPuff + "+ CAD";
        document.querySelector("#priceTongue").innerHTML = "$" + tongueOut + "+ CAD";
        document.querySelector("#priceAlternate").innerHTML = "$" + alternate + " CAD";
        document.querySelector("#priceChibiHead").innerHTML = "$" + chibiHead + " CAD";
    }
};
// Open the request and send it.
request.open("GET", "https://www.bankofcanada.ca/valet/observations/FXCADUSD/json?recent=1", true);
request.send();
