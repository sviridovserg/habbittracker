(function(global) {
    var paths = {
        'npm:': '/node_modules/'
    };

    var map = {
        'app': 'app',
        '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
        '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
        '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
        '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
        '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
        '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
        '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
        '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
        '@angular/material': 'npm:@angular/material/material.umd.js',
        '@angular2-material/toolbar': 'npm:@angular2-material/toolbar/toolbar.umd.js',
        '@angular2-material/icon': 'npm:@angular2-material/icon/icon.umd.js',
        '@angular2-material/button': 'npm:@angular2-material/button/button.umd.js',
        '@angular2-material/core': 'npm:@angular2-material/core/core.umd.js',
        'ng2-material': 'npm:ng2-material',
        'moment': 'npm:moment',
        'rxjs': 'npm:rxjs',
        'lodash': 'npm:lodash'
    };

    // packages tells the System loader how to load when no filename and/or no extension
    var packages = {
        app: { main: 'main.js',  defaultExtension: 'js' },
        rxjs: { defaultExtension: 'js', main: 'rx.js' },
        'ng2-material': {//this needs to be nested in packages
            main: 'index.js',
            defaultExtension: 'js'
        },
        moment: {
            main: 'moment.js',
            defaultExtension: 'js'
        },
        lodash: {
            main:  'lodash.js',
            defaultExtension: 'js'
        }
    };

    var config = {
        paths: paths,
        map: map,
        packages: packages
    };

    System.config(config);
})(this);
