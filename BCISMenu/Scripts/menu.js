
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
    //#endregion

})();