/*jslint browser: true, devel: true, white: true */
(function ($) {
    'use strict';

    /**
     * Initialize all tooltips
     */
    if ($.isFunction($.tooltip)) {
        $('[data-toggle="tooltip"]').tooltip();
    }

    /**
     * Mockup handlers
     */
    (function () {
        var mockupStubHandler = function (e) {
            e.preventDefault();
            window.alert("Mockup stub: " + $(this).attr('data-mockup-stub'));
        };
        $('form[data-mockup-stub]').on('submit', mockupStubHandler);
        $('[data-mockup-stub]:not(form)').on('click', mockupStubHandler);
    }());

}(jQuery));