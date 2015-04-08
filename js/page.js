$(function () {
    $(".article a").attr("target", "_blank");
    $(".brand-title,.brand-tagline,nav").remove();
    $(".headerpic img").css("width", "140px")
    $(".headerpic").append('<div class="grcode"><i class="fa fa-qrcode"></i></div>');
    $('#toc').toc({'container': '.article', 'selectors': 'h1,h2,h3', prefix: 'top'});
    $('.article').each(function (i) {
        $(this).find('img').each(function () {
            if ($(this).parent().hasClass('fancybox')) return;
            var url2 = this.src;
            var url = url2.substring(0, url2.length - 4);
            $(this).wrap('<a href="' + url + '" title="' + this.title + '" class="fancybox"></a>');
        });
        $(this).find('.fancybox').each(function () {
            $(this).attr('rel', 'article' + i);
        });
    });
    if ($.fancybox) {
        $('.fancybox').fancybox({
            padding: 0,
            openEffect: 'elastic',
            closeEffect: 'elastic',
            helpers: {
                title: {
                    type: 'inside'
                },
                overlay: {
                    css: {
                        'background': 'rgba(255,255,255,0.5)'
                    }
                }
            }

        });
    }
    ;
    $(".grcode").mouseover(function () {
        grcode();
    }).mouseout(function () {
        $(".qrcodeTable ").empty();
    });
});
function grcode() {
    $(".qrcodeTable").append('<i class="label label-danger">手机UC浏览器点击输入地址栏扫描按钮</i><br>');
    var url = $("link[rel='canonical']").attr('href');
    console.info(url);
    $(".qrcodeTable").qrcode({
        render: "canvas",
        text: url
    });
    $(window).scroll(function () {
        var yy = $(this).scrollTop();//获得滚动条top值
        if ($(this).scrollTop() < 30) {
            $(".qrcodeTable").css({"position": "relative", top: "5px", left: "-50px"});
        } else {
            $(".qrcodeTable").css({"position": "relative", top: yy + "px", left: "-50px"});
        }
    });
}
$(document).ready( function() {
    var sum = $("ul li").length;
    if (sum > 10) {
        $("#toc").css("height","400px") .append('<div id="pageTurning"><input type="button" id="btnPrev" value="Prev"/><input type="button" id="btnNext" value="Next"/></div>');
    };
    var total = Math.ceil((sum) / 10);
    var current = 1;
    $("ul li:gt(9)").hide();
    $("#btnPrev").attr("disabled", "disabled").click( function() {
        $("#btnNext").removeAttr("disabled");
        current -= 1;
        $("ul li").show();
        var indexStart = (current - 1) * 10;
        var indexEnd = indexStart + 9;
        $("li:lt(" + indexStart + "), li:gt(" + indexEnd + ")", $("ul")).hide();
        if (current == 1) $(this).attr("disabled", "disabled");
    });
    $("#btnNext").click( function() {
        $("#btnPrev").removeAttr("disabled");
        current += 1;
        $("ul li").show();
        var indexStart = (current - 1) * 10;
        var indexEnd = current * 10 - 1 > $("ul li").length - 1 ? $("ul li").length - 1 : current * 10 - 1;
        $("li:lt(" + indexStart + "), li:gt(" + indexEnd +")", $("ul")).hide();
        if (current == total) $(this).attr("disabled", "disabled");
    });
    
})