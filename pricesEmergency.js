// Price data in CAD
var base = 2920, discounted = 2450;
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
        document.querySelector("#priceDiscounted").innerHTML = Round(Convert(discounted)) + "+ USD <small>$" + discounted + "+ CAD</small>";
        document.querySelector("#priceBase").innerHTML = "<del>" + Round(Convert(base)) + "+ USD ($" + base  + "+ CAD)</del>";
    }
    // Otherwise, display only the original CAD price.
    else
    {
        document.querySelector("#priceDiscounted").innerHTML = "$" + discounted + "+ CAD";
        document.querySelector("#priceBase").innerHTML = "<del>$" + base + "+ CAD</del>";
    }
    connect();
};
// Open the request and send it.
request.open("GET", "https://www.bankofcanada.ca/valet/observations/FXCADUSD/json?recent=1", true);
request.send();
