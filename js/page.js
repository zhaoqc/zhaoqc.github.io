var sum ;
var total ;
var current = 1;
var yy = 0//获得滚动条top值
var xx = 0;
$(function () {
      $(".article a").attr("target", "_blank");
    $(".brand-title,.brand-tagline,nav").remove();
    $(".headerpic img").css("width", "140px");
    $(".headerpic").append('<div class="grcode"><i class="fa fa-qrcode"></i></div>');
    $('#toc').toc({'container': '.article', 'selectors': 'h1,h2,h3', prefix: 'top'}); 
    sum = $("ul li").length;
    if (sum > 10) {
        $("#toc").css("height","400px") 
     //   .append('<div id="pageTurning"><a id="prev" >Prev</a> <a id="next" href="javascript:;" onclick="mnext()">Next</a></div>');
        $("ul li:gt(9)").hide();
        total = Math.ceil(sum / 10);
    }
    if ($('.top-active').css('display') == 'none') {
        alert('sb');
    }

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

function mprev() {
        
        $("#next").attr("onclick","mnext()").attr("href","javascript:;");
        current -= 1;
        $("ul li").show();
        var indexStart = (current - 1) * 10;
        var indexEnd = indexStart + 9;
        $("li:lt(" + indexStart + "), li:gt(" + indexEnd + ")", $("ul")).hide();
        if (current == 1) {
            $("#prev").attr("onclick", "null").removeAttr("href");
            
        }
        
}

function mnext(){
    
        $("#prev").attr("onclick","mprev()").attr("href","javascript:;");
        current += 1;
        $("ul li").show();
        var indexStart = (current - 1) * 10;
        var indexEnd = current * 10 - 1 > $("ul li").length - 1 ? $("ul li").length - 1 : current * 10 - 1;
        $("li:lt(" + indexStart + "), li:gt(" + indexEnd +")", $("ul")).hide();
        if (current == total) {
           $("#next").attr("onclick", "null").removeAttr("href");

        }
        
}


$(window).scroll(function () {
     yy = $(this).scrollTop();
    
    if ($('.top-active').css('display') == 'none') {
      
      
        if (yy > xx) {
            if (current != total ) {
                mnext();
                xx = yy;
            }
        } else if (yy < xx){
            if (total != 1) {
              mprev();
              xx = yy;
            }
                
        }
    }
});