#!/usr/bin/env node

'use strict';

var workshopper = require('workshopper'),
    path        = require('path'),
    updateNotifier = require('update-notifier'),
    pkg = require('./package.json');

updateNotifier({pkg: pkg}).notify();

function fpath(f) {
    return path.join(__dirname, f);
}

workshopper({
    name        : 'lololodash',
    appDir      : __dirname,
    languages   : ['en', 'fr']
});
