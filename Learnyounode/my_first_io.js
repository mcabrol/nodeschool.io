var fs = require('fs');
var buffer = fs.readFileSync(process.argv[2]);
var str = buffer.toString();

str = str.split('\n');
var len = str.length;

console.log(--len);
