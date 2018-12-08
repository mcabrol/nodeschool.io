var fs = require('fs');

fs.readFile(process.argv[2], 'utf8', function (err, data) {
	if (err)
		throw err;
	else 
	{
		data = data.split('\n');
		var len = data.length;
		console.log(len - 1);
	}	
});
