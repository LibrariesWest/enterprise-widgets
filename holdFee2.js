/*
    Type: Script Only
    Code: HOLDFEE2
    Name: Hold fees warning on mouse hover on hold button on search results page
    Description: Hold fees warning on mouse hover on place hold button on search results page
    Selected fields: None
    Bound JavaScript Function: customJavaScript
    Extra notes: 
*/

function customJavaScript () {
    jQuery(document).ready(function(){
        authority = ["/default/", "/test/"];
        var colorHeader = ["#C8E074", "#007363"];
        var colorTextHeader   = ["black", "white"];

        var colorBg = ["white", "black"];
        var colorText = ["black", "black"];

        var messages = [
            "<a target='blank' href ='/client/en_GB/default/?rm=RESERVATION+CH0|||1|||0|||true&dt=list'>You may be charged for reserving this item. Click here to find out more</a>.",
            ""
        ];

        var offsetXposition = ["16%","10%"]
        var currentUrl= "not found";
        var i;

        for(i = 0; i < authority.length; i++){
            if(window.location.href.search(authority[i]) != -1){
                currentUrl = authority[i];
                break;
            }
        }

        if(currentUrl.search("/default/") != -1){
            jQuery(".button[value='Place Reservation']").mouseover(function(){
                var id = "msg" + jQuery(this).attr("tabindex");
                jQuery(this).before("<div align='left' id='" + id + "' style='z-index: 99999; background-color:"+ colorBg[i] +"; color:" + colorText[i] + "; position:absolute; top:" + offsetXposition[i] + "; left:65%; font-size: 14px;'><div style='background-color:" + colorHeader[i] + ";color: "+ colorTextHeader[i] + "'><b>Reservation fees</b></div>"+ msg[i] +" </div>");
            });
            jQuery(".button[value='Place Reservation']").mouseout(function(){
                var id = "msg" + jQuery(this).attr("tabindex");
                setTimeout(function(){ jQuery("#" + id).remove(); }, 2000);
            });
        }
    });
}