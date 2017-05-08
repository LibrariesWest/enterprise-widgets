/*
    Type: Script Only
    Code: HOLDFEE
    Name: Hold fees warning on detailed display page
    Description: Widget to display some text on detailed displays warning users that reservation / hire charges may apply.
    Selected fields: None
    Bound JavaScript Function: holdFee
*/

function holdFee()
{
    var url = encodeURIComponent(window.location);
    var title = document.title;
    $$('.detail_main')[0].insert(
        {
            "bottom": "<div style='margin-right:10px; height:35px; float:right; display:inline; padding-left:40px; background-image:url(/custom/web/hold_warning.png); background-repeat:no-repeat; background-position: top left; '><a style='line-height:15px;' href='/client/en_GB/default/?rm=RESERVATION+CH0|||1|||0|||true&dt=list' target='_new'><b>Charges may apply!</b><BR>Click here for more details</a></div>"
        }
    );
}