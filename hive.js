/*
    Type: Script Only
    Code: HIVE
    Name: Hive
    Description: Hive link on title details page
    Selected fields: 'First Title value, for Searching', 'ISBN'
    Bound JavaScript Function: hive
*/

function hive() {
    var baseHiveUrl = 'https://www.hive.co.uk/Search/Keyword?keyword=';
    var itemTitleHive = '';
    var itemTitleHiveDiv = jQuery('div#detail0_INITIAL_TITLE_SRCH div');
    if (itemTitleHiveDiv && itemTitleHiveDiv.length > 0) {
        itemTitleHive = itemTitleHiveDiv.text();
        var hiveUrl = baseHiveUrl + itemTitleHive.replace(/'/g,"");
        var butHiveHtml = '<div id="hiveButtonDiv" class="amazonButton"><input class="button" title="Buying from Hive supports independent book shops" onclick="window.open(\'' + hiveUrl + '\',\'_newtab\')" value="Find on Hive.co.uk" type="button"></div>';
        var detailHiveDiv = jQuery('div.detail_main_wrapper div.detail_main div.detailActions');
        if (detailHiveDiv) detailHiveDiv.append(butHiveHtml);
    } else {
        var resultTitleDivs = jQuery('div.INITIAL_TITLE_SRCH_value');
        if (resultTitleDivs != null && resultTitleDivs.length > 0) {
            jQuery.each(resultTitleDivs, function(i, r) {
                itemTitleHive = jQuery(r).text();
                var hiveUrl = baseHiveUrl + itemTitleHive.replace(/'/g,"");
                var butHiveHtml = '<div class="amazonButton"><input class="button" title="Buying from Hive supports independent book shops" onclick="window.open(\'' + hiveUrl + '\',\'_newtab\')" value="Find on Hive" type="button"></div>';
                var resultsHiveDiv = jQuery(r).closest('div.results_cell').find('div.results_right');
                if (resultsHiveDiv != null && resultsHiveDiv.length > 0) resultsHiveDiv.append(butHiveHtml);
            });
        }
    }
}