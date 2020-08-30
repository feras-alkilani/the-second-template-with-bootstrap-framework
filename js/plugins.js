/* global $, JQuery , alert */

$(document).ready( function (){

    "use strict";

    // Nice Scroll 

    $("html").niceScroll();

    $('.carousel').carousel({
        interval: 4000
    });

    $(window).scroll(function (){
        
        var navbar = $('.navbar')

        $('.navbar').scrollTop() >= navbar.height() ?  navbar.addClass('scrolled') : navbar.removeClass('scrolled');
    });

    // deal With Tabs

    $('.tab-switch li').click( function (){


        // Hide All Divs To Active Link
        $(this).addClass('selected').siblings().removeClass('selected');

        //Hide All Divs
        $('.tabs-section .tabs-content > div').hide();

        //Show Div Connected With This Link
        $('.' + $(this).data('class')).show();

    });

});