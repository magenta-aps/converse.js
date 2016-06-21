/*
 * This file specifies the language dependencies.
 *
 * Translations take up a lot of space and you are therefore advised to remove
 * from here any languages that you don't need.
 *
 * See also src/moment_locales.js
 */
(function (root, factory) {
    define("locales", [
            'jed',
            'text!en',
            'text!da'
        ], function ($, Jed) {
            root.locales = {
                'en': arguments[1],
                'da': arguments[2]
            };
            return root.locales;
        });
})(this);
