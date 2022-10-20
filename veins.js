addEventListener("resize", () => connect());
addEventListener("load", () => connect())

function connect()
{
    var divider = document.querySelector(".divider");
    var vein = document.querySelector("#vein > polyline");
    var divs = document.querySelector("#body").children;

    var points = "";
    points += divider.getBoundingClientRect().left + "," + divider.getBoundingClientRect().bottom + " ";
    for (var i = 0; i < divs.length; i++)
    {
        var rect = divs[i].getBoundingClientRect();
        points += (rect.left + rect.right) / 2 + "," + (rect.top + rect.bottom) / 2 + " ";
    }
    vein.setAttribute("points", points);
}