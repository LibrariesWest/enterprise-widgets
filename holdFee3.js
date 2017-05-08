/*
    Type: Script Only
    Code: HOLDFEE3
    Name: ILL request link at top of search results page
    Description: ILL request link at top of search results page
    Selected fields: None
    Bound JavaScript Function: holdFee3
*/

function holdFee3()
{
    var url = encodeURIComponent(window.location);
    var title = document.title;
    $$('.resultsToolbar_middle')[0].insert(
        {
            "bottom": "<div style='margin-right:10px; height:35px; float:right; display:inline; padding-left:10px;  '><a style='line-height:15px;' href='/client/en_GB/default/?rm=INTER+LIBRARY+0|||1|||0|||true' >Can't find what you're looking for?</a></div>"
        }
    );
}