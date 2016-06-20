/*
 * This file specifies the language dependencies.
 *
 * Translations take up a lot of space and you are therefore advised to remove
 * from here any languages that you don't need.
 *
 * See also src/moment_locales.js
 */
(function (root, factory) {
    define("locales", ['jed',
        'text!af',
        'text!ca',
        'text!da',
        'text!de',
        'text!en',
        'text!es',
        'text!fr',
        'text!he',
        'text!hu',
        'text!id',
        'text!it',
        'text!ja',
        'text!nb',
        'text!nl',
        'text!pl',
        'text!pt_BR',
        'text!ru',
        'text!uk',
        'text!zh'
        ], function ($, Jed) {
            root.locales = {
                'af':     arguments[1],
                'ca':     arguments[2],
                'da':     arguments[3],
                'de':     arguments[4],
                'en':     arguments[5],
                'es':     arguments[6],
                'fr':     arguments[7],
                'he':     arguments[8],
                'hu':     arguments[9],
                'id':     arguments[10],
                'it':     arguments[11],
                'ja':     arguments[12],
                'nb':     arguments[13],
                'nl':     arguments[14],
                'pl':     arguments[15],
                'pt-br':  arguments[16],
                'ru':     arguments[17],
                'uk':     arguments[18],
                'zh':     arguments[19]
            };
            return root.locales;
        });
})(this);
