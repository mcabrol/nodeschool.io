var result = 0;
var i = 2;

while (i < process.argv.length)
{
	result += Number(process.argv[i]);
	i++;
}

console.log(result);
