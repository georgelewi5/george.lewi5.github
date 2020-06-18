$(function() {
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 1) {
            $(".social-bar").addClass('shrink');
        } else {
            $(".social-bar").removeClass("shrink");
        }
    });
});
$(function() {
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 1) {
            $(".l").addClass('shrink');
        } else {
            $(".l").removeClass("shrink");
        }
    });
});
document.addEventListener("deviceready", onDeviceReady, false);
    function scroll() 
    {
        myScroll = new IScroll('.wrapper', { mouseWheel:true });
    }
    
          function onDeviceReady() 
    {   
        scroll();