jQuery(document).ready(function($) {

    /* ==========================================
     * Module Global Variables
     * ======================================= */
    var slideSpeed = 600;
    var fadeSpeed = 300;

    // html div with id iit-gh-query-check is used to determine which media query is being used.
    // CSS z-index property is set based on query in css file. Mobile through Desktop (0-5).
    // The z-index value is converted to an int here and in the window resize handler for comparison.
    // Smartphone Port = 0, Smartphone Land = 1, Tablet Port = 2, Tablet Land = 3, Std Desktop = 4, Default = 5
    var $queryCheckDiv = $('#iit-gh-query-check');
    var mediaQueryIndex = parseInt($queryCheckDiv.css('z-index'));


    /* ==========================================
     * On Document Ready Setup
     * ======================================= */
    $('body').append('<div id="iit-gh-secondary-nav-overlay"></div>');  
    
    /** /
    $('#iit-gh-mobile-search').css('display', 'none');
    /**/
    
    if (mediaQueryIndex <= 1) {
        $('#iit-gh-primary-nav').css('display', 'none');
    }


    /* ==========================================
     * Primary Nav Click Handler
     * ======================================= */
    $('#iit-gh-primary-nav a').click(function(event) {
        if (mediaQueryIndex > 1) {
            if (!$(this).hasClass('iit-gh-primary-nav-nochild')) {
                event.preventDefault();

                // Get id of the clicked link and related menu
                var thisId = $(this).attr('id');
                var menuId = 'iit-gh-menu-' + thisId.substring(11);

                // Check to see if same nav item has been clicked, close menu if so
                if ($(this).hasClass('iit-gh-nav-active')) {
                    $('#iit-gh-menu-container').slideUp(slideSpeed, function(){
                        $('#iit-gh-menu-wrapper').removeClass('iit-gh-menu-wrapper-open');
                        $('#iit-gh-menu-wrapper').addClass('iit-gh-menu-wrapper-closed');
                        $('#iit-gh-primary-nav a').removeClass('iit-gh-nav-active');
                        $('#iit-gh-menu-container > nav').removeClass('iit-gh-menu-active').css('display', '');
                    });
                    $('#iit-gh-menu-exit').slideUp(slideSpeed);
                    return;
                }

                // Add active class to clicked nav item and related menu
                $('#iit-gh-primary-nav a').removeClass('iit-gh-nav-active');
                $(this).addClass('iit-gh-nav-active');
                $('#iit-gh-menu-container > nav').removeClass('iit-gh-menu-active');
                $('#' + menuId).addClass('iit-gh-menu-active');

                // Fade Menu to selected one
                $('#iit-gh-menu-container > nav').fadeOut(fadeSpeed);
                $('#' + menuId).fadeIn(fadeSpeed);    

                // If the menu wrapper is closed slide it open
                if ($('#iit-gh-menu-wrapper').hasClass('iit-gh-menu-wrapper-closed')) {
                    $('#iit-gh-menu-container').slideDown(slideSpeed, function(){
                        $('#iit-gh-menu-wrapper').removeClass('iit-gh-menu-wrapper-closed');
                        $('#iit-gh-menu-wrapper').addClass('iit-gh-menu-wrapper-open');
                    });
                    $('#iit-gh-menu-exit').slideDown(slideSpeed);
                }
            }
        }
    }); // end Primary Nav Click Handler


    /* ==========================================
     * Close Bar Click Handler
     * ======================================= */
    $('#iit-gh-menu-exit').click(function(event) {
        if ($('#iit-gh-menu-wrapper').hasClass('iit-gh-menu-wrapper-open')) {
            $('#iit-gh-menu-container').slideUp(slideSpeed, function(){
                $('#iit-gh-menu-wrapper').removeClass('iit-gh-menu-wrapper-open');
                $('#iit-gh-menu-wrapper').addClass('iit-gh-menu-wrapper-closed');
                $('#iit-gh-primary-nav a').removeClass('iit-gh-nav-active');
                $('#iit-gh-menu-container > nav').removeClass('iit-gh-menu-active').css('display', '');
            });
            $('#iit-gh-menu-exit').slideUp(slideSpeed);
        }
    }); // end Close Bar Click Handler


    /* ==========================================
     * Top Bar Audiences Click Handler
     * ======================================= */
    $('#iit-gh-header-topbar-audiences').click(function(event) {
        var $element = $('#iit-gh-secondary-nav');
        if ($element.css('display') === 'none') {
            $element.css('display', 'block').animate({left:"0"});
            $('#iit-gh-secondary-nav-overlay').css('display', 'block');
        } else {
            $element.animate({left:"-100%"}, function() {
                $element.css('display', 'none');
                $('#iit-gh-secondary-nav-overlay').css('display', 'none');
            });
        }
    }); // end Top Bar Audiences Click Handler


    /* ==========================================
     * Top Bar Search Click Handler
     * ======================================= */
    /** /
    $('#iit-gh-header-topbar-search').click(function(event) {
        var $element = $('#iit-gh-mobile-search');
        if ($element.css('display') === 'none') {
            $element.slideDown();
        } else {
            $element.slideUp();
        }
    }); // end Top Bar Search Click Handler
    /**/


    /* ==========================================
     * Top Bar Menu Click Handler
     * ======================================= */
    $('#iit-gh-header-topbar-menu').click(function(event) {
        var $element = $('#iit-gh-primary-nav');
        if ($element.css('display') === 'none') {
            $element.slideDown();
        } else {
            $element.slideUp();
        }
    }); // end Top Bar Menu Click Handler


    /* ==========================================
     * Mobile Secondary Nav Overlay Click Handler
     * ======================================= */
    $('#iit-gh-secondary-nav-overlay').mousedown(function(e) {
        $('#iit-gh-secondary-nav').animate({left:"-100%"}, function() {
            $('#iit-gh-secondary-nav').css('display', 'none');
        });
        $('#iit-gh-secondary-nav-overlay').css('display', 'none');
    });

    $('#iit-gh-secondary-nav-overlay').bind('touchend', function(e){
        $('#iit-gh-secondary-nav').animate({left:"-100%"}, function() {
            $('#iit-gh-secondary-nav').css('display', 'none');
        });
        $('#iit-gh-secondary-nav-overlay').css('display', 'none');
    });
    // end Mobile Secondary Nav Overlay Click Handler


    /* ==========================================
     * Window Resize Handler
     * ======================================= */
    $(window).resize(function(){
        mediaQueryIndex = parseInt($queryCheckDiv.css('z-index'));

        if (mediaQueryIndex <= 1) {
            $('#iit-gh-primary-nav').css('display', 'none');
        } else {
            $('#iit-gh-primary-nav').css('display', 'block');
            $('#iit-gh-secondary-nav').css('display', '').css('left', '');
        }
    }); // end Window Resize Handler


}); // end document.ready








