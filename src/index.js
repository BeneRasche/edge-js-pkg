process.env.EDGE_USE_CORECLR='1';
const path = require('path');

const path2 = path.resolve(__dirname, '../node_modules/edge-js/lib/native/win32/x64/22/edge_coreclr.node');
process.env.EDGE_NATIVE = path2;
process.env.EDGE_APP_ROOT = path.dirname(process.execPath);


const edge = require('edge-js');

const hello = edge.func(function () { `
	async (input) =>
	{
		return ".NET welcomes " + input.ToString();
	}
`});

hello('Node.js', function (error, result) {
    if (error) throw error;
    console.log(result);
});
