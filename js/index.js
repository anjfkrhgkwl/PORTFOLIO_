$(function () {
    window.onload = function () {
        $('html,body').animate({
            scrollTop: 0
        }, 300);
        return false;
    } //새로고침하면 스크롤 상단으로 이동

    let tabMenu = $('.tab_menu li');
    let tabList = $('.tab_list');

    tabList.not('.on').hide();

    tabMenu.click(function () {
        let index = $(this).index();

        tabMenu.removeClass('on');
        tabList.removeClass('on');

        $(this).addClass('on');
        tabList.eq(index).addClass('on');
        tabList.hide();
        tabList.eq(index).show();
    });

    let webDesign = $('#webdesign');
    let tabMenuFixed = $('.tab_menu');
    let item = $('#graphicdesign');
    let header = $('#header');

    //console.log(webDesign.offset().top);
    //console.log(webDesign.height());

    let webDesignTop = webDesign.offset().top;
    let itemTop = item.offset().top;

    $(window).scroll(function () {
        let scrollBar = $(window).scrollTop();
        if (scrollBar > webDesignTop + 100 && scrollBar < itemTop - 600) {
            tabMenuFixed.addClass('active');
            header.children('.header').addClass('active')
        } else {
            tabMenuFixed.removeClass('active')
            header.children('.header').removeClass('active')
        }
    });

    let scrollBtn = $('.scroll');

    scrollBtn.click(function () {
        let aboutConst = $('.about');
        $('html, body').animate({
            scrollTop: aboutConst.offset().top
        }, 1800, 'swing');
    });

    scrollBtn.mouseenter(function() {
       scrollBtn.addClass('active')
    })
    scrollBtn.mouseleave(function() {
       scrollBtn.removeClass('active')
    })

    let contactLink = $('.contact_link_none a');
    contactLink.click(function (event) {
        event.preventDefault();
    }) //클릭 이벤트 무시

    let mainText = $('.text_wrap');
    setInterval(changeTime, 11000)
    
    function changeTime() {
        if(mainText.not('.change')) {
            mainText.addClass('change')
        }
        setTimeout(() => {
            mainText.removeClass('change');
        }, 6000)
    }
   

});