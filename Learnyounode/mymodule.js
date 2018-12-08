var fs = require('fs');
var path = require('path');

module.exports = function (dir, chr) { 
	fs.readdir(dir, function (err, list) {
		if (err)
			throw err;
		else
		{
			var i = 0;
			var j = 0;
			var str = "";
			chr = "." + chr;
			while (i < list.length)
			{
				if (path.extname(list[i]) == chr)
				{
					str[j] = list[i];
					j++;
				} 
				i++;	
			}
			return (str);
		}
	});
}
 


