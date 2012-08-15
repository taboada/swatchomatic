var swatches = require("./swatches").swatches;

function listColors(ob) {
	var _arr = [];
	for(color in ob) {
		_arr.push(color);
	}
	return _arr;
}

exports.colors = listColors(swatches);
