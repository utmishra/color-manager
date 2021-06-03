const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
    .react()
    .sass('resources/sass/app.scss', 'public/css');

mix.webpackConfig({
    devServer: {
        host: '0.0.0.0',
        port: 8080,
    }
});

mix.browserSync({
    open: false,
    proxy: 'color-manager.test',
        files: [
            'public/css/app.css',
            'public/js/app.js',
            'app/**/*',
            'routes/**/*',
            'resources/views/**/*',
            'resources/js/**/*',
            'resources/css/**/*',
            'resources/lang/**/*'
        ]
    }
);
    
