var fs = require('fs');
var path = require('path');
var i = 0;

var dir = process.argv[2];
var chr = "." + process.argv[3];

fs.readdir(dir, function (err, list) {
	if (err)
		throw err;
	else
	{
		while (i < list.length)
		{
			if (path.extname(list[i]) == chr)
				console.log(list[i]);
			i++;
		}
	}
});
