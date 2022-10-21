addEventListener("resize", () => { connect() });
addEventListener("load", () => { bodyHovers() });

var divs, vein, veins = [], page;

function connect()
{
    if (divs.length > 0)
    {
        var rect = page.getBoundingClientRect();
        veins[0][0].setAttribute("x1", (rect.left + rect.right) / 2);
        veins[0][0].setAttribute("y1", (rect.top + rect.bottom) / 2);
        veins[0][1].setAttribute("x1", (rect.left + rect.right) / 2);
        veins[0][1].setAttribute("y1", (rect.top + rect.bottom) / 2);
        veins[0][2].setAttribute("x1", (rect.left + rect.right) / 2);
        veins[0][2].setAttribute("y1", (rect.top + rect.bottom) / 2);
        rect = divs[0].getBoundingClientRect();
        veins[0][0].setAttribute("x2", window.scrollX + (rect.left + rect.right) / 2);
        veins[0][0].setAttribute("y2", window.scrollY + (rect.top + rect.bottom) / 2);
        veins[0][1].setAttribute("x2", window.scrollX + (rect.left + rect.right) / 2);
        veins[0][1].setAttribute("y2", window.scrollY + (rect.top + rect.bottom) / 2);
        veins[0][2].setAttribute("x2", window.scrollX + (rect.left + rect.right) / 2);
        veins[0][2].setAttribute("y2", window.scrollY + (rect.top + rect.bottom) / 2);

        for (var i = 1; i < divs.length; i++)
        {
            rect = divs[i-1].getBoundingClientRect();
            veins[i][0].setAttribute("x1", window.scrollX + (rect.left + rect.right) / 2);
            veins[i][0].setAttribute("y1", window.scrollY + (rect.top + rect.bottom) / 2);
            veins[i][1].setAttribute("x1", window.scrollX + (rect.left + rect.right) / 2);
            veins[i][1].setAttribute("y1", window.scrollY + (rect.top + rect.bottom) / 2);
            veins[i][2].setAttribute("x1", window.scrollX + (rect.left + rect.right) / 2);
            veins[i][2].setAttribute("y1", window.scrollY + (rect.top + rect.bottom) / 2);
            rect = divs[i].getBoundingClientRect();
            veins[i][0].setAttribute("x2", window.scrollX + (rect.left + rect.right) / 2);
            veins[i][0].setAttribute("y2", window.scrollY + (rect.top + rect.bottom) / 2);
            veins[i][1].setAttribute("x2", window.scrollX + (rect.left + rect.right) / 2);
            veins[i][1].setAttribute("y2", window.scrollY + (rect.top + rect.bottom) / 2);
            veins[i][2].setAttribute("x2", window.scrollX + (rect.left + rect.right) / 2);
            veins[i][2].setAttribute("y2", window.scrollY + (rect.top + rect.bottom) / 2);
        }
    }

    vein.setAttribute("height", vein.getBBox().y * 2 + vein.getBBox().height);
}

function bodyHovers()
{
    divs = document.querySelector("#body").children;
    page = document.querySelector("#currentPage");
    vein = document.querySelector("#veins");

    var rect = page.getBoundingClientRect();
    if (divs.length > 0)
    {
        var line1 = document.createElementNS("http://www.w3.org/2000/svg","line");
        line1.setAttribute("x1", (rect.left + rect.right) / 2);
        line1.setAttribute("y1", (rect.top + rect.bottom) / 2);
        rect = divs[0].getBoundingClientRect();
        line1.setAttribute("x2", window.scrollX + (rect.left + rect.right) / 2);
        line1.setAttribute("y2", window.scrollY + (rect.top + rect.bottom) / 2);
        var line2 = line1.cloneNode();
        var line3 = line1.cloneNode();
        line3.classList.add("pulseVein");

        vein.appendChild(line3);
        vein.appendChild(line2);
        vein.appendChild(line1);

        veins.push([line1, line2, line3]);

        for (var i = 1; i < divs.length; i++)
        {
            line1 = document.createElementNS("http://www.w3.org/2000/svg","line");
            rect = divs[i-1].getBoundingClientRect();
            line1.setAttribute("x1", window.scrollX + (rect.left + rect.right) / 2);
            line1.setAttribute("y1", window.scrollY + (rect.top + rect.bottom) / 2);
            rect = divs[i].getBoundingClientRect();
            line1.setAttribute("x2",window.scrollX +  (rect.left + rect.right) / 2);
            line1.setAttribute("y2", window.scrollY + (rect.top + rect.bottom) / 2);
            var line2 = line1.cloneNode();
            var line3 = line1.cloneNode();
            line3.classList.add("pulseVein");

            vein.appendChild(line3);
            vein.appendChild(line2);
            vein.appendChild(line1);

            veins.push([line1, line2, line3]);
        }
    }

    for (var i = 0; i < divs.length; i++)
    {
        const pulses = [ veins[i][1], veins[i][2] ];
        divs[i].addEventListener("pointerenter", (e) =>
        {
            e.target.classList.add("beatPlay");
            pulses[0].classList.add("beatPlay");
            pulses[1].classList.add("beatPlay");
        });
        divs[i].addEventListener("animationend", (e) =>
        {
            e.target.classList.remove("beatPlay");
            pulses[0].classList.remove("beatPlay");
            pulses[1].classList.remove("beatPlay");
        });
    }

    vein.setAttribute("height", vein.getBBox().y * 2 + vein.getBBox().height);
}
