if (window.location.href.indexOf("#") != -1)
{
    page = window.location.href.substring(window.location.href.indexOf("#") + 1).toLowerCase();
    if (page == "commissions")
        page = "comms";
    else if (page == "kbonkhelp")
        page = "kbonk";

    if (page == "comms" || page == "tos" || page == "contact" || page == "kbonk")
        window.location.replace(page + ".html");
}
