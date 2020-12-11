var subreddits = [];

function CreateCabinet()
{
    var newCabinet = $("#cabinetBase").clone().appendTo($("#container"));
    newCabinet.removeAttr("id");
    newCabinet.removeAttr("hidden");
    newCabinet.find("h2").html("Cabinet " + ($("#container").find("div").length - 1))
}

function AddFile()
{
    var cabinetNum = $("#cabinet").val();
    if(cabinetNum > ($("#container").find("div").length - 1) || cabinetNum < 1)
        alert("Invalid cabinet!");
    else
    {
        var subName = $("#name").val();
        var found = false;
        for (var i = 0; i < subreddits.length; i++)
            if(subName.toLowerCase() == subreddits[i].toLowerCase())
            {
                alert("Cannot create a duplicate subreddit!")
                found = true;
                break;
            }

        if (!found)
        {
            subName = "r/" + subName;
            subreddits.push(subName);
            var newSub = $("#nameBase").clone().html(subName).appendTo($("#container").find("div")[cabinetNum]);
            newSub.removeAttr("id");
            newSub.removeAttr("hidden");
            $("#name").val("");
        }
    }
}

function ColourCode(cabinet)
{
    $(cabinet).parent().css("background-color", $(cabinet).val());
}