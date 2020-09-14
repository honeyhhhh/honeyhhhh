<!--崩溃欺骗-->
var OriginTitle = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        $('[rel="png"]').attr('href', "/images/favicon.png");
        document.title = '页面找不到了';
        clearTimeout(titleTime);
    }
    else {
        $('[rel="png"]').attr('href', "/images/favicon.png");
        document.title = '(ฅ>ω<*ฅ) 噫又好了~' + OriginTitle;
        titleTime = setTimeout(function () {
            document.title = OriginTitle;
        }, 2000);
    }
});
