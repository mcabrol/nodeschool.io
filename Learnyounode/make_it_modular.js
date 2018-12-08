var module = require('./mymodule.js');

var dir = process.argv[2];
var chr = process.argv[3];

var filtered =  module(dir, chr);

console.log(filtered);
