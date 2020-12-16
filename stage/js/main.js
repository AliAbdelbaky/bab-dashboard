$(function() {
    'use strict';
    // Sidebar Togglebtn
    $('.toggle-sidebar')
        .on('click', function() {
            $(".content-area , .sidebar")
                .toggleClass("no-sidebar");
            $(this)
                .toggleClass('rotated-sidbar')
        });
    // Animate  Bell
    $('#notify')
        .on('click', function() {
            $(this).toggleClass('rotated-bell')
        });
    // Toggle Submenu
    $('.toggle-submenu')
        .on('click', function() {
            $(this)
                .find(".fa-angle-right")
                .toggleClass('down');
            $(this)
                .next('.child-links')
                .slideToggle();
        });
    // Toggle Screen
    $('.toggle-screen')
        .on('click', function() {
            $(this)
                .toggleClass('fa-expand fa-compress full-screen');
            if ($(this).hasClass('full-screen')) {
                // Page Is Now FullScreen
                openFullScreen();
            } else {
                // Page Is Not FullScreen
                closeFullScreen()
            }
        });
    // Settings-box
    $('.toggle-settings').on('click', function() {
        $(this).find('i').toggleClass('fa-spin');
        $(this).toggleClass('rotate-settings-btn')
        $('.settings-box').toggleClass('show-settings');
    });
    //-color-theme
    var themeClasses = [];
    $('.color-option li')
        .each(function() {
            themeClasses.push($(this).data('theme'));
        });
    $('.color-option li').on('click', function() {
        $(this).addClass('active').siblings().removeClass('active')
        $('body').removeClass(themeClasses.join(' ')).addClass($(this).data('theme'));
        localStorage.setItem('theme-color', $(this).data('theme'));
    });
    //-font theme
    var fontClasses = [];
    $('.font-options select option').each(function() {
        fontClasses.push($(this).val());
    });
    $('.font-options').on('change', function() {
        $('body').removeClass(fontClasses.join(' ')).addClass($(this).find('option:selected').val());
        localStorage.setItem('font-theme', $(this).find('option:selected').val());
    });
});
//get themes form localStroage
document.body.classList.add(localStorage.getItem('theme-color') || "midnight-theme");
document.body.classList.add(localStorage.getItem('font-theme') || "noto")
    //Full Screen Function
var elem = document.documentElement;
//Open FullScreen
function openFullScreen() {
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.mozRequestFullscreen) {
        elem.mozRequestFullscreen();
    } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen()
    } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen()
    }
}
//Close FullScreen
function closeFullScreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    }
}