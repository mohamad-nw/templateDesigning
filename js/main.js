$(function() {

    'use strict';

    $(window).scroll(function() {

        $(window).scrollTop() >= $('.navbar').height() ? $('.navbar').addClass('scrolled') :  $('.navbar').removeClass('scrolled');

    });

    // Deal With Tabs 

    $('.tab-switch li').on('click', function () {

        // Add Class Selected

        $(this).addClass('selected').siblings().removeClass('selected');

        // Hide All Div

        $('.tabs .tabs-content > div').hide();

        // Show Div Is Has Same Data Class In The Selector

        $($(this).data('class')).show();

    })

});