export function ExibirPopUp(layout) {
    $('#base' + layout.popId).css('display','block');

    if(layout.embedarDashboard) {
        var appId = window.location.href.substring(window.location.href.indexOf("app") + 4, window.location.href.indexOf("sheet") - 1);

        var url = window.location.origin + "/single/?appid=" + appId + "&sheet=" + layout.sheetId;
    
        if(layout.showSelectionBar)
            url +=  "&opt=currsel";
    
        var iframePop = $('<iframe style="border:none;width:100%;height:100%; border-top: 1px solid #e8e8e8;">').attr('src',url);
        $(iframePop).closest(".cell").css("z-index", "1000");
    
        $('.popBody','#' + layout.popId).html(''); 
        $('.popBody','#' + layout.popId).append(iframePop);
    } else {
        $('.popBody','#' + layout.popId).html(layout.conteudoHTML); 
    }
}