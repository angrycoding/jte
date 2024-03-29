module.exports = [

	(Histone, ret) => ret(typeof Histone().render === 'function'),
	(Histone, ret) => ret(typeof Histone().getBaseURI === 'function'),
	(Histone, ret) => ret(typeof Histone().getAST === 'function'),
	(Histone, ret) => ret(Histone(null, '/BASE_URI').getBaseURI() === '/BASE_URI'),
	(Histone, ret) => ret(Histone().render.length === 0),
	(Histone, ret) => Histone('{{2 * 2}}').render(function() { ret(arguments.length === 2) }),
	(Histone, ret) => Histone('{{2 * 2}}').render(function(result) { ret(result === '4') }),

	function(Histone, ret) {
		try {
			Histone('{{return [1, 2, 3, foo: 123]}}');
		} catch (exception) {
			return ret(true);
		}
		ret(false);
	},

	function(Histone, ret) {
		try {
			Histone('{{return [foo: 123, 1, 2, 3]}}');
		} catch (exception) {
			return ret(true);
		}
		ret(false);
	},

	function(Histone, ret) {
		try {
			Histone('{{return [0x32: 123]}}');
		} catch (exception) {
			return ret(true);
		}
		ret(false);
	},

	function(Histone, ret) {
		try {
			Histone('{{return [0.32: 123]}}');
		} catch (exception) {
			return ret(true);
		}
		ret(false);
	},

	function(Histone, ret) {
		try {
			Histone('{{return [0b01: 123]}}');
		} catch (exception) {
			return ret(true);
		}
		ret(false);
	},

	function(Histone, ret) {
		try {
			Histone('{{return [10: 123]}}');
		} catch (exception) {
			return ret(false);
		}
		ret(true);
	},

	function(Histone, ret) {
		try {
			Histone('{{return ["10": 123]}}');
		} catch (exception) {
			return ret(false);
		}
		ret(true);
	},

	function(Histone, ret) {
		try {
			Histone('{{return ["foo": "bar"]}}');
		} catch (exception) {
			return ret(false);
		}
		ret(true);
	},

	(Histone, ret) => Histone('{{return [1, 2, 3]}}').render(function(result) { ret(result instanceof Histone.Array) }),
	(Histone, ret) => Histone('{{return [1, 2, 3]}}').render(Histone.R_HISTONE, function(result) { ret(result instanceof Histone.Array) }),
	(Histone, ret) => Histone('{{return [1, 2, 3]}}').render(function(result) { ret(result instanceof Histone.Array) }, Histone.R_HISTONE),
	(Histone, ret) => Histone('{{return [1, 2, 3]}}').render(Histone.R_JS, function(result) { ret(result instanceof Array) }),
	(Histone, ret) => Histone('{{return [1, 2, 3]}}').render(function(result) { ret(result instanceof Array) }, Histone.R_JS),
	(Histone, ret) => Histone('{{return [1, 2, 3]}}').render(Histone.R_STRING, function(result) { ret(result === '1 2 3') }),
	(Histone, ret) => Histone('{{return [1, 2, 3]}}').render(function(result) { ret(result === '1 2 3') }, Histone.R_STRING),
	(Histone, ret) => Histone('{{this}}').render(function(result) { ret(result === '') }),
	(Histone, ret) => Histone('{{this}}').render(function(result) { ret(result === 'null') }, null),
	(Histone, ret) => Histone('{{this}}').render(function(result) { ret(result === 'true') }, true),
	(Histone, ret) => Histone('{{this}}').render(function(result) { ret(result === '1 2 3') }, [1, 2, 3]),
	(Histone, ret) => Histone('{{this}}').render(function(result) { ret(result === '1 2 3') }, {x: 1, y: 2, z: 3}),
	(Histone, ret) => Histone('{{return this}}').render(Histone.R_STRING, function(result) { ret(result === '') }),
	(Histone, ret) => Histone('{{return this}}').render(Histone.R_STRING, function(result) { ret(result === 'null') }, null),
	(Histone, ret) => Histone('{{return this}}').render(Histone.R_STRING, function(result) { ret(result === 'true') }, true),
	(Histone, ret) => Histone('{{return this}}').render(Histone.R_STRING, function(result) { ret(result === '1 2 3') }, [1, 2, 3]),
	(Histone, ret) => Histone('{{return this}}').render(Histone.R_STRING, function(result) { ret(result === '1 2 3') }, {x: 1, y: 2, z: 3}),
	(Histone, ret) => Histone('{{return this}}').render(function(result) { ret(result === '') }, Histone.R_STRING),
	(Histone, ret) => Histone('{{return this}}').render(function(result) { ret(result === 'null') }, Histone.R_STRING, null),
	(Histone, ret) => Histone('{{return this}}').render(function(result) { ret(result === 'true') }, Histone.R_STRING, true),
	(Histone, ret) => Histone('{{return this}}').render(function(result) { ret(result === '1 2 3') }, Histone.R_STRING, [1, 2, 3]),
	(Histone, ret) => Histone('{{return this}}').render(function(result) { ret(result === '1 2 3') }, Histone.R_STRING, {x: 1, y: 2, z: 3}),
	(Histone, ret) => Histone('{{return this}}').render(function(result) { ret(result === 'null') }, null, Histone.R_STRING),
	(Histone, ret) => Histone('{{return this}}').render(function(result) { ret(result === 'true') }, true, Histone.R_STRING),
	(Histone, ret) => Histone('{{return this}}').render(function(result) { ret(result === '1 2 3') }, [1, 2, 3], Histone.R_STRING),
	(Histone, ret) => Histone('{{return this}}').render(function(result) { ret(result === '1 2 3') }, {x: 1, y: 2, z: 3}, Histone.R_STRING),
	(Histone, ret) => Histone('{{return this}}').render(function(result) { ret(result === Histone.toString([1, 2, 3])) }, [1, 2, 3], Histone.R_STRING),
	(Histone, ret) => Histone('{{return this}}').render(function(result) { ret(result === Histone.toString({foo: 'bar'})) }, {"foo": "bar"}, Histone.R_STRING),
	(Histone, ret) => Histone('{{return this}}').render(Histone.R_HISTONE, function(result) { ret(result === undefined) }),
	(Histone, ret) => Histone('{{return this}}').render(Histone.R_HISTONE, function(result) { ret(result === null) }, null),
	(Histone, ret) => Histone('{{return this}}').render(Histone.R_HISTONE, function(result) { ret(result === true) }, true),
	(Histone, ret) => Histone('{{return this}}').render(Histone.R_HISTONE, function(result) { ret(result instanceof Histone.Array) }, [1, 2, 3]),
	(Histone, ret) => Histone('{{return this}}').render(Histone.R_HISTONE, function(result) { ret(result instanceof Histone.Array) }, {x: 1, y: 2, z: 3}),
	(Histone, ret) => Histone('{{return this}}').render(function(result) { ret(result === undefined) }, Histone.R_HISTONE),
	(Histone, ret) => Histone('{{return this}}').render(function(result) { ret(result === null) }, Histone.R_HISTONE, null),
	(Histone, ret) => Histone('{{return this}}').render(function(result) { ret(result === true) }, Histone.R_HISTONE, true),
	(Histone, ret) => Histone('{{return this}}').render(function(result) { ret(result instanceof Histone.Array) }, Histone.R_HISTONE, [1, 2, 3]),
	(Histone, ret) => Histone('{{return this}}').render(function(result) { ret(result instanceof Histone.Array) }, Histone.R_HISTONE, {x: 1, y: 2, z: 3}),
	(Histone, ret) => Histone('{{return this}}').render(function(result) { ret(result === null) }, null, Histone.R_HISTONE),
	(Histone, ret) => Histone('{{return this}}').render(function(result) { ret(result === true) }, true, Histone.R_HISTONE),
	(Histone, ret) => Histone('{{return this}}').render(function(result) { ret(result instanceof Histone.Array) }, [1, 2, 3], Histone.R_HISTONE),
	(Histone, ret) => Histone('{{return this}}').render(function(result) { ret(result instanceof Histone.Array) }, {x: 1, y: 2, z: 3}, Histone.R_HISTONE),
	(Histone, ret) => Histone('{{return this}}').render(function(result) { ret(result instanceof Histone.Date) }, new Date, Histone.R_HISTONE),
	(Histone, ret) => Histone('{{return this}}').render(Histone.R_JS, function(result) { ret(result === undefined) }),
	(Histone, ret) => Histone('{{return this}}').render(Histone.R_JS, function(result) { ret(result === null) }, null),
	(Histone, ret) => Histone('{{return this}}').render(Histone.R_JS, function(result) { ret(result === true) }, true),
	(Histone, ret) => Histone('{{return this}}').render(Histone.R_JS, function(result) { ret(result instanceof Array) }, [1, 2, 3]),
	(Histone, ret) => Histone('{{return this}}').render(Histone.R_JS, function(result) { ret(result instanceof Object && result.x === 1) }, {x: 1, y: 2, z: 3}),
	(Histone, ret) => Histone('{{return this}}').render(function(result) { ret(result === undefined) }, Histone.R_JS),
	(Histone, ret) => Histone('{{return this}}').render(function(result) { ret(result === null) }, Histone.R_JS, null),
	(Histone, ret) => Histone('{{return this}}').render(function(result) { ret(result === true) }, Histone.R_JS, true),
	(Histone, ret) => Histone('{{return this}}').render(function(result) { ret(result instanceof Array) }, Histone.R_JS, [1, 2, 3]),
	(Histone, ret) => Histone('{{return this}}').render(function(result) { ret(result instanceof Object && result.y === 2) }, Histone.R_JS, {x: 1, y: 2, z: 3}),
	(Histone, ret) => Histone('{{return this}}').render(function(result) { ret(result === null) }, null, Histone.R_JS),
	(Histone, ret) => Histone('{{return this}}').render(function(result) { ret(result === true) }, true, Histone.R_JS),
	(Histone, ret) => Histone('{{return this}}').render(function(result) { ret(result instanceof Array) }, [1, 2, 3], Histone.R_JS),
	(Histone, ret) => Histone('{{return this}}').render(function(result) { ret(result instanceof Object && result.z === 3) }, {x: 1, y: 2, z: 3}, Histone.R_JS),
	(Histone, ret) => Histone('{{return this}}').render(function(result) { ret(result instanceof Date) }, new Date, Histone.R_JS),
	(Histone, ret) => ret(Histone('{{return [foo: "bar"]}}').render(function(){}) === undefined),
	(Histone, ret) => ret(Histone('{{return [foo: "bar"]}}').render() instanceof Histone.Array),
	(Histone, ret) => ret(Histone('{{return [foo: "bar"]}}').render(Histone.R_HISTONE) instanceof Histone.Array),
	(Histone, ret) => ret(Histone('{{return [foo: "bar"]}}').render(Histone.R_JS) instanceof Object),
	(Histone, ret) => ret(Histone('{{return [foo: "bar"]}}').render(Histone.R_JS).foo === 'bar'),
	(Histone, ret) => ret(Histone('{{return [foo: "bar"]}}').render(Histone.R_STRING) === 'bar')

];