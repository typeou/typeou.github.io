// Price data in CAD
var base = 2650, toggles = 15, animated = 30, arms = 75, armSingle = 45, cheekPuff = 15, tongueOut = 60, bridger = 180, bridgerPlus = 90, outfit = 180, hair = 300;
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
        document.querySelector("#priceBase").innerHTML = Round(Convert(base)) + "+ USD";
        var n = document.createElement("small");
        n.innerText = "$" + base + "+ CAD";
        document.querySelector("#priceBase").after(n);
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
        document.querySelector("#priceBridgerPlus").innerHTML = Round(Convert(bridgerPlus)) + "+ USD";
        n = document.createElement("small");
        n.innerText = " ($" + bridgerPlus + "+ CAD)";
        document.querySelector("#priceBridgerPlus").after(n);
    }
    // Otherwise, display only the original CAD price.
    else
    {
        document.querySelector("#priceBase").innerHTML = "$" + base + "+ CAD";
        document.querySelector("#priceToggle").innerHTML = "$" + toggles + " CAD";
        document.querySelector("#priceAnimated").innerHTML = "$" + animated + " CAD";
        document.querySelector("#priceArms").innerHTML = "$" + arms + "+ CAD";
        document.querySelector("#priceCheek").innerHTML = "$" + cheekPuff + "+ CAD";
        document.querySelector("#priceTongue").innerHTML = "$" + tongueOut + "+ CAD";
        document.querySelector("#priceBridger").innerHTML = "$" + bridger + "+ CAD";
        document.querySelector("#priceBridgerPlus").innerHTML = "$" + bridgerPlus + "+ CAD";
    }
    connect();
};
// Open the request and send it.
request.open("GET", "https://www.bankofcanada.ca/valet/observations/FXCADUSD/json?recent=1", true);
request.send();
