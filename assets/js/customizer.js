$( document ).ready( function() {

   /**
    *
    * strict mode
    *
    */

    'use strict';

   /**
    *
    * add customizer code to website on window load
    *
    */

    $( window ).load( function() {

        var head = document.getElementsByTagName( 'head' )[0];
        var link = document.createElement( 'link' );

        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = '_assets/_css/customizer.css';
        link.media = 'all';

        head.appendChild( link );

        var customizerWithHeader = '<div id="customizer" class="customizer-with-header"><div class="customizer-button"><i class="fa fa-cogs"></i></div><div class="padding"><h5 class="title">Header color</h5><h5 class="element" data-action="header-version-1">Navy blue</h5><h5 class="element inactive" data-action="header-version-2">Yellow</h5><hr /><h5 class="title">Layout style</h5><h5 class="element" data-action="wrapper-wide">Wide</h5><h5 class="element inactive" data-action="wrapper-boxed">Boxed</h5></div></div>';
        var customizerWithoutHeader = '<div id="customizer" class="customizer-without-header"><div class="customizer-button"><i class="fa fa-cogs"></i></div><div class="padding"><h5 class="title">Layout style</h5><h5 class="element" data-action="wrapper-wide">Wide</h5><h5 class="element inactive" data-action="wrapper-boxed">Boxed</h5></div></div>';

        if( $( 'header' ).length == 0 ) $( 'body' ).append( customizerWithoutHeader );
        else $( 'body' ).append( customizerWithHeader );

    });

   /**
    *
    * show / hide customizer
    *
    */

    $( 'body' ).on( 'click touchstart', '#customizer .customizer-button', function( event ) {

        event.preventDefault();
        if( !$( this ).hasClass( 'active' ) ) {

            $( '#customizer' ).animate({ 'left': '0' }, 200 );
            $( this ).addClass( 'active' );
        }

        else {

            $( '#customizer' ).animate({ 'left': '-220px' }, 200 );
            $( this ).removeClass( 'active' );
        }

    });

   /**
    *
    * actions
    *
    */

    $( 'body' ).on( 'click touchstart', '#customizer h5.element', function( event ) {

        event.preventDefault();

        if( !$( this ).hasClass( 'inactive' ) ) return;
        else {

            var action = $( this ).data( 'action' );
            switch( action ) {

                case 'header-version-1':

                    $( this ).removeClass( 'inactive' );
                    $( this ).siblings( 'h5.element[data-action="header-version-2"]' ).addClass( 'inactive' );

                    $( 'header, .responsive-menu' ).css({ 'display': 'none' });
                    $( 'header.header-v1, .responsive-menu[data-for="header-v1"]' ).css({ 'display': 'block' });

                    $.martanianSetUsedHeader();

                break;

                case 'header-version-2':

                    $( this ).removeClass( 'inactive' );
                    $( this ).siblings( 'h5.element[data-action="header-version-1"]' ).addClass( 'inactive' );

                    $( 'header, .responsive-menu' ).css({ 'display': 'none' });
                    $( 'header.header-v2, .responsive-menu[data-for="header-v2"]' ).css({ 'display': 'block' });

                    $.martanianSetUsedHeader();

                break;

                case 'wrapper-wide':

                    $( this ).removeClass( 'inactive' );
                    $( this ).siblings( 'h5.element[data-action="wrapper-boxed"]' ).addClass( 'inactive' );

                    var wrapper = $( '.wrapper' );
                    var contentSize = parseInt( $( 'footer .center' ).css( 'width' ) );
                    var responsiveMenuWidth = contentSize < 625 ? 250 : 300;

                    wrapper.removeClass( 'wrapper-boxed' ).addClass( 'wrapper-wide' );

                    wrapper.css({ 'margin-left': '', 'width': '' }).removeClass( 'wrapper-shadow' );
                    $( 'header, .responsive-menu' ).css({ 'left': '', 'width': '', 'margin-left': '' });
                    $( '.responsive-menu-content' ).css({ 'right': '-'+ responsiveMenuWidth +'px', 'display': 'none' });

                    $.martanianChangeResponsiveMenuVisibilityFlag( false );

                break;

                case 'wrapper-boxed':

                    $( this ).removeClass( 'inactive' );
                    $( this ).siblings( 'h5.element[data-action="wrapper-wide"]' ).addClass( 'inactive' );

                    var wrapper = $( '.wrapper' );
                    var contentSize = parseInt( $( 'footer .center' ).css( 'width' ) );
                    var responsiveMenuWidth = contentSize < 625 ? 250 : 300;

                    wrapper.removeClass( 'wrapper-wide' ).addClass( 'wrapper-boxed' );

                    wrapper.css({ 'margin-left': '', 'width': '' }).removeClass( 'wrapper-shadow' );
                    $( 'header, .responsive-menu' ).css({ 'left': '', 'width': '', 'margin-left': '' });
                    $( '.responsive-menu-content' ).css({ 'right': '-'+ responsiveMenuWidth +'px', 'display': 'none' });

                    $.martanianChangeResponsiveMenuVisibilityFlag( false );

                break;
            }
        }

    });

   /**
    *
    * end of file
    *
    */

});
