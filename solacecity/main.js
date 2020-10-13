$(function() {
    $(".mapping").mouseenter(function(){
        var index = $(this).index();
        $(".segment").eq(index).attr("src","district" + (index + 1) + "highlight.png");
        $("#hover").removeAttr("hidden");
    })

    $(".mapping").mouseleave(function(){
        var index = $(this).index();
        $(".segment").eq(index).attr("src","district" + (index + 1) + ".png");
        $("#hover").attr("hidden", "hidden");
    })

    $(".mapping").mousemove(function(event){
        var hover = $("#hover");
        hover.offset({top:event.pageY + 5, left:event.pageX + 20});
        hover.removeAttr("hidden");

        var index = $(this).index();
        switch(index) {
            case 0:
                ChangeHover("District 1", "District 1 Desc");
                break;
            case 1:
                ChangeHover("District 2", "District 2 Desc");
                break;
            case 2:
                ChangeHover("District 3", "District 3 Desc");
                break;
            case 3:
                ChangeHover("District 4", "District 4 Desc");
                break;
            case 4:
                ChangeHover("District 5", "District 5 Desc");
                break;
            case 5:
                ChangeHover("District 6", "District 6 Desc");
                break;
            case 6:
                ChangeHover("District 7", "District 7 Desc");
                break;
            case 7:
                ChangeHover("District 8", "District 8 Desc");
                break;
            case 8:
                ChangeHover("District 9", "District 9 Desc");
                break;
        }
    })
});

function ChangeHover(title, desc)
{
    $("#hover").children("h1").html(title);
    $("#hover").children("p").html(desc);
}