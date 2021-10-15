const queueId = "615cc9624645c91026aa0587", queueId2 = "6168f351645d6a122c62ece1", doneId = "615cc9624645c91026aa0589";

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
            // If the card isn't in the "Done" list
            if (cards[i]["idList"] != doneId)
            {
                if (cards[i]["idList"] == queueId || cards[i]["idList"] == queueId2)
                    queueHTML = formatLink(queueHTML, cards[i]["name"]);
                else
                    progressHTML = formatLink(progressHTML, cards[i]["name"]);
            }
        }

        document.querySelector("#inProgress").innerHTML = progressHTML == "" ? "None" : progressHTML;
        document.querySelector("#inQueue").innerHTML = queueHTML == "" ? "None" : queueHTML;
    }
    // Otherwise, display error.
    else
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