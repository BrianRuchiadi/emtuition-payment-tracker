const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */
mix.sass('resources/scss/vendor.scss', 'public/css');
mix.sass('resources/scss/layouts/dashboard.scss', 'public/css/layouts');

// page specific
mix.sass('resources/scss/pages/timetable.scss', 'public/css/pages');
mix.sass('resources/scss/pages/student.scss', 'public/css/pages');
mix.sass('resources/scss/pages/payment.scss', 'public/css/pages');
mix.sass('resources/scss/pages/payment-history.scss', 'public/css/pages');

mix.js('resources/js/pages/timetable.js', 'public/js/pages');
mix.js('resources/js/pages/student.js', 'public/js/pages');
mix.js('resources/js/pages/payment.js', 'public/js/pages');
mix.js('resources/js/pages/payment-history.js', 'public/js/pages');

mix.copyDirectory('resources/img', 'public/img');

mix.setPublicPath('public');
mix.setResourceRoot('../');

// mix.js('resources/js/app.js', 'public/js')
//     .postCss('resources/css/app.css', 'public/css', [
//         //
//     ]);
