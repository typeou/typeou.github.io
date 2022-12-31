// Price data in CAD
var half = 1000, full = 1350, toggles = 15, animated = 30, arms = 75, armSingle = 45, cheekPuff = 30, tongueOut = 60, bridger = 240, outfit = 300, hair = 150;
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
        document.querySelector("#priceFull").innerHTML = Round(Convert(full)) + "+ USD";
        var n = document.createElement("small");
        n.innerText = "$" + full + "+ CAD";
        document.querySelector("#priceFull").after(n);
        document.querySelector("#priceHalf").innerHTML = Round(Convert(half)) + "+ USD";
        n = document.createElement("small");
        n.innerText = "$" + half + "+ CAD";
        document.querySelector("#priceHalf").after(n);
        document.querySelector("#priceToggle").innerHTML = Round(Convert(toggles)) + "+ USD";
        n = document.createElement("small");
        n.innerText = " ($" + toggles + "+ CAD)";
        document.querySelector("#priceToggle").after(n);
        document.querySelector("#priceAnimated").innerHTML = Round(Convert(animated)) + "+ USD";
        n = document.createElement("small");
        n.innerText = " ($" + animated + "+ CAD)";
        document.querySelector("#priceAnimated").after(n);
        document.querySelector("#priceArms").innerHTML = Round(Convert(arms)) + "+ USD";
        n = document.createElement("small");
        n.innerText = " ($" + arms + "+ CAD)";
        document.querySelector("#priceArms").after(n);
        document.querySelector("#priceArmSingle").innerHTML = Round(Convert(armSingle)) + "+ USD";
        n = document.createElement("small");
        n.innerText = " ($" + armSingle + "+ CAD)";
        document.querySelector("#priceArmSingle").after(n);
        document.querySelector("#priceOutfit").innerHTML = Round(Convert(outfit)) + "+ USD";
        n = document.createElement("small");
        n.innerText = " ($" + outfit + "+ CAD)";
        document.querySelector("#priceOutfit").after(n);
        document.querySelector("#priceHair").innerHTML = Round(Convert(hair)) + "+ USD";
        n = document.createElement("small");
        n.innerText = " ($" + hair + "+ CAD)";
        document.querySelector("#priceHair").after(n);
        document.querySelector("#priceCheek").innerHTML = Round(Convert(cheekPuff)) + "+ USD";
        n = document.createElement("small");
        n.innerText = " ($" + cheekPuff + "+ CAD)";
        document.querySelector("#priceCheek").after(n);
        document.querySelector("#priceTongue").innerHTML = Round(Convert(tongueOut)) + "+ USD";
        n = document.createElement("small");
        n.innerText = " ($" + tongueOut + "+ CAD)";
        document.querySelector("#priceTongue").after(n);
        document.querySelector("#priceBridger").innerHTML = Round(Convert(bridger)) + "+ USD";
        n = document.createElement("small");
        n.innerText = " ($" + bridger + "+ CAD)";
        document.querySelector("#priceBridger").after(n);
    }
    // Otherwise, display only the original CAD price.
    else
    {
        document.querySelector("#priceHalf").innerHTML = "$" + half + "+ CAD";
        document.querySelector("#priceFull").innerHTML = "$" + full + "+ CAD";
        document.querySelector("#priceToggle").innerHTML = "$" + toggles + " CAD";
        document.querySelector("#priceAnimated").innerHTML = "$" + animated + " CAD";
        document.querySelector("#priceArms").innerHTML = "$" + arms + "+ CAD";
        document.querySelector("#priceAlternate").innerHTML = "$" + alternate + "+ CAD";
        document.querySelector("#priceCheek").innerHTML = "$" + cheekPuff + "+ CAD";
        document.querySelector("#priceTongue").innerHTML = "$" + tongueOut + "+ CAD";
        document.querySelector("#priceBridger").innerHTML = "$" + bridger + "+ CAD";
    }
    connect();
};
// Open the request and send it.
request.open("GET", "https://www.bankofcanada.ca/valet/observations/FXCADUSD/json?recent=1", true);
request.send();
