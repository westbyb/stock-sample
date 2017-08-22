import _ from 'underscore';

global._ = _;

// Overwrite console to remove info vomit
console.log = function() { };
console.warn = function() { };
console.error = function() { };
