let mix = require('laravel-mix');
const MergeIntoSingleFilePlugin = require('webpack-merge-and-include-globally'); // 👈 merge .js files together into single file

mix
.webpackConfig({
    module: {
        rules: [{
            test: /\.scss/,
            loader: "import-glob-loader" // 👈 use glob syntax to import components .scss files
        }]
    },
    plugins: [
        new MergeIntoSingleFilePlugin({ // 👈 merge util.js and components .js files in a single frontend.js file
            files: {
                "js/frontend.js": [
                    "node_modules/codyhouse-framework/main/assets/js/util.js",
                    "resources/js/components/**/*.js",
                    "resources/js/app.js"
                ]
            }
        }),
    ]
})   
// .js('src/js/app.js', 'dist/js/app.js')
.sass('resources/sass/style.scss', 'css/style.css')
// unknown error
// .sass('src/sass/style-fallback.scss', 'dist/css/style-fallback.css') // style fallback
// .options({
//   postCss: [
//     require('postcss-css-variables'),
//     require('postcss-calc')
//   ]
// })
.sourceMaps()
.setPublicPath('web');