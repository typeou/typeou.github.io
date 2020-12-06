var totalStories = 0, stories = [];

window.onload = function()
{
    for(var i = 0; i < Math.random() * 4; i++)
        CreateStory();
    Refresh();
}

function CreateStory()
{
    totalStories++;
    var story = $("#base").clone().insertAfter($("#base"));
    story.removeAttr("id");
    story.find("h2").html("News Title " + totalStories);
    stories.push(story);
}

setInterval(function()
{
    if (Math.random() < 0.2)
    {
        CreateStory();
        $("#notif").css("visibility", "visible");
    }
}, 1000)

function Refresh()
{
    for(var i = 0; i < stories.length; i++)
        stories[i].removeAttr("hidden");
    $("#notif").css("visibility", "hidden");
}