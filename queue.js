const queueId = "615cc9624645c91026aa0587", progressId = "615ccb9de59a7e65e145fdb3";

// Retrieving card list from Trello
var trelloRequest = new XMLHttpRequest();
// This happens once the request receives a response.
trelloRequest.onreadystatechange = function() {
    // If the cards were successfully received, sort and display the contents.
    if (this.readyState == 4 && this.status == 200)
    {
        const cards = JSON.parse(this.responseText);
        var progressHTML = "", queueHTML = "";

        for (var i = 0; cards[i] != null; i++)
        {
            if (!cards[i]["name"].includes("[Add-ons]") && cards[i]["idList"] == queueId)
            {
                if (cards[i]["idList"] == queueId)
                    queueHTML = formatLink(queueHTML, cards[i]["name"]);
                else if (cards[i]["idList"] == progressId)
                    progressHTML = formatLink(progressHTML, cards[i]["name"]);
            }
        }

        document.querySelector("#inProgress").innerHTML = progressHTML == "" ? "None" : progressHTML;
        document.querySelector("#inQueue").innerHTML = queueHTML == "" ? "None" : queueHTML;
    }
    // Otherwise, display error.
    else if (this.readyState == 4 && this.status >= 400)
    {
        document.querySelector("#inProgress").innerHTML = "Error retrieving data";
        document.querySelector("#inQueue").innerHTML = "Error retrieving data";
    }
};
// Open the request and send it.
trelloRequest.open("GET", "https://api.trello.com/1/boards/S1Esq1jw/cards", true);
trelloRequest.send();

function formatLink(list, text)
{
    // If it (probably) has a properly formatted Twitter link included
    if (text.includes('(') && text.includes('@') && text.includes(')'))
    {
        // Pull the Twitter handle from the string
        const twt = text.substr(text.indexOf('@') + 1, text.length - text.indexOf('@') - 2);
        // Pull the name from the string
        const name = text.substr(0, text.indexOf('(') - 1);
        // Combine them into a link to their Twitter page, using the name as the display text
        text = "<a href=\"https://twitter.com/" + twt + "\">" + name + "</a>";
    }

    // Append to list, including a comma if the list already has elements
    if (list.length > 0)
        return list + ", " + text;
    else
        return text;
}
