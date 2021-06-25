

$(function () {
    // 菜单
    $('#menus').click(function () {
        if ($('.menus-box').is(':hidden')) {
            $('.menus-box').slideDown()
        } else {
            $('.menus-box').hide()
        }
    })

    var flagClick;

    $('body:not(.human)').click(function (e) {
        e = window.event || e;
        if (flagClick == true) {
            if (e.stopPropagation) {
                e.stopPropagation();
            } else {
                e.cancelBubble = true;
            }
            $('#menus').removeClass('welon');
            $('.menus-box').hide()
            flagClick = false;
        }
    })
    $('#menus').click(function (e) {
        flagClick = true;
        e = window.event || e;
        if (e.stopPropagation) {
            e.stopPropagation();
        } else {
            e.cancelBubble = true;
        }
        // $(this).addClass('welon')
    });


    //年报
    var lenLi = $('.yearsub-box li').length;
    var widLi = $('.yearsub-box li').height();
    var moveLi = widLi + 23;
    var index = 0;
    console.log(lenLi)
    $('.yearsub-box ul').height(moveLi * (lenLi - 1));
    // $('.yearsub-box ul')
    $('.year-r .next').click(function () {
        index++;
        if (lenLi > 4) {
            if (lenLi - index < 4) {
                index = lenLi - index;
            }
            $('.yearsub-box ul').stop().animate({ top: -index * moveLi })
        }
    })
    $('.year-r .prev').click(function () {
        index--;
        if (index <= 0) {
            index = 0
        }
        $('.yearsub-box ul').stop().animate({ top: -index * moveLi })
    })

    function tabShow(oNav, oCon, sEvent) {
        var oElem = oNav.children();
        oCon.hide().eq(0).show();
        oElem.each(function (index) {
            $(this).bind(sEvent, function () {
                $(this).addClass('active').siblings().removeClass('active');
                oCon.hide().eq(index).show();
            })
        })
    }
    tabShow($('.zcwj-tabs ul'), $('.zcwj-tacy1'), 'click')
    tabShow($('.sqr-1'), $('.sqr-2'), 'click')



    /* 搜索 输入框 输入*/
    $(".searchul li").click(function() {
        $(this).addClass("active").siblings().removeClass("active");
    });
    $('.text').click(function() {
        if (!$(this).val()) {
            setTimeout(function() {
                $('.hot-list').show();
                $(".search").addClass("actsea");
            }, 100);
        } else {
            setTimeout(function() {
                $('.hot-list').show();
                $(".search").addClass("actsea");
            }, 100);
        }
    });
    $('.text').on("input", function () {
        if ($(this).val()) {
            $('.hot-list').show();
            $(".search").addClass("actsea");
        } else { }
    });
    $('.hot-list ul').on("click", "li", function () {
        var text = $(this).children('a').text();
        $('.text').val(text);
    });
    $('.searchlist').on("click", "li", function () {
        var text = $(this).children('a').text();
        $('.text').val(text);
    });
    $('body:not(.search)').click(function () {
        e = window.event || e;
        if (e.stopPropagation) {
            e.stopPropagation();
        } else {
            e.cancelBubble = true;
        }
        $('.hot-list').hide();
        $(".search").removeClass("actsea");
    });

})
