$(function () {
    /**
     * 侧边栏部分-菜单下拉动画
     */
    let mainCon = $('.wgz-con-main');
    mainCon.load('con-pages/indexCon.html');

    $('.wgz-side-main>li').click(function () {
        $(this).next('ul').slideToggle();
        $('.wgz-side-menu').not($(this).next('ul')).slideUp();
        $('.wgz-title-one a').text($(this).children().children().text());
        $('.wgz-title-two a').text('');
    });

    $('.wgz-side-menu>li').click(function () {
        $('.wgz-title-one a').text($(this).parent('ul.wgz-side-menu').prev().children('a').innerText);
        $('.wgz-title-two a').text($(this).children('a').text());
    });

    $('.wgz-head-title').click(function () {
        mainCon.html('');
        mainCon.load('con-pages/indexCon.html');
    });

    $('.wgz-con-showIndexCon').click(function () {
        mainCon.html('');
        mainCon.load('con-pages/indexCon.html');
    });

    $('.wgz-con-showClassify').click(function () {
        mainCon.html('');
        mainCon.load('con-pages/classify.html');

    });

    $('.wgz-con-showTest').click(function () {
        mainCon.html('');
        mainCon.load('con-pages/showTest.html');
    });

    $('.wgz-con-showPaper').click(function () {
        mainCon.html('');
        mainCon.load("con-pages/showPaper.html");
    });
})