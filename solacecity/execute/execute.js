var consoleText;
var params = new URLSearchParams(window.location.search);
var playerName = params.get("name");
var execute = params.get("execute");
var punish = params.get("punish");

var typing = false;
var executing = false;

var script;

window.onload = function()
{
    playerName = playerName.toLowerCase();

    for(var i = 0; i < playerName.length; i++)
        if(i == 0 || playerName[i - 1] == ' ')
        playerName = playerName.substr(0, i) + playerName[i].toUpperCase() + playerName.substr(i + 1);

    var nameCamel = playerName;
    for(var i = 0; i < nameCamel.length; i++)
        if(nameCamel[i] == ' ')
            nameCamel = nameCamel.substr(0, i) + nameCamel.substr(i + 1);
    
    execute = ConvertBool(execute);
    if(punish != null)
        punish = ConvertBool(punish);

    script = [
        ["python /usr/local/src/HoshizoraAptitude/emergency/execute.py", 2750],
        ["What is the name of the Subject in question?", 100],
        ["", 0],
        [playerName, 3250],
        ["", 0],
        ["Execute: " + playerName + "?", 100],
        ["", 0],
    ];

    if(execute)
    {
        script.push(["y", 3750]);
        script.push(["", 0]);
        script.push(["Understood.", 100]);
        script.push(["Booting /usr/local/bin/HoshizoraAptitude/emergency/" + nameCamel + "_execution...", 100]);
    }
    else
    {
        script.push(["n", 3750]);
        script.push(["", 0]);
        script.push(["Understood.", 100]);
        script.push(["Was " + playerName + " condemned?", 100]);
        script.push(["", 0]);
        if (punish)
        {
            script.push(["y", 3250]);
            script.push(["", 0]);
            script.push(["Understood.", 100]);
            script.push(["Booting /usr/local/bin/HoshizoraAptitude/emergency/" + nameCamel + "_punishment...", 100]);
        }
        else
        {
            script.push(["n", 3250]);
            script.push(["", 0]);
            script.push(["Understood.", 100]);
            script.push(["Sparing " + playerName + ".", 100]);
        }
    }
    
    TypeText(script);
}

function ConvertBool(param)
{
    param = param.toLowerCase();
    if(param.includes("t") || param.includes("y"))
        return true;
    else
        return false;
}

async function TypeText(script)
{
    for(var i = 0; i < script.length; i++)
    {
        await new Promise(resolve => setTimeout(resolve, script[i][1]));
        typing = true;
        if ($("#console").html()[$("#console").html().length - 1] == '_')
            $("#console").html($("#console").html().substr(0, $("#console").html().length - 1));
        for (var j = 0; j < script[i][0].length; j++)
        {
            $("#console").html($("#console").html() + script[i][0][j]);
            await new Promise(resolve => setTimeout(resolve, 50));
        }
        $("#console").html($("#console").html() + "<br/>");

        if(i == script.length - 1)
            $("#console").html($("#console").html() + "<a class=\"user\">admin@HoshizoraAptitude</a>:<a class=\"consoleTilde\">~</a>$ ");
        
        typing = false;
    }
}

setInterval(function()
{
    if(!typing){
        if($("#console").html()[$("#console").html().length - 1] != '_')
            $("#console").html($("#console").html() + '_')
        else
            $("#console").html($("#console").html().substr(0, $("#console").html().length - 1));
    }
}, 500)

setInterval(function()
{
    var text = $("#title").html();
    $("#title").html(text.substr(1) + text[0]);
}, 250)