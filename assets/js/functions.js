$( document ).ready( function() {

   /**
    *
    * strict mode
    *
    */

    'use strict';

   /**
    *
    * global variables
    *
    */

    var intervals = [];
    var isotopes = [];
    var galleryNeighbors;
    var pageWidth;
    var responsiveMenuVisible = false;

   /**
    *
    * window load functions
    *
    */

    $( window ).load( function() {

       /**
        *
        * configure heading slider
        *
        */

        $.martanianConfigureHeadingSlider();

       /**
        *
        * configure offers slider
        *
        */

        $.martanianConfigureOffersSlider();

       /**
        *
        * configure logos slider
        *
        */

        $.martanianConfigureLogosSlider();

       /**
        *
        * configure google maps
        *
        */

        $.martanianConfigureGoogleMaps();

       /**
        *
        * configure progress bars
        *
        */

        $.martanianConfigureProgressBars();

       /**
        *
        * configure isotope
        *
        */

        $.martanianConfigureIsotope();

       /**
        *
        * configure small images sliders
        *
        */

        $.martanianConfigureSmallImagesSlider();

       /**
        *
        * configure references
        *
        */

        $.martanianConfigureReferences();

       /**
        *
        * configure value sliders
        *
        */

        $.martanianConfigureValueSlider();

       /**
        *
        * configure selects
        *
        */

        $.martanianConfigureSelects();

       /**
        *
        * configure responsive menu
        *
        */

        $.martanianConfigureResponsiveMenu();

       /**
        *
        * configure dynamic timelines
        *
        */

        $.martanianConfigureDynamicTimeline();

       /**
        *
        * configure sidebars for responsive view
        *
        */

        $.martanianConfigureSidebarsForResponsiveView();

       /**
        *
        * configure google map width for multiple contacts
        *
        */

        $.martanianConfigureMultipleContactsMap();

       /**
        *
        * configure parallax
        *
        */

        $.martanianSetParallax();

       /**
        *
        * flying header menu manager
        *
        */

        $.martanianFlyingHeaderMenu( 'header.header-v1 .bottom .center' );
        $.martanianFlyingHeaderMenu( 'header.header-v2 .bottom .center' );
        $.martanianFlyingHeaderMenu( '.responsive-menu[data-for="header-v1"]' );
        $.martanianFlyingHeaderMenu( '.responsive-menu[data-for="header-v2"]' );

       /**
        *
        * used header
        *
        */

        $.martanianSetUsedHeader();

       /**
        *
        * configure countdowns
        *
        */

        $.martanianConfigureCountDowns();

       /**
        *
        * coming-soon section full height
        *
        */

        $.martanianComingSoonHeight();

       /**
        *
        * page width
        *
        */

        pageWidth = $( 'body' ).width();

       /**
        *
        * delete loader
        *
        */

        $( '#loader' ).animate({ 'opacity': 0 }, 300 );
        setTimeout( function() {

            $( '#loader' ).remove();

        }, 600 );

       /**
        *
        * end of functions
        *
        */

    });

   /**
    *
    * resize functions
    *
    */

    $.martanianResizeFunction = function() {

       /**
        *
        * page width
        *
        */

        var newPageWidth = $( 'body' ).width();
        if( newPageWidth != pageWidth ) {

           /**
            *
            * configure offers slider
            *
            */

            $.martanianConfigureOffersSlider();

           /**
            *
            * configure references
            *
            */

            $.martanianConfigureReferences();

           /**
            *
            * configure logos slider
            *
            */

            $.martanianConfigureLogosSlider();

           /**
            *
            * configure responsive menu
            *
            */

            $.martanianConfigureResponsiveMenu();

           /**
            *
            * refresh timeline heights
            *
            */

            $.martanianRefreshDynamicTimelineHeight();

           /**
            *
            * refresh gallery sizes
            *
            */

            $.martanianRefreshGallerySizes();

           /**
            *
            * refresh video sizes
            *
            */

            $.martanianRefreshVideoSizes();

           /**
            *
            * configure google map width for multiple contacts
            *
            */

            $.martanianConfigureMultipleContactsMap();

           /**
            *
            * configure sidebars for responsive view
            *
            */

            $.martanianConfigureSidebarsForResponsiveView();

           /**
            *
            * configure parallax
            *
            */

            $.martanianSetParallax();

           /**
            *
            * coming-soon section full height
            *
            */

            $.martanianComingSoonHeight();

           /**
            *
            * flying header menu manager
            *
            */

            $.martanianFlyingHeaderMenu( 'header.header-v1 .bottom .center' );
            $.martanianFlyingHeaderMenu( 'header.header-v2 .bottom .center' );
            $.martanianFlyingHeaderMenu( '.responsive-menu[data-for="header-v1"]' );
            $.martanianFlyingHeaderMenu( '.responsive-menu[data-for="header-v2"]' );

           /**
            *
            * update current page width
            *
            */

            pageWidth = newPageWidth;

           /**
            *
            * end of functions
            *
            */
        }

    };

   /**
    *
    * catch resize actions
    *
    */

    $( window ).resize( function() { $.martanianResizeFunction(); });
    $( window ).bind( 'orientationchange', function() { $.martanianResizeFunction(); });

   /**
    *
    * change menu visibility flag
    *
    */

    $.martanianChangeResponsiveMenuVisibilityFlag = function( visibility ) {

        responsiveMenuVisible = visibility;

    };

   /**
    *
    * configure offers slider
    *
    */

    $.martanianConfigureOffersSlider = function() {

        $( 'section.offer' ).each( function() {

            var section = $( this );
            var slider = section.find( '.values-slider' );
            var elementsCount = slider.children( '.value-single' ).length;
            var contentSize = parseInt( $( 'footer .center' ).css( 'width' ), 10 );
            var elementMargin = contentSize < 1050 ? 30 : 45;
            var elementsPerScreen = contentSize < 625 ? 1 : ( contentSize <= 1050 ? 2 : 3 );

            if( contentSize < 625 ) slider.children( '.value-single' ).css({ 'width': contentSize - 62 });
            else {

                slider.children( '.value-single' ).css({ 'width': '' });
            }

            var elementWidth = slider.children( '.value-single' )[0].getBoundingClientRect().width;

            slider.css({ 'width': ( elementWidth * elementsCount ) + ( elementMargin * elementsCount ) + 1000 });
            slider.css({ 'margin-left': 0 });

            var valueID = 1;
            slider.children( '.value-single' ).each( function() {

                $( this ).attr( 'data-value-id', valueID );
                valueID++;

            });

            slider.children( '.value-single[data-value-id="'+ ( valueID - 1 ) +'"]' ).addClass( 'value-single-last' );

            section.find( '.values-prev' ).attr( 'data-near-element-id', '1' ).data( 'near-element-id', '1' );
            section.find( '.values-next' ).attr( 'data-near-element-id', elementsCount < elementsPerScreen ? elementsCount : elementsPerScreen ).data( 'near-element-id', elementsCount < elementsPerScreen ? elementsCount : elementsPerScreen );

        });

    };

   /**
    *
    * offers slider
    *
    */

    $( 'body' ).on( 'click touchstart', 'section.offer .values-prev, section.offer .values-next', function( event ) {

        event.preventDefault();

        var element = $( this );
        if( !element.hasClass( 'proceed' ) ) {

            element.addClass( 'proceed' );

            var section = element.parent().parent().parent();
            var type = element.hasClass( 'values-prev' ) ? 'prev' : 'next';
            var container = element.siblings( '.values-slider-container' );
            var prevNearElementID = parseInt( section.find( '.values-prev' ).data( 'near-element-id' ), 10 );
            var nextNearElementID = parseInt( section.find( '.values-next' ).data( 'near-element-id' ), 10 );
            var elementWidth = container.find( '.value-single' )[0].getBoundingClientRect().width;
            var elementsCount = container.find( '.value-single' ).length;
            var position = parseInt( container.children( '.values-slider' ).css( 'margin-left' ), 10 );
            var contentSize = parseInt( $( 'footer .center' ).css( 'width' ), 10 );
            var elementMargin = contentSize < 1050 ? 30 : 45;
            var elementsPerScreen = contentSize < 625 ? 1 : ( contentSize <= 1050 ? 2 : 3 );

            if( type == 'next' ) {

                if( nextNearElementID == elementsCount ) {

                    position = 0;

                    section.find( '.values-prev' ).data( 'near-element-id', '1' ).attr( 'data-near-element-id', 1 );
                    section.find( '.values-next' ).data( 'near-element-id', elementsCount < elementsPerScreen ? elementsCount : elementsPerScreen ).attr( 'data-near-element-id', elementsCount < elementsPerScreen ? elementsCount : elementsPerScreen );
                }

                else {

                    position = position - ( elementWidth + elementMargin );

                    section.find( '.values-prev' ).data( 'near-element-id', ( prevNearElementID + 1 ) ).attr( 'data-near-element-id', ( prevNearElementID + 1 ) );
                    section.find( '.values-next' ).data( 'near-element-id', ( nextNearElementID + 1 ) ).attr( 'data-near-element-id', ( nextNearElementID + 1 ) );
                }
            }

            else {

                if( prevNearElementID == 1 ) {

                    position = - ( ( elementWidth * ( elementsCount - elementsPerScreen ) ) + ( ( elementsCount - elementsPerScreen ) * elementMargin ) );

                    section.find( '.values-prev' ).data( 'near-element-id', ( elementsCount - ( elementsPerScreen - 1 ) ) ).attr( 'data-near-element-id', ( elementsCount - ( elementsPerScreen - 1 ) ) );
                    section.find( '.values-next' ).data( 'near-element-id', ( elementsCount ) ).attr( 'data-near-element-id', ( elementsCount ) );
                }

                else {

                    position = position + ( elementWidth + elementMargin );

                    section.find( '.values-prev' ).data( 'near-element-id', ( prevNearElementID - 1 ) ).attr( 'data-near-element-id', ( prevNearElementID - 1 ) );
                    section.find( '.values-next' ).data( 'near-element-id', ( nextNearElementID - 1 ) ).attr( 'data-near-element-id', ( nextNearElementID - 1 ) );
                }
            }

            container.children( '.values-slider' ).animate({ 'margin-left': position +'px' }, 300 );
            setTimeout( function() {

                element.removeClass( 'proceed' );

            }, 300 );
        }

    });

   /**
    *
    * configure logos slider
    *
    */

    $.martanianConfigureLogosSlider = function() {

        var logosSliderID = 1;
        $( 'section.logos-slider' ).each( function() {

            var section = $( this );
            var navigation = section.find( '.logos-slider-navigation' );
            var slider = section.find( '.logos-slider' );

            navigation.html( '' );
            clearInterval( intervals['logos-slider-'+ logosSliderID] );
            section.find( '.logos-slider' ).css({ 'margin-left': 0 });

            if( slider.find( '.single-logo' ).parent().hasClass( 'logos-slider-group' ) ) {

                slider.find( '.single-logo' ).unwrap().removeClass().addClass( 'single-logo' );
            }

            var logosCount = slider.children( '.single-logo' ).length;
            var contentSize = parseInt( $( 'footer .center' ).css( 'width' ), 10 );
            var perScreen = contentSize < 750 ? 3 : ( contentSize < 1050 ? 4 : ( contentSize < 1300 ? 5 : 6 ) );
            var screensCount = Math.ceil( logosCount / perScreen );
            var intervalTime = section.data( 'interval' );

            var groupID = 1;
            var inGroup = 0;

            slider.children( '.single-logo' ).each( function() {

                $( this ).addClass( 'logos-slider-group-'+ groupID );
                inGroup++;

                if( inGroup == perScreen ) {

                    groupID++;
                    inGroup = 0;
                }

            });

            for( var i = 0; i < groupID; i++ ) {

                slider.children( '.logos-slider-group-'+ ( i + 1 ) ).wrapAll( '<div class="logos-slider-group"></div>' );
            }

            if( contentSize < 625 ) {

                slider.find( '.logos-slider-group' ).css({ 'width': contentSize + 45 });
            }

            if( typeof intervalTime == 'undefined' || intervalTime === null || intervalTime === false ) intervalTime = 6000;
            section.attr( 'data-logos-slider-id', logosSliderID );

            for( var i = 0; i < screensCount; i++ ) {

                navigation.append( '<li data-screen-id="'+ ( i + 1 ) +'"><span class="circle '+ ( i == 0 ? 'circle-active' : '' ) +'"></span></li>' );
            }

            if( screensCount > 1 && intervalTime !== 0 ) {

                intervals['logos-slider-'+ logosSliderID] = setInterval( function() {

                    $.martanianSwitchLogosSliderScreen( section, screensCount, 'next' );

                }, parseInt( intervalTime, 10 ) );
            }

            logosSliderID++;

        });

    };

   /**
    *
    * switch logos slider screen automatically
    *
    */

    $.martanianSwitchLogosSliderScreen = function( section, screensCount, screenID ) {

        var currentScreenID = section.find( '.logos-slider-navigation' ).find( '.circle-active' ).parent().data( 'screen-id' );
        var position = 0;
        var sectionWidth = section.children( '.center' ).width();

        if( screensCount == 'find' ) screensCount = section.find( '.logos-slider-navigation' ).children( 'li' ).length;
        if( screenID == 'next' ) screenID = currentScreenID + 1 > screensCount ? 1 : currentScreenID + 1;

        section.find( '.logos-slider-navigation' ).children( 'li[data-screen-id="'+ currentScreenID +'"]' ).children( '.circle' ).removeClass( 'circle-active' );
        section.find( '.logos-slider-navigation' ).children( 'li[data-screen-id="'+ screenID +'"]' ).children( '.circle' ).addClass( 'circle-active' );

        if( screenID == 1 ) {

            position = 0;
        }

        else {

            position = - ( ( sectionWidth * ( screenID - 1 ) ) + ( 45 * ( screenID - 1 ) ) );
        }

        section.find( '.logos-slider' ).animate({ 'margin-left': position +'px' }, 800 );

    };

   /**
    *
    * switch logos slider screen on click
    *
    */

    $( 'body' ).on( 'click touchstart', 'section.logos-slider .logos-slider-navigation li', function( event ) {

        event.preventDefault();

        var element = $( this );
        var section = element.parent().parent().parent();
        var navigation = section.find( '.logos-slider-navigation' );
        var screenID = element.data( 'screen-id' );
        var logosSliderID = section.data( 'logos-slider-id' );
        var intervalTime = section.data( 'interval' );

        if( typeof intervalTime == 'undefined' || intervalTime === null || intervalTime === false ) intervalTime = 6000;
        if( !navigation.hasClass( 'proceed' ) ) {

            navigation.addClass( 'proceed' );

            clearInterval( intervals['logos-slider-'+ logosSliderID] );
            $.martanianSwitchLogosSliderScreen( section, 'find', screenID );

            setTimeout( function() {

                if( intervalTime !== 0 ) {

                    intervals['logos-slider-'+ logosSliderID] = setInterval( function() {

                        $.martanianSwitchLogosSliderScreen( section, 'find', 'next' );

                    }, parseInt( intervalTime, 10 ) );
                }

                navigation.removeClass( 'proceed' );

            }, 800 );
        }

    });

   /**
    *
    * play video from image
    *
    */

    $( 'body' ).on( 'click touchstart', '.image-for-video', function( event ) {

        event.preventDefault();

        var videoURL = $( this ).data( 'video-url' );
        if( typeof videoURL == 'undefined' || videoURL == '' ) return;

        var videoID = videoURL.split( '?v=' );
        if( typeof videoID[1] == 'undefined' || videoID[1] == '' ) return;

        $( '.wrapper' ).append( '<div id="video-popup"><div class="video-popup-background"></div><div class="video-popup-content"><div class="video-popup-content-close"><span>&times;</span></div><iframe src="https://www.youtube.com/embed/'+ videoID[1] +'?rel=0&autoplay=1" frameborder="0" allowfullscreen></iframe></div></div>' );

        var videoScale = $( this ).data( 'video-scale' );
        if( typeof videoScale != 'undefined' && videoScale == 'yes' ) {

            var videoWidth = $( this ).data( 'video-width' );
            var videoHeight = $( this ).data( 'video-height' );

            if( typeof videoWidth != 'undefined' && videoWidth != '' && typeof videoHeight != 'undefined' && videoHeight != '' ) {

                var contentSize = parseInt( $( 'footer .center' ).css( 'width' ), 10 );
                var scale = videoWidth / videoHeight;
                var maxHeight = $( window ).height() - ( contentSize < 625 ? 25 : 150 );
                var maxWidth = $( window ).width() - ( contentSize < 625 ? 25 : 150 );
                var newWidth = maxWidth;
                var newHeight = ( newWidth / scale );

                if( newHeight > maxHeight ) {

                    newHeight = maxHeight;
                    newWidth = newHeight * scale;
                }

                $( '#video-popup .video-popup-content' ).css({ 'width': newWidth +'px', 'height': newHeight +'px', 'margin-left': '-'+ ( newWidth / 2 ) +'px', 'margin-top': '-'+ ( newHeight / 2 ) +'px' });
            }
        }

        $( '#video-popup' ).css({ 'display': 'block' });

    });

   /**
    *
    * close video
    *
    */

    $( 'body' ).on( 'click touchstart', '#video-popup .video-popup-background, #video-popup .video-popup-content-close', function( event ) {

        event.preventDefault();
        $( '#video-popup' ).remove();

    });

   /**
    *
    * refresh video sizes
    *
    */

    $.martanianRefreshVideoSizes = function() {

        var videoWidth = $( '#video-popup .video-popup-content' ).width();
        var videoHeight = $( '#video-popup .video-popup-content' ).height();

        var contentSize = parseInt( $( 'footer .center' ).css( 'width' ), 10 );
        var scale = videoWidth / videoHeight;
        var maxHeight = $( window ).height() - ( contentSize < 625 ? 25 : 150 );
        var maxWidth = $( window ).width() - ( contentSize < 625 ? 25 : 150 );
        var newWidth = maxWidth;
        var newHeight = ( newWidth / scale );

        if( newHeight > maxHeight ) {

            newHeight = maxHeight;
            newWidth = newHeight * scale;
        }

        $( '#video-popup .video-popup-content' ).css({ 'width': newWidth +'px', 'height': newHeight +'px', 'margin-left': '-'+ ( newWidth / 2 ) +'px', 'margin-top': '-'+ ( newHeight / 2 ) +'px' });

    };

   /**
    *
    * images slider configuration
    *
    */

    $.martanianConfigureHeadingSlider = function() {

        var headingSliderID = 1;
        $( 'section.heading-slider' ).each( function() {

            var section = $( this );
            var intervalTime = section.data( 'interval' );
            var imageID = 1;

            if( typeof intervalTime == 'undefined' || intervalTime === null || intervalTime === false ) intervalTime = 6000;
            section.attr( 'data-heading-slider-id', headingSliderID );

            section.children( '.heading-slider-images' ).children( '.heading-slider-image' ).each( function() {

                $( this ).attr( 'data-heading-slider-image-id', imageID );
                if( imageID != 1 ) $( this ).css({ 'display': 'none' });

                imageID++;

            });

            if( ( imageID - 1 ) > 1 ) {

                section.children( '.navigation' ).append( '<div class="center"><ul></ul></div>' );
                for( var i = 0; i < ( imageID - 1 ); i++ ) {

                    section.children( '.navigation' ).find( 'ul' ).append( '<li data-heading-slider-image-id="'+ ( i + 1 ) +'" '+ ( i == 0 ? 'class="active"' : '' ) +'><span class="circle"></li>' );
                }
            }

            if( imageID - 1 > 1 && intervalTime !== 0 ) {

                intervals['heading-slider-'+ headingSliderID] = setInterval( function() {

                    $.martanianSwitchHeadingSliderImage( section, ( imageID - 1 ), 'next' );

                }, parseInt( intervalTime, 10 ) );
                if(headingSliderID===1){
                    $.martanianSwitchHeadingSliderImage( section, ( imageID ), 'next' );
                }
            }

            headingSliderID++;

        });

    };

   /**
    *
    * switching images slider image
    *
    */

    $.martanianSwitchHeadingSliderImage = function( section, imagesCount, imageID ) {

        var currentImageID = section.children( '.navigation' ).find( 'ul' ).children( 'li.active' ).data( 'heading-slider-image-id' );

        if( imagesCount == 'find' ) imagesCount = section.children( '.navigation' ).find( 'ul' ).children( 'li' ).length;
        if( imageID == 'next' ) imageID = currentImageID + 1 > imagesCount ? 1 : currentImageID + 1;

        section.find( '.heading-slider-image[data-heading-slider-image-id="'+ currentImageID +'"]' ).fadeOut( 300 );
        section.find( '.heading-slider-image[data-heading-slider-image-id="'+ imageID +'"]' ).fadeIn( 300 );

        section.children( '.navigation' ).find( 'ul' ).children( 'li[data-heading-slider-image-id="'+ currentImageID +'"]' ).removeClass( 'active' );
        section.children( '.navigation' ).find( 'ul' ).children( 'li[data-heading-slider-image-id="'+ imageID +'"]' ).addClass( 'active' );

    };

   /**
    *
    * action after click on images slider navigation
    *
    */

    $( 'section.heading-slider' ).on( 'click touchstart', '.navigation li', function( event ) {

        event.preventDefault();

        var element = $( this );
        var section = element.parent().parent().parent().parent();
        var navigation = element.parent();
        var intervalTime = section.data( 'interval' );
        var headingSliderID = section.data( 'heading-slider-id' );
        var imageID = element.data( 'heading-slider-image-id' );
        var headingSliderImagesCount = section.find( '.navigation' ).find( 'ul' ).children( 'li' ).length;

        if( typeof intervalTime == 'undefined' || intervalTime === null || intervalTime === false ) intervalTime = 6000;
        if( !navigation.hasClass( 'proceed' ) && !element.hasClass( 'active' ) && headingSliderImagesCount > 1 ) {

            navigation.addClass( 'proceed' );

            clearInterval( intervals['heading-slider-'+ headingSliderID] );
            $.martanianSwitchHeadingSliderImage( section, 'find', imageID );

            setTimeout( function() {

                if( intervalTime !== 0 ) {

                    intervals['heading-slider-'+ headingSliderID] = setInterval( function() {

                        $.martanianSwitchHeadingSliderImage( section, 'find', 'next' );

                    }, parseInt( intervalTime, 10 ) );
                }

                navigation.removeClass( 'proceed' );

            }, 300 );
        }

    });

   /**
    *
    * configure google maps
    *
    */

    $.martanianConfigureGoogleMaps = function() {

        var mapID = 1;
        $( '.google-map' ).each( function() {

            $( this ).html( '<div class="google-map-inner" id="google-map-'+ mapID +'"></div>' );

            var lat = $( this ).data( 'lat' );
            var lng = $( this ).data( 'lng' );
            var zoom = $( this ).data( 'zoom-level' );

            var map = new google.maps.Map( document.getElementById( 'google-map-'+ mapID ), { zoom: zoom, center: new google.maps.LatLng( lat, lng ), mapTypeId: google.maps.MapTypeId.ROADMAP, scrollwheel: false } );
            var beachMarker = new google.maps.Marker({ position: new google.maps.LatLng( lat, lng ), map: map, });

            google.maps.event.addDomListener( window, 'resize', function() {

                var mapCenter = map.getCenter();

                google.maps.event.trigger( map, 'resize' );
                map.setCenter( mapCenter );

            });

            mapID++;

        });

    };

   /**
    *
    * configure progress bars
    *
    */

    $.martanianConfigureProgressBars = function() {

        $( '.progress-bars' ).each( function() {

            var progressBarsContainer = $( this );
            var progressBarID = 1;

            progressBarsContainer.wrapInner( '<div class="progress-bars-outer"><div class="progress-bars-inner"></div></div>' );
            progressBarsContainer.find( '.progress-bar' ).each( function() {

                var progressBar = $( this );
                var progressBarTitle = progressBar.html();
                var progressBarValue = progressBar.data( 'progress-bar-value' );

                progressBar.append( '<span class="progress-bar-number">'+ progressBarValue +'%</span>' );
                progressBar.append( '<span class="progress-bar-number-highlight">'+ progressBarTitle +'</span>' );
                progressBar.append( '<div class="progress-bar-line"><div class="progress-bar-line-value" style="width: 0%;"></div></div>' )
                progressBar.attr( 'data-progress-bar-id', progressBarID );

                if( progressBarID == 1 ) {

                    setTimeout( function() {

                        progressBar.find( '.progress-bar-line-value' ).animate({ 'width': progressBarValue +'%' }, 800 );

                    }, 300 );
                }

                progressBarID++;

            });

            if( ( progressBarID - 1 ) > 1 ) {

                progressBarsContainer.prepend( '<div class="progress-bar-next" data-near-progress-bar-id="2"><i class="fa fa-chevron-right"></i></div>' );
                progressBarsContainer.prepend( '<div class="progress-bar-prev" data-near-progress-bar-id="'+ ( progressBarID - 1 ) +'"><i class="fa fa-chevron-left"></i></div>' );
            }

            progressBarsContainer.find( '.progress-bars-inner' ).css({ 'width': ( ( progressBarID - 1 ) * 300 ) +'px' });

        });

    };

   /**
    *
    * show next / prev progress bar
    *
    */

    $( 'body' ).on( 'click touchstart', '.progress-bar-next, .progress-bar-prev', function( event ) {

        event.preventDefault();

        var element = $( this );
        if( !element.hasClass( 'proceed' ) ) {

            element.addClass( 'proceed' );

            var progressBars = element.parent();
            var inner = progressBars.find( '.progress-bars-inner' );
            var type = element.hasClass( 'progress-bar-next' ) ? 'next' : 'prev';
            var nearProgressBarID = element.data( 'near-progress-bar-id' );
            var nextProgressBarID = progressBars.find( '.progress-bar-next' ).data( 'near-progress-bar-id' );
            var prevProgressBarID = progressBars.find( '.progress-bar-prev' ).data( 'near-progress-bar-id' );
            var progressBarsCount = inner.find( '.progress-bar' ).length;
            var position = 0;

            if( nearProgressBarID != 1 ) {

                position = - ( ( nearProgressBarID - 1 ) * 300 );
            }

            if( type == 'next' ) {

                nextProgressBarID = nextProgressBarID + 1 > progressBarsCount ? 1 : nextProgressBarID + 1;
                prevProgressBarID = prevProgressBarID + 1 > progressBarsCount ? 1 : prevProgressBarID + 1;
            }

            else {

                nextProgressBarID = nextProgressBarID - 1 < 1 ? progressBarsCount : nextProgressBarID - 1;
                prevProgressBarID = prevProgressBarID - 1 < 1 ? progressBarsCount : prevProgressBarID - 1;
            }

            progressBars.find( '.progress-bar-next' ).data( 'near-progress-bar-id', nextProgressBarID ).attr( 'data-near-progress-bar-id', nextProgressBarID );
            progressBars.find( '.progress-bar-prev' ).data( 'near-progress-bar-id', prevProgressBarID ).attr( 'data-near-progress-bar-id', prevProgressBarID );

            inner.animate({ 'marginLeft': position +'px' }, 600 );
            setTimeout( function() {

                var progressBarLine = progressBars.find( '.progress-bar[data-progress-bar-id="'+ nearProgressBarID +'"]' ).find( '.progress-bar-line-value' );
                if( progressBarLine.width() == 0 ) {

                    var progressBarValue = progressBars.find( '.progress-bar[data-progress-bar-id="'+ nearProgressBarID +'"]' ).data( 'progress-bar-value' );
                    progressBarLine.animate({ 'width': progressBarValue +'%' }, 800 );
                }

                element.removeClass( 'proceed' );

            }, 600 );
        }

    });

   /**
    *
    * open single image
    *
    */

    $( 'body' ).on( 'click touchstart', '.image, .gallery-short .gallery-image, .presentation-box-single .circle-link-image', function( event ) {

        event.preventDefault();
        if( !$( this ).hasClass( 'image-for-video' ) ) {

            var image = $( this ).hasClass( 'circle-link-image' ) ? $( this ).parent().parent().parent() : $( this );
            var imageURL = image.css( 'background-image' );
            var resize = image.data( 'image-resize' );

            if( typeof imageURL == 'undefined' || imageURL == '' || imageURL == 'none' ) return;
            $.martanianShowGalleryImage( imageURL, resize, image );
        }

    });

   /**
    *
    * show gallery image
    *
    */

    $.martanianShowGalleryImage = function( imageURL, resize, element ) {

        $( 'body' ).append( '<div class="image-helper"><img src="'+ $.martanianGetImageURL( imageURL ) +'" /></div>' );
        $( '.image-helper img' ).load( function() {

            var contentSize = parseInt( $( 'footer .center' ).css( 'width' ), 10 );
            var sizes = { 'width': $( this ).width(), 'height': $( this ).height() };

            var maxHeight = $( window ).height() - ( contentSize < 625 ? 200 : 150 );
            var maxWidth = $( window ).width() - ( contentSize < 625 ? 25 : 150 );

            $( '.image-helper' ).remove();

            if( $( '#image-popup' ).length == 0 ) $( '.wrapper' ).append( '<div id="image-popup"><div class="image-popup-background"></div><div class="image-popup-content"><div class="image-popup-content-close"><span>&times;</span></div></div></div>' );
            $( '#image-popup .image-popup-content' ).css({ 'background-image': 'url("'+ $.martanianGetImageURL( imageURL ) +'")' }).data( 'original-image-width', sizes.width ).attr( 'data-original-image-width', sizes.width ).data( 'original-image-height', sizes.height ).attr( 'data-original-image-height', sizes.height );

            galleryNeighbors = $.martanianGetNeighbors( element );
            if( galleryNeighbors.prev != false && galleryNeighbors.next != false && $( '#image-popup .image-popup-content .image-prev' ).length == 0 && $( '#image-popup .image-popup-content .image-next' ).length == 0 ) {

                $( '#image-popup .image-popup-content' ).append( '<div class="image-prev"><i class="fa fa-chevron-left"></i></div><div class="image-next"><i class="fa fa-chevron-right"></i></div>' );
            }

            var newWidth = sizes.width;
            var newHeight = sizes.height;

            if( resize == 'yes' || newHeight > maxHeight || newWidth > maxWidth ) {

                var scale = newWidth / newHeight;

                newWidth = maxWidth;
                newHeight = ( newWidth / scale );

                if( newHeight > maxHeight ) {

                    newHeight = maxHeight;
                    newWidth = newHeight * scale;
                }
            }

            $( '#image-popup .image-popup-content' ).css({ 'width': newWidth +'px', 'height': newHeight +'px', 'margin-left': - ( newWidth / 2 ) +'px', 'margin-top': - ( newHeight / 2 ) +'px' });
            $( '#image-popup' ).css({ 'display': 'block' });

        });

    };

   /**
    *
    * getting image url
    *
    */

    $.martanianGetImageURL = function( imageURL ) {

        var url = imageURL.split( 'url(' );
            url = url[1].split( ')' );
            url = url[0];

        if( url.indexOf( '"' ) >= false ) {

            url = url.split( '"' );
            url = url[1];
        }

        return( url );

    };

   /**
    *
    * getting image neighbors
    *
    */

    $.martanianGetNeighbors = function( image ) {

        if( image.hasClass( 'gallery-image' ) ) {

            var prev = image.prev( '.gallery-image' );
            var next = image.next( '.gallery-image' );

            if( prev.length == 0 ) prev = image.siblings( '.gallery-image' ).last();
            if( next.length == 0 ) next = image.siblings( '.gallery-image' ).first();
        }

        else if( image.hasClass( 'presentation-box-single' ) ) {

            var filter = image.parent().siblings( '.presentation-filter' );
            var filterClass = '*';

            if( filter.length == 1 ) filterClass = filter.find( '.filter-active' ).data( 'filter' );
            if( filterClass == '*' ) {

                var prev = image.prev( '.presentation-box-single:not(.presentation-box-call-to-action)' );
                var next = image.next( '.presentation-box-single:not(.presentation-box-call-to-action)' );

                if( prev.length == 0 ) prev = image.siblings( '.presentation-box-single:not(.presentation-box-call-to-action)' ).last();
                if( next.length == 0 ) next = image.siblings( '.presentation-box-single:not(.presentation-box-call-to-action)' ).first();
            }

            else {

                var prevAll = image.prevAll( '.presentation-box-single'+ filterClass +':not(.presentation-box-call-to-action)' );
                var nextAll = image.nextAll( '.presentation-box-single'+ filterClass +':not(.presentation-box-call-to-action)' );

                var prev = prevAll.length === 0 ? image.siblings( '.presentation-box-single'+ filterClass +':not(.presentation-box-call-to-action)' ).last() : prevAll.first();
                var next = nextAll.length === 0 ? image.siblings( '.presentation-box-single'+ filterClass +':not(.presentation-box-call-to-action)' ).first() : nextAll.first();
            }
        }

        else if( image.hasClass( 'image' ) ) {

            var prev = image.prev( '.image:not(.image-for-video)' );
            var next = image.next( '.image:not(.image-for-video)' );

            if( prev.length == 0 ) prev = image.siblings( '.image' ).last();
            if( next.length == 0 ) next = image.siblings( '.image' ).first();
        }

        return( { 'prev': ( prev.length == 0 ? false : prev ), 'next': ( next.length == 0 ? false : next ), 'current': image } );

    };

   /**
    *
    * next / prev gallery images
    *
    */

    $( 'body' ).on( 'click touchstart', '#image-popup .image-prev, #image-popup .image-next', function( event ) {

        event.preventDefault();

        var image = $( this ).hasClass( 'image-prev' ) ? galleryNeighbors.prev : galleryNeighbors.next;
        var imageURL = image.css( 'background-image' );
        var resize = image.data( 'image-resize' );

        if( typeof imageURL == 'undefined' || imageURL == '' || imageURL == 'none' ) return;
        $.martanianShowGalleryImage( imageURL, resize, image );

    });

   /**
    *
    * close image
    *
    */

    $( 'body' ).on( 'click touchstart', '#image-popup .image-popup-background, #image-popup .image-popup-content-close', function( event ) {

        event.preventDefault();
        $( '#image-popup' ).remove();

    });

   /**
    *
    * change gallery popup sizes when responsiveness changed
    *
    */

    $.martanianRefreshGallerySizes = function() {

        if( $( '#image-popup' ).length != 0 ) {

            var contentSize = parseInt( $( 'footer .center' ).css( 'width' ), 10 );
            var maxHeight = $( window ).height() - ( contentSize < 625 ? 200 : 150 );
            var maxWidth = $( window ).width() - ( contentSize < 625 ? 25 : 150 );
            var height = $( '#image-popup .image-popup-content' ).data( 'original-image-height' );
            var width = $( '#image-popup .image-popup-content' ).data( 'original-image-width' );

            if( height > maxHeight || width > maxWidth ) {

                var scale = width / height;

                width = maxWidth;
                height = ( width / scale );

                if( height > maxHeight ) {

                    height = maxHeight;
                    width = height * scale;
                }
            }

            $( '#image-popup .image-popup-content' ).css({ 'width': width +'px', 'height': height +'px', 'margin-left': - ( width / 2 ) +'px', 'margin-top': - ( height / 2 ) +'px' });
        }

    };

   /**
    *
    * configure isotope functions
    *
    */

    $.martanianConfigureIsotope = function() {

        var isotopeID = 1;
        $( '.presentation.presentation-filtered' ).each( function() {

            $( this ).attr( 'data-isotope-id', isotopeID );
            isotopes[isotopeID] = $( '.presentation.presentation-filtered .presentation-box' ).isotope({ itemSelector: '.presentation-box-single' });

            isotopeID++;

        });

    };

   /**
    *
    * filter isotopes
    *
    */

    $( 'body' ).on( 'click touchstart', '.presentation.presentation-filtered .presentation-filter .filter', function( event ) {

        event.preventDefault();

        var isotope = $( this ).parent().parent().parent();
        var isotopeID = isotope.data( 'isotope-id' );
        var filterValue = $( this ).data( 'filter' );

        isotopes[isotopeID].isotope({ filter: filterValue });

        isotope.find( '.presentation-filter' ).children( '.filter' ).removeClass( 'filter-active' );
        $( this ).addClass( 'filter-active' );

    });

   /**
    *
    * automatically small images slider
    *
    */

    $.martanianConfigureSmallImagesSlider = function() {

        var sliderID = 1;
        $( '.images' ).each( function() {

            var slider = $( this );
            if( slider.children( '.image' ).length > 1 ) {

                slider.attr( 'data-small-images-slider-id', sliderID );

                var imageID = 1;
                slider.children( '.image' ).each( function() {

                    $( this ).attr( 'data-image-id', imageID );
                    if( imageID != 1 ) $( this ).css({ 'display': 'none' });

                    imageID++;

                });

                var navigation = '';
                for( var i = 1; i < imageID; i++ ) {

                    navigation += '<li data-small-images-slider-image-id="'+ i +'" '+ ( i == 1 ? 'class="active"' : '' ) +'><span class="circle"></span></li>';
                }

                slider.append( '<ul class="navigation">'+ navigation +'</ul>' );

                var intervalTime = slider.data( 'interval' );
                if( typeof intervalTime == 'undefined' || intervalTime === null || intervalTime === false ) intervalTime = 6000;

                if( intervalTime !== 0 ) {

                    intervals['small-images-slider-'+ sliderID] = setInterval( function() {

                        $.martanianSwitchSmallImagesImage( slider, slider.children( '.image' ).length, 'next' );

                    }, parseInt( intervalTime, 10 ) );
                }

                sliderID++;
            }

        });

    };

   /**
    *
    * switch small images slider image
    *
    */

    $.martanianSwitchSmallImagesImage = function( slider, imagesCount, imageID ) {

        var currentImageID = slider.children( '.navigation' ).children( 'li.active' ).data( 'small-images-slider-image-id' );

        if( imagesCount == 'find' ) imagesCount = slider.children( '.navigation' ).children( 'li' ).length;
        if( imageID == 'next' ) imageID = currentImageID + 1 > imagesCount ? 1 : currentImageID + 1;

        slider.find( '.image[data-image-id="'+ currentImageID +'"]' ).fadeOut( 300 );
        slider.find( '.image[data-image-id="'+ imageID +'"]' ).fadeIn( 300 );

        slider.children( '.navigation' ).children( 'li[data-small-images-slider-image-id="'+ currentImageID +'"]' ).removeClass( 'active' );
        slider.children( '.navigation' ).children( 'li[data-small-images-slider-image-id="'+ imageID +'"]' ).addClass( 'active' );

    };

   /**
    *
    * action after click on images slider navigation
    *
    */

    $( 'body' ).on( 'click touchstart', '.images .navigation li', function( event ) {

        event.preventDefault();

        var element = $( this );
        var slider = element.parent().parent();
        var navigation = element.parent();
        var intervalTime = slider.data( 'interval' );
        var sliderID = slider.data( 'small-images-slider-id' );
        var imageID = element.data( 'small-images-slider-image-id' );
        var sliderImagesCount = slider.find( '.navigation' ).children( 'li' ).length;

        if( typeof intervalTime == 'undefined' || intervalTime === null || intervalTime === false ) intervalTime = 6000;
        if( !navigation.hasClass( 'proceed' ) && !element.hasClass( 'active' ) && ( sliderImagesCount > 1 ) ) {

            navigation.addClass( 'proceed' );

            clearInterval( intervals['small-images-slider-'+ sliderID] );
            $.martanianSwitchSmallImagesImage( slider, 'find', imageID );

            setTimeout( function() {

                if( intervalTime !== 0 ) {

                    intervals['small-images-slider-'+ sliderID] = setInterval( function() {

                        $.martanianSwitchSmallImagesImage( slider, 'find', 'next' );

                    }, parseInt( intervalTime, 10 ) );
                }

                navigation.removeClass( 'proceed' );

            }, 300 );
        }

    });

   /**
    *
    * actions after keyup
    *
    */

    $( document ).keydown( function( event ) {

        var galleryActive = $( '#image-popup' ).length == 1 ? true : false;
        var videoActive = $( '#video-popup' ).length == 1 ? true : false;

        switch( event.keyCode ) {

            case 27:

                if( galleryActive == true ) $( '#image-popup' ).remove();
                if( videoActive == true ) $( '#video-popup' ).remove();

            break;

            case 37:

                if( galleryActive == true ) {

                    var image = galleryNeighbors.prev;
                    var imageURL = image.css( 'background-image' );
                    var resize = image.data( 'image-resize' );

                    if( typeof imageURL == 'undefined' || imageURL == '' || imageURL == 'none' ) return;
                    $.martanianShowGalleryImage( imageURL, resize, image );
                }

            break;

            case 39:

                if( galleryActive == true ) {

                    var image = galleryNeighbors.next;
                    var imageURL = image.css( 'background-image' );
                    var resize = image.data( 'image-resize' );

                    if( typeof imageURL == 'undefined' || imageURL == '' || imageURL == 'none' ) return;
                    $.martanianShowGalleryImage( imageURL, resize, image );
                }

            break;
        }

    });

   /**
    *
    * configure references
    *
    */

    $.martanianConfigureReferences = function() {

        var referencesID = 1;
        $( '.references' ).each( function() {

            var references = $( this );
            var referencesCount = references.children( '.reference' ).length;
            var referenceID = 1;
            var contentSize = parseInt( $( 'footer .center' ).css( 'width' ), 10 );
            var navigation = references.children( '.navigation' );

            navigation.html( '' );
            clearInterval( intervals['references-'+ referencesID] );
            references.children( '.reference' ).removeAttr( 'data-reference-id' ).data( 'reference-id', '' ).css({ 'display': '' });

            references.children( '.reference' ).each( function() {

                var reference = $( this );

                if( referenceID != 1 ) reference.css({ 'display': 'none' });
                else {

                    references.css({ 'height': reference.height() + ( referencesCount > 1 ? ( contentSize < 750 ? 70 : 40 ) : 0 ) });
                }

                if( referencesCount > 1 ) navigation.append( '<li'+ ( referenceID == 1 ? ' class="active"' : '' ) +' data-reference-id="'+ referenceID +'"><span class="circle"></span></li>' );

                reference.attr( 'data-reference-id', referenceID );
                referenceID++;

            });

            var intervalTime = references.data( 'interval' );
            if( typeof intervalTime == 'undefined' || intervalTime === null || intervalTime === false ) intervalTime = 6000;

            if( intervalTime !== 0 ) {

                intervals['references-'+ referencesID] = setInterval( function() {

                    $.martanianSwitchReferences( references, referencesCount, 'next' );

                }, parseInt( intervalTime, 10 ) );
            }

            references.attr( 'data-references-id', referencesID );
            referencesID++;

        });

    };

   /**
    *
    * switch references
    *
    */

    $.martanianSwitchReferences = function( references, referencesCount, referenceID ) {

        var contentSize = parseInt( $( 'footer .center' ).css( 'width' ), 10 );
        var currentReferenceID = references.children( '.navigation' ).children( 'li.active' ).data( 'reference-id' );

        if( referencesCount == 'find' ) referencesCount = references.children( '.navigation' ).children( 'li' ).length;
        if( referenceID == 'next' ) referenceID = currentReferenceID + 1 > referencesCount ? 1 : currentReferenceID + 1;

        references.find( '.reference[data-reference-id="'+ currentReferenceID +'"]' ).fadeOut( 300 );
        setTimeout( function() {

            references.find( '.reference[data-reference-id="'+ referenceID +'"]' ).fadeIn( 300 );
            references.animate({ 'height': references.find( '.reference[data-reference-id="'+ referenceID +'"]' ).height() + ( referencesCount > 1 ? ( contentSize < 750 ? 70 : 40 ) : 0 ) }, 300 );

        }, 50 );

        references.children( '.navigation' ).children( 'li[data-reference-id="'+ currentReferenceID +'"]' ).removeClass( 'active' );
        references.children( '.navigation' ).children( 'li[data-reference-id="'+ referenceID +'"]' ).addClass( 'active' );

    };

   /**
    *
    * action after click on references navigation
    *
    */

    $( 'body' ).on( 'click touchstart', '.references .navigation li', function( event ) {

        event.preventDefault();

        var element = $( this );
        var references = element.parent().parent();
        var navigation = element.parent();
        var intervalTime = references.data( 'interval' );
        var referencesID = references.data( 'references-id' );
        var referenceID = element.data( 'reference-id' );
        var referencesCount = references.find( '.navigation' ).children( 'li' ).length;

        if( typeof intervalTime == 'undefined' || intervalTime === null || intervalTime === false ) intervalTime = 6000;
        if( !navigation.hasClass( 'proceed' ) && !element.hasClass( 'active' ) && ( referencesCount > 1 ) ) {

            navigation.addClass( 'proceed' );

            clearInterval( intervals['references-'+ referencesID] );
            $.martanianSwitchReferences( references, 'find', referenceID );

            setTimeout( function() {

                if( intervalTime !== 0 ) {

                    intervals['references-'+ referencesID] = setInterval( function() {

                        $.martanianSwitchReferences( references, 'find', 'next' );

                    }, parseInt( intervalTime, 10 ) );
                }

                navigation.removeClass( 'proceed' );

            }, 300 );
        }

    });

   /**
    *
    * checkbox field
    *
    */

    $( 'body' ).on( 'click touchstart', '.checkbox', function( event ) {

        event.preventDefault();

        var checkbox = $( this );
        var checked = checkbox.attr( 'data-checked' ) == 'yes' ? true : false;

        if( checked == true ) {

            checkbox.attr( 'data-checked', 'no' );
            checkbox.data( 'checked', 'no' );

            checkbox.children( '.checkbox-status' ).html( '<i class="fa fa-times"></i>' );
        }

        else {

            checkbox.attr( 'data-checked', 'yes' );
            checkbox.data( 'checked', 'yes' );

            checkbox.children( '.checkbox-status' ).html( '<i class="fa fa-check"></i>' );
        }

    });

   /**
    *
    * configure value sliders
    *
    */

    $.martanianConfigureValueSlider = function() {

        $( '.value-slider' ).each( function() {

            var sliderValueMin = $( this ).data( 'slider-min' );
            var sliderValueMax = $( this ).data( 'slider-max' );
            var sliderValueStart = $( this ).data( 'slider-start' );
            var sliderValueStep = $( this ).data( 'slider-step' );
            var sliderID = $( this ).data( 'slider-id' );

            $( this ).noUiSlider({ start: sliderValueStart, step: sliderValueStep, range: { 'min': sliderValueMin, 'max': sliderValueMax } });
            $( this ).Link( 'lower' ).to( $( '.value-slider-text[data-slider-id="'+ sliderID +'"] span' ), null, wNumb({ thousand: '.', decimals: '0' }) );

        });

    };

   /**
    *
    * configure selects
    *
    */

    $.martanianConfigureSelects = function() {

        $( 'select' ).each( function() {

            var classes = $( this ).attr( 'class' );
            if( typeof classes == 'undefined' || classes == false || classes == null ) classes = '';

            $( this ).wrap( '<span class="select '+ classes +'"></span>' );

        });

    };

   /**
    *
    * is form field required?
    *
    */

    $.martanianIsFieldRequired = function( field ) {

        var required = field.data( 'required' );
        return( typeof required == 'undefined' || required == false || required == null || required == 'yes' ? true : false );

    };

   /**
    *
    * send form
    *
    */

    $( 'body' ).on( 'click touchstart', '.form-send', function( event ) {

        event.preventDefault();

        var form = $( this ).parent();
        var fields = [];
        var isError = false;
        var formOptions = {
            'client-name-field': form.data( 'client-name-field' ),
            'client-email-field': form.data( 'client-email-field' ),
            'title': form.data( 'title' )
        };

        form.find( '.form-field' ).each( function() {

            var field = $( this );
            if( !field.hasClass( 'select' ) ) {

                var fieldName = field.attr( 'name' );
                var fieldValue = field.val();
                var fieldRequired = $.martanianIsFieldRequired( field );

                if( typeof fieldName == 'undefined' ) fieldName = field.data( 'field-name' );
                if( ( typeof fieldValue == 'undefined' || fieldValue == null || fieldValue == false || fieldValue == '' ) && !field.is( 'input[type="text"], textarea' ) ) {

                    if( field.hasClass( 'value-slider-text' ) ) fieldValue = field.text();
                    else if( field.hasClass( 'checkbox' ) ) {

                        var checked = field.data( 'checked' );
                        fieldValue = checked == 'yes' ? field.find( '.checkbox-value-checked' ).text() : field.find( '.checkbox-value-unchecked' ).text();
                    }
                }

                if( ( fieldRequired == true && fieldValue != '' ) || fieldRequired == false ) {

                    if( field.is( 'select' ) ) field.parent().removeClass( 'error' );
                    else field.removeClass( 'error' );
                }

                else {

                    if( field.is( 'select' ) ) field.parent().addClass( 'error' );
                    else field.addClass( 'error' );

                    isError = true;
                }

                fields[fields.length] = { 'name': fieldName, 'value': fieldValue };
            }

        });

        if( isError == false ) {

            var thanksLay = form.children( '.thanks-lay' );
            thanksLay.fadeIn( 300 );

            $.ajax({ url: '_assets/_php/submit.php',
                     data: { 'fields': fields, 'options': formOptions },
                     type: 'post',
                     success: function( output ) {

                         thanksLay.find( '.thanks-lay-content-sending' ).css({ 'display': 'none' });
                         thanksLay.find( '.thanks-lay-content-sent' ).fadeIn( 300 );

                     }});
        }

    });

   /**
    *
    * close thanks-lay notice
    *
    */

    $( 'body' ).on( 'click touchstart', '.thanks-lay-close', function( event ) {

        event.preventDefault();

        var thanksLay = $( this ).parent().parent().parent();
        thanksLay.fadeOut( 300 );

    });

   /**
    *
    * configure responsive menu
    *
    */

    $.martanianConfigureResponsiveMenu = function() {

        var contentSize = parseInt( $( 'footer .center' ).css( 'width' ), 10 );
        var responsiveMenuWidth = contentSize < 625 ? 250 : 300;

        $( '.wrapper' ).css({ 'margin-left': '', 'width': '' }).removeClass( 'wrapper-shadow' );
        $( '.responsive-menu' ).css({ 'margin-left': '' });
        $( '.responsive-menu-content' ).css({ 'display': 'none', 'right': '-'+ responsiveMenuWidth +'px' });

        responsiveMenuVisible = false;
        var headers = [];

        $( 'header' ).each( function() {

            headers[headers.length] = {
                'element': $( this ),
                'menu': $( this ).find( 'ul.menu' ),
                'multilingual': $( this ).find( '.multilingual' ),
                'contactElements': $( this ).find( '.contact-element' )
            };

        });

        $.each( headers, function( index, header ) {

            var headerClass = header.element.hasClass( 'header-v1' ) ? 'header-v1' : 'header-v2';
            if( contentSize < 1050 ) {

                if( $( 'body' ).find( '.responsive-menu[data-for="'+ headerClass +'"]' ).length == 0 ) {

                    $( 'body' ).append( '<div class="responsive-menu" data-for="'+ headerClass +'"><i class="fa fa-bars"></i></div>' );

                    header.menu.css({ 'display': 'none' });
                    header.multilingual.css({ 'display': 'none' });

                    if( $( '.responsive-menu-content[data-for="'+ headerClass +'"]' ).length == 0 ) {

                        $( 'body' ).append( '<div class="responsive-menu-content" data-for="'+ headerClass +'"></div>' );
                        $( '.responsive-menu-content[data-for="'+ headerClass +'"]' ).append( '<ul class="menu">'+ header.menu.html() +'</ul>' );

                        if( header.contactElements.length !== 0 ) {

                            $.each( header.contactElements, function() {

                                $( '.responsive-menu-content[data-for="'+ headerClass +'"]' ).append( '<div class="contact-element">'+ $( this ).html() +'</div>' );

                            });
                        }

                        if( header.multilingual.length !== 0 ) {

                            $( '.responsive-menu-content[data-for="'+ headerClass +'"]' ).append( '<h5>'+ header.multilingual.data( 'name' ) +'</h5>' );
                            $( '.responsive-menu-content[data-for="'+ headerClass +'"]' ).append( '<ul class="possible-languages">'+ header.multilingual.find( '.possible-languages' ).html() +'</ul>' );
                        }
                    }
                }
            }

            else {

                $( 'body' ).find( '.responsive-menu[data-for="'+ headerClass +'"]' ).remove();

                header.menu.css({ 'display': 'block' });
                header.multilingual.css({ 'display': 'inline-block' });
            }

        });

    };

   /**
    *
    * show responsive menu
    *
    */

    $( 'body' ).on( 'click touchstart', '.responsive-menu', function( event ) {

        event.preventDefault();

        var contentSize = parseInt( $( 'footer .center' ).css( 'width' ), 10 );
        var responsiveMenuWidth = contentSize < 625 ? 250 : 300;

        if( responsiveMenuVisible == false ) {

            var wrapper = $( '.wrapper' );
            var wrapperWidth = wrapper.width();
            var headerClass = $( this ).data( 'for' );

            if( wrapper.hasClass( 'wrapper-wide' ) ) {

                $( '.wrapper' ).animate({ 'margin-left': '-'+ responsiveMenuWidth +'px', 'width': wrapperWidth }, 300 ).addClass( 'wrapper-shadow' );

                var currentHeaderv1MarginLeft = parseInt( $( '.responsive-menu[data-for="header-v1"]' ).css( 'margin-left' ), 10 );
                $( '.responsive-menu[data-for="header-v1"]' ).animate({ 'margin-left': ( currentHeaderv1MarginLeft - responsiveMenuWidth ) +'px' }, 300 );

                var currentHeaderV2MarginLeft = parseInt( $( '.responsive-menu[data-for="header-v2"]' ).css( 'margin-left' ), 10 );
                $( '.responsive-menu[data-for="header-v2"]' ).animate({ 'margin-left': ( currentHeaderV2MarginLeft - responsiveMenuWidth ) +'px' }, 300 );

                $( '.responsive-menu-content[data-for="'+ headerClass +'"]' ).css({ 'display': 'block' }).animate({ 'right': '0' }, 300 );
            }

            else if( wrapper.hasClass( 'wrapper-boxed' ) ) {

                var percent = wrapperWidth / 96;

                $( '.wrapper' ).animate({ 'margin-left': '-'+ ( responsiveMenuWidth - ( percent * 4 ) ) +'px', 'width': wrapperWidth }, 300 ).addClass( 'wrapper-shadow' );

                var currentHeaderv1MarginLeft = parseInt( $( '.responsive-menu[data-for="header-v1"]' ).css( 'margin-left' ), 10 );
                $( '.responsive-menu[data-for="header-v1"]' ).animate({ 'margin-left': ( currentHeaderv1MarginLeft - responsiveMenuWidth + ( percent * 2 ) ) +'px' }, 300 );

                var currentHeaderV2MarginLeft = parseInt( $( '.responsive-menu[data-for="header-v2"]' ).css( 'margin-left' ), 10 );
                $( '.responsive-menu[data-for="header-v2"]' ).animate({ 'margin-left': ( currentHeaderV2MarginLeft - responsiveMenuWidth + ( percent * 2 ) ) +'px' }, 300 );

                $( '.responsive-menu-content[data-for="'+ headerClass +'"]' ).css({ 'display': 'block' }).animate({ 'right': '0' }, 300 );
            }

            responsiveMenuVisible = true;
        }

        else {

            var wrapper = $( '.wrapper' );
            if( wrapper.hasClass( 'wrapper-wide' ) ) {

                wrapper.animate({ 'margin-left': '0' }, 300 );
                $( '.responsive-menu-content' ).animate({ 'right': '-'+ responsiveMenuWidth +'px' }, 300 );

                var currentHeaderv1MarginLeft = parseInt( $( '.responsive-menu[data-for="header-v1"]' ).css( 'margin-left' ), 10 );
                $( '.responsive-menu[data-for="header-v1"]' ).animate({ 'margin-left': ( currentHeaderv1MarginLeft + responsiveMenuWidth ) +'px' }, 300 );

                var currentHeaderV2MarginLeft = parseInt( $( '.responsive-menu[data-for="header-v2"]' ).css( 'margin-left' ), 10 );
                $( '.responsive-menu[data-for="header-v2"]' ).animate({ 'margin-left': ( currentHeaderV2MarginLeft + responsiveMenuWidth ) +'px' }, 300 );

                setTimeout( function() {

                    $( '.responsive-menu-content' ).css({ 'display': 'none' });

                    wrapper.css({ 'margin-left': '', 'width': '' }).removeClass( 'wrapper-shadow' );
                    $( '.responsive-menu[data-for="header-v1"]' ).css({ 'margin-left': '' });
                    $( '.responsive-menu[data-for="header-v2"]' ).css({ 'margin-left': '' });

                }, 300 );
            }

            else {

                wrapper.animate({ 'margin-left': '2%' }, 300 );
                $( '.responsive-menu-content' ).animate({ 'right': '-'+ responsiveMenuWidth +'px' }, 300 );

                var percent = wrapper.width() / 96;
                var currentHeaderv1MarginLeft = parseInt( $( '.responsive-menu[data-for="header-v1"]' ).css( 'margin-left' ), 10 );
                $( '.responsive-menu[data-for="header-v1"]' ).animate({ 'margin-left': ( currentHeaderv1MarginLeft + responsiveMenuWidth - ( percent * 2 ) ) +'px' }, 300 );

                var currentHeaderV2MarginLeft = parseInt( $( '.responsive-menu[data-for="header-v2"]' ).css( 'margin-left' ), 10 );
                $( '.responsive-menu[data-for="header-v2"]' ).animate({ 'margin-left': ( currentHeaderV2MarginLeft + responsiveMenuWidth - ( percent * 2 ) ) +'px' }, 300 );

                setTimeout( function() {

                    $( '.responsive-menu-content' ).css({ 'display': 'none' });

                    wrapper.css({ 'margin-left': '', 'width': '' }).removeClass( 'wrapper-shadow' );
                    $( '.responsive-menu[data-for="header-v1"]' ).css({ 'margin-left': '' });
                    $( '.responsive-menu[data-for="header-v2"]' ).css({ 'margin-left': '' });

                }, 300 );
            }

            responsiveMenuVisible = false;
        }

    });

   /**
    *
    * flying header menu
    *
    */

    $( window ).scroll( function() {

        $.martanianFlyingHeaderMenu( 'header.header-v1 .bottom .center' );
        $.martanianFlyingHeaderMenu( 'header.header-v2 .bottom .center' );
        $.martanianFlyingHeaderMenu( '.responsive-menu[data-for="header-v1"]' );
        $.martanianFlyingHeaderMenu( '.responsive-menu[data-for="header-v2"]' );

    });

    $.martanianFlyingHeaderMenu = function( element ) {

        element = $( element );
        if( element.length == 0 ) return;

        var wrapper = $( '.wrapper' );
        var position = $( window ).scrollTop();
        var contentSize = parseInt( $( 'footer .center' ).css( 'width' ), 10 );
        var limit = contentSize <= 750 ? 16 : 104;

        if( contentSize <= 750 ) {

            if( position < limit ) element.removeClass( 'flying' ).css({ 'top': 16 - position +'px' });
            else element.addClass( 'flying' ).css({ 'top': '0' });
        }

        else {

            if( position < limit ) element.removeClass( 'flying' ).css({ 'position': '', 'top': '' });
            else element.addClass( 'flying' ).css({ 'position': 'fixed', 'top': '0' });
        }

    };

   /**
    *
    * configure sidebars for responsiveness
    *
    */

    $.martanianConfigureSidebarsForResponsiveView = function() {

        var contentSize = parseInt( $( 'footer .center' ).css( 'width' ), 10 );
        if( contentSize < 750 ) {

            $( 'section.content-with-sidebar.content-with-sidebar-left' ).each( function() {

                var sidebar = $( this ).find( '.sidebar' );
                var sidebarCopy = sidebar;

                sidebar.remove();
                $( this ).find( '.content' ).after( sidebarCopy );

            });

            $( 'section.content-with-sidebar.content-with-sidebar-right' ).each( function() {

                $( this ).removeClass( 'content-with-sidebar-right' ).addClass( 'content-with-sidebar-left content-with-old-sidebar-right' );

            });
        }

        else {

            $( 'section.content-with-old-sidebar-right' ).each( function() {

                $( this ).removeClass( 'content-with-old-sidebar-right content-with-sidebar-left' ).addClass( 'content-with-sidebar-right' );

            });
        }

    };

   /**
    *
    * save information about used header
    *
    */

    $.martanianSetUsedHeader = function() {

        $( 'header' ).each( function() {

            if( $( this ).css( 'display' ) == 'block' ) {

                var headerClass = $( this ).hasClass( 'header-v1' ) ? 'header-v1' : 'header-v2';
                $( '.wrapper' ).attr( 'data-header-type', headerClass ).data( 'header-type', headerClass );
            }

        });

    };

   /**
    *
    * touch functions
    *
    */

    $( 'body' ).on( 'touchstart', '.presentation-box-single', function() {

        $( this ).trigger( 'mouseenter' );

    });

   /**
    *
    * countdown for "coming soon" pages
    *
    */

    $.martanianConfigureCountDowns = function() {

        var element = $( 'section.coming-soon' );
        if( element.length != 0 ) {

            var counter = element.find( '.coming-soon-counter' );
            var startDate = counter.data( 'start-date' );

            counter.countdown( startDate, function( event ) {

                $( this ).html( event.strftime( '%D<span>days,</span> %H<span>h</span> %M<span>m</span> %S<span>s</span>' ) );

            });
        }

    };

   /**
    *
    * configure dynamic timeline
    *
    */

    $.martanianConfigureDynamicTimeline = function() {

        $( '.dynamic-timeline' ).each( function() {

            var parent = $( this );
            var timeline = parent.find( '.timeline' );
            var timelineDescriptionID = 1;
            var timelineCircleID = 1;

            parent.find( '.timeline-description' ).each( function() {

                var timelineDescription = $( this );

                timelineDescription.attr( 'data-timeline-element-id', timelineDescriptionID ).data( 'timeline-element-id', timelineDescriptionID );
                timelineDescription.css({ 'display': 'none' })

                timelineDescriptionID++;

            });

            timeline.find( '.timeline-element' ).each( function() {

                $( this ).attr( 'data-timeline-element-id', timelineCircleID ).data( 'timeline-element-id', timelineCircleID );
                timelineCircleID++;

            });

            var lastTimelineDescriptionElement = parent.find( '.timeline-description[data-timeline-element-id="'+ ( timelineDescriptionID - 1 ) +'"]' );
            var lastTimelineCircleElement = timeline.find( '.timeline-element[data-timeline-element-id="'+ ( timelineDescriptionID - 1 ) +'"]' );

            lastTimelineDescriptionElement.css({ 'display': 'block' });
            lastTimelineDescriptionElement.parent().css({ 'height': lastTimelineDescriptionElement.height() });

            lastTimelineCircleElement.children( '.circle' ).addClass( 'circle-active' );

        });

    };

   /**
    *
    * change dynamic timeline element
    *
    */

    $( 'body' ).on( 'click touchstart', 'section.double-content.dynamic-timeline .timeline-element .circle:not(.circle-active)', function( event ) {

        event.preventDefault();

        var section = $( this ).parents( 'section.double-content.dynamic-timeline' );
        var timelineElement = $( this );
        var timelineElementID = $( this ).parent().data( 'timeline-element-id' );
        var newTimelineDescriptionElement = section.find( '.timeline-description[data-timeline-element-id="'+ timelineElementID +'"]' );

        section.find( '.timeline .timeline-element .circle' ).removeClass( 'circle-active' );
        timelineElement.addClass( 'circle-active' );

        section.find( '.timeline-description' ).fadeOut( 300 );
        newTimelineDescriptionElement.fadeIn( 300 );

        newTimelineDescriptionElement.parent().animate({ 'height': newTimelineDescriptionElement.height() }, 300 );

    });

   /**
    *
    * refresh dynamic timeline height when responsive
    *
    */

    $.martanianRefreshDynamicTimelineHeight = function() {

        $( '.dynamic-timeline' ).each( function() {

            var section = $( this );
            section.find( '.timeline-description' ).each( function() {

                if( $( this ).css( 'display' ) == 'block' ) {

                    $( this ).parent().css({ 'height': $( this ).height() });
                }

            });

        });

    };

   /**
    *
    * set parallax
    *
    */

    $.martanianSetParallax = function() {

        var contentSize = parseInt( $( 'footer .center' ).css( 'width' ), 10 );
        var speed = contentSize > 750 ? 0.25 : 0.05;

        $( '.with-parallax' ).css({ 'background-position': '' }).parallax( '50%', speed );

    };

   /**
    *
    * full height of coming-soon section
    *
    */

    $.martanianComingSoonHeight = function() {

        $( 'section.coming-soon' ).each( function() {

            var section = $( this );
            var windowHeight = $( window ).height();

            section.css({ 'min-height': windowHeight });

        });

    };

   /**
    *
    * configure maps for multiple contacts
    *
    */

    $.martanianConfigureMultipleContactsMap = function() {

        $( 'section.multiple-contacts' ).each( function() {

            var section = $( this );
            var map = section.find( '.google-map' );
            var contentSize = parseInt( section.find( '.center' ).css( 'width' ), 10 );
            var pageWidth = $( 'body' ).width();

            if( contentSize == 750 ) map.css({ 'width': pageWidth - ( ( pageWidth - 750 ) / 2 ) +'px' });
            else if( contentSize == 625 ) map.css({ 'width': pageWidth - ( ( pageWidth - 625 ) / 2 ) +'px' });
            else {

                map.css({ 'width': '' });
            }

        });

    };

   /**
    *
    * end of file
    *
    */

});
