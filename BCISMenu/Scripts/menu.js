
(function menuInit() {

    var setupDefaultMenuCollapse = function () {
        if ($(window).width() < 992) {
            // do something for small screens
            $('#menuNavbar .submenu > .collapse').collapse('hide');
        }
            //else if ($(window).width() >= 768 && $(window).width() <= 992) {
            //    // do something for medium screens
            //}
            //else if ($(window).width() > 992 && $(window).width() <= 1200) {
            //    // do something for big screens
            //}
        else {
            // do something for huge screens
            $('#menuNavbar .submenu>.collapse').collapse('show');
        }
    };

    setupDefaultMenuCollapse();

    //#region Events
    $(window).resize(setupDefaultMenuCollapse);

    $('#menuNavbar .submenu > a').click(function clickSubmenu(e) {
        e.stopPropagation();
        $('#menuNavbar .submenu > .collapse').collapse('hide');
        $(this).next('.collapse').collapse('toggle');
    });

    $('#menuNavbar > ul > li  > a').click(function clickDropdown(e) {
        if ($(window).width() < 992) {
            $('.submenu > .collapse').collapse('hide');
        }
    });
    //#endregion

    //#region side menu
    $('#menuNavbarOut .submenu > .collapse').collapse('hide');

    $('#menuNavbarOut .submenu > a').click(function clickSubmenu(e) {
        e.stopPropagation();
        $('#menuNavbarOut .submenu > .collapse').collapse('hide');
        $(this).next('.collapse').collapse('toggle');
    });

    $('#menuNavbarOut .dropdown > a').click(function clickSubmenu(e) {
        $('#menuNavbarOut .submenu > .collapse').collapse('hide');
    });
    //#endregion


    var $sideMenu = $('#menuNavbarOut');
    var $navHeader = $('nav.navbar.navbar-default .navbar-header');

    $sideMenu.on('show.bs.offcanvas', function (e) {
        $('#hamburger > i').toggle();
        $('#hamburger > span').toggle();
        $('#menu-background').addClass("canvas-sliding");
        $('#menuNavbar > ul > li').addClass('disabled');
        $('#menuNavbar > ul > li > a').addClass('disabled');
    });
    $sideMenu.on('hidden.bs.offcanvas', function (e) {
        $('#hamburger > i').toggle();
        $('#hamburger > span').toggle();
        $('#menu-background').removeClass("canvas-sliding");
        $('#menuNavbar > ul > li').removeClass('disabled');
        $('#menuNavbar > ul > li > a').removeClass('disabled');
    });
       

    $('#hamburger').click(function () {
        $('#menuNavbar > ul > li.dropdown').removeClass('open');
    });

})();