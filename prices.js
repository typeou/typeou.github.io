// Price data in CAD
var half = 1000, full = 1250, expression = 15, animated = 45, toggles = 15, arms = 60, headPosZ = 60, cheekPuff = 30, mouthX = 30, tongueOut = 60, bridgerCore = 150, bridgerPlus = 90, alternate = 200;
var chibi = 300, headChibi = 120, expressionChibi = 10, animatedChibi = 30, togglesChibi = 10, armsChibi = 15, tongueOutChibi = 30;
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
        document.querySelector("#priceHeadPosZ").innerHTML = Round(Convert(headPosZ)) + "+ USD ($" + headPosZ + "+ CAD)";
        document.querySelector("#priceCheek").innerHTML = Round(Convert(cheekPuff)) + "+ USD ($" + cheekPuff + "+ CAD)";
        document.querySelector("#priceMouth").innerHTML = Round(Convert(mouthX)) + "+ USD ($" + mouthX + "+ CAD)";
        document.querySelector("#priceTongue").innerHTML = Round(Convert(tongueOut)) + "+ USD ($" + tongueOut + "+ CAD)";
        document.querySelector("#priceBridgerCore").innerHTML = Round(Convert(bridgerCore)) + "+ USD ($" + bridgerCore + "+ CAD)";
        document.querySelector("#priceBridgerPlus").innerHTML = Round(Convert(bridgerPlus)) + "+ USD ($" + bridgerPlus + "+ CAD)";
        document.querySelector("#priceAlternate").innerHTML = Round(Convert(alternate)) + "+ USD ($" + alternate + "+ CAD)";

        document.querySelector("#priceHeadChibi").innerHTML = Round(Convert(headChibi)) + "+ USD ($" + headChibi + "+ CAD)";
        document.querySelector("#priceExpressionChibi").innerHTML = Round(Convert(expressionChibi)) + "+ USD ($" + expressionChibi + "+ CAD)";
        document.querySelector("#priceAnimatedChibi").innerHTML = Round(Convert(animatedChibi)) + "+ USD ($" + animatedChibi + "+ CAD)";
        document.querySelector("#priceToggleChibi").innerHTML = Round(Convert(togglesChibi)) + "+ USD ($" + togglesChibi + "+ CAD)";
        document.querySelector("#priceArmsChibi").innerHTML = Round(Convert(armsChibi)) + "+ USD ($" + armsChibi + "+ CAD)";
        document.querySelector("#priceCheekChibi").innerHTML = Round(Convert(cheekPuff)) + "+ USD ($" + cheekPuff + "+ CAD)";
        document.querySelector("#priceMouthChibi").innerHTML = Round(Convert(mouthX)) + "+ USD ($" + mouthX + "+ CAD)";
        document.querySelector("#priceTongueChibi").innerHTML = Round(Convert(tongueOutChibi)) + "+ USD ($" + tongueOutChibi + "+ CAD)";
        document.querySelector("#priceBridgerCoreChibi").innerHTML = Round(Convert(bridgerCore)) + "+ USD ($" + bridgerCore + "+ CAD)";
        document.querySelector("#priceBridgerPlusChibi").innerHTML = Round(Convert(bridgerPlus)) + "+ USD ($" + bridgerPlus + "+ CAD)";
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
        document.querySelector("#priceHeadPosZ").innerHTML = "$" + headPosZ + "+ CAD";
        document.querySelector("#priceCheek").innerHTML = "$" + cheekPuff + "+ CAD";
        document.querySelector("#priceMouth").innerHTML = "$" + mouthX + "+ CAD";
        document.querySelector("#priceTongue").innerHTML = "$" + tongueOut + "+ CAD";
        document.querySelector("#priceBridgerCore").innerHTML = "$" + bridgerCore + "+ CAD";
        document.querySelector("#priceBridgerPlus").innerHTML = "$" + bridgerPlus + "+ CAD";

        document.querySelector("#priceAlternate").innerHTML = "$" + alternate + " CAD";
        document.querySelector("#priceHeadChibi").innerHTML = "$" + headChibi + " CAD";
        document.querySelector("#priceExpressionChibi").innerHTML = "$" + expressionChibi + "+ CAD";
        document.querySelector("#priceAnimatedChibi").innerHTML = "$" + animatedChibi + "+ CAD"
        document.querySelector("#priceToggleChibi").innerHTML = "$" + togglesChibi + "+ CAD";
        document.querySelector("#priceArmsChibi").innerHTML = "$" + armsChibi + "+ CAD";
        document.querySelector("#priceCheekChibi").innerHTML = "$" + cheekPuff + "+ CAD";
        document.querySelector("#priceMouthChibi").innerHTML = "$" + mouthX + "+ CAD";
        document.querySelector("#priceTongueChibi").innerHTML = "$" + tongueOutChibi + "+ CAD";
        document.querySelector("#priceBridgerCoreChibi").innerHTML = "$" + bridgerCore + "+ CAD";
        document.querySelector("#priceBridgerPlusChibi").innerHTML = "$" + bridgerPlus + "+ CAD";
    }
};
// Open the request and send it.
request.open("GET", "https://www.bankofcanada.ca/valet/observations/FXCADUSD/json?recent=1", true);
request.send();
