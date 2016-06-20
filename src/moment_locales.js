/*
 * This file specifies the supported locales for moment.js.
 *
 * Translations take up a lot of space and you are therefore advised to remove
 * from here any languages that you don't need.
 *
 * See also src/locales.js
 */
(function (root, factory) {
    define("moment_with_locales", [
        'moment',   // Everything below can be removed except for moment itself.
        'moment_da',
        'moment_uk'
        ], function (moment) {
            return moment;
        });
})(this);
