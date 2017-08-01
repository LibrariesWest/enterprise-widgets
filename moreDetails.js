/*
    Type: Script Only
    Code: MOREDETAILS
    Name: More details
    Description: Displays a more details link for search results.
    Selected fields: None
    Bound JavaScript Function: moreDetailsResultLink
*/

function moreDetailsResultLink() {
    var resultdisplays = jQuery('div.results_cell');
    if (resultdisplays != null && resultdisplays.length > 0) {
        jQuery.each(resultdisplays, function(i, r) {
            var resultid = r.id.replace('results_cell', '');
            var moredetailsurl = jQuery('div.results_cell#results_cell' + resultid + ' a#detailLink' + i).attr('href');
            var moredetailsbtn = '<div class="amazonButton"><input class="button" title="See further details" onclick="window.location = \'https://www.librarieswest.org.uk' + moredetailsurl + '\'" value="More details" type="button"></div>';
            var resultsbtnsdiv = jQuery('div#results_cell' + resultid +' div.results_right');
            if (resultsbtnsdiv != null && resultsbtnsdiv.length > 0) resultsbtnsdiv.append(moredetailsbtn);
        });
    }
}