module.exports = [

	(Histone, ret) => ret(Histone.toNumber() === undefined),
	(Histone, ret) => ret(Histone.toNumber(undefined) === undefined),
	(Histone, ret) => ret(Histone.toNumber(null) === undefined),
	(Histone, ret) => ret(Histone.toNumber(true) === 1),
	(Histone, ret) => ret(Histone.toNumber(false) === 0),
	(Histone, ret) => ret(Histone.toNumber(NaN) === undefined),
	(Histone, ret) => ret(Histone.toNumber(Infinity) === undefined),
	(Histone, ret) => ret(Histone.toNumber(-Infinity) === undefined),
	(Histone, ret) => ret(Histone.toNumber(0) === 0),
	(Histone, ret) => ret(Histone.toNumber(-10) === -10),
	(Histone, ret) => ret(Histone.toNumber(10) === 10),
	(Histone, ret) => ret(Histone.toNumber(Number.MAX_SAFE_INTEGER) === 9007199254740991),
	(Histone, ret) => ret(Histone.toNumber(Number.MAX_VALUE) === 179769313486231570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000),
	(Histone, ret) => ret(Histone.toNumber(1e20) === 100000000000000000000),
	(Histone, ret) => ret(Histone.toNumber(100000000000000000000) === 100000000000000000000),
	(Histone, ret) => ret(Histone.toNumber(1e21) === 1000000000000000000000),
	(Histone, ret) => ret(Histone.toNumber(1000000000000000000000) === 1000000000000000000000),
	(Histone, ret) => ret(Histone.toNumber(1e-6) === 0.000001),
	(Histone, ret) => ret(Histone.toNumber(0.000001) === 0.000001),
	(Histone, ret) => ret(Histone.toNumber(1e-7) === 0.0000001),
	(Histone, ret) => ret(Histone.toNumber(0.0000001) === 0.0000001),
	(Histone, ret) => ret(Histone.toNumber(1e-17) === 0.00000000000000001),
	(Histone, ret) => ret(Histone.toNumber(0.00000000000000001) === 0.00000000000000001),
	(Histone, ret) => ret(Histone.toNumber('0x32') === 50),
	(Histone, ret) => ret(Histone.toNumber('0b01111110') === 126),
	(Histone, ret) => ret(Histone.toNumber('9') === 9),
	(Histone, ret) => ret(Histone.toNumber('.9') === 0.9),
	(Histone, ret) => ret(Histone.toNumber('0.9') === 0.9),
	(Histone, ret) => ret(Histone.toNumber('3.9') === 3.9),
	(Histone, ret) => ret(Histone.toNumber('9e3') === 9000),
	(Histone, ret) => ret(Histone.toNumber('.9e3') === 900),
	(Histone, ret) => ret(Histone.toNumber('0.9e3') === 900),
	(Histone, ret) => ret(Histone.toNumber('3.9e3') === 3900),
	(Histone, ret) => ret(Histone.toNumber('9e-3') === 0.009),
	(Histone, ret) => ret(Histone.toNumber('.9e-3') === 0.0009),
	(Histone, ret) => ret(Histone.toNumber('0.9e-3') === 0.0009),
	(Histone, ret) => ret(Histone.toNumber('3.9e-3') === 0.0039),
	(Histone, ret) => ret(Histone.toNumber('9e+3') === 9000),
	(Histone, ret) => ret(Histone.toNumber('.9e+3') === 900),
	(Histone, ret) => ret(Histone.toNumber('0.9e+3') === 900),
	(Histone, ret) => ret(Histone.toNumber('3.9e+3') === 3900),
	(Histone, ret) => ret(Histone.toNumber('9E3') === 9000),
	(Histone, ret) => ret(Histone.toNumber('.9E3') === 900),
	(Histone, ret) => ret(Histone.toNumber('0.9E3') === 900),
	(Histone, ret) => ret(Histone.toNumber('3.9E3') === 3900),
	(Histone, ret) => ret(Histone.toNumber('9E-3') === 0.009),
	(Histone, ret) => ret(Histone.toNumber('.9E-3') === 0.0009),
	(Histone, ret) => ret(Histone.toNumber('0.9E-3') === 0.0009),
	(Histone, ret) => ret(Histone.toNumber('3.9E-3') === 0.0039),
	(Histone, ret) => ret(Histone.toNumber('9E+3') === 9000),
	(Histone, ret) => ret(Histone.toNumber('.9E+3') === 900),
	(Histone, ret) => ret(Histone.toNumber('0.9E+3') === 900),
	(Histone, ret) => ret(Histone.toNumber('3.9E+3') === 3900),
	(Histone, ret) => ret(Histone.toNumber('+0x32') === 50),
	(Histone, ret) => ret(Histone.toNumber('+0b01111110') === 126),
	(Histone, ret) => ret(Histone.toNumber('+9') === 9),
	(Histone, ret) => ret(Histone.toNumber('+.9') === 0.9),
	(Histone, ret) => ret(Histone.toNumber('+0.9') === 0.9),
	(Histone, ret) => ret(Histone.toNumber('+3.9') === 3.9),
	(Histone, ret) => ret(Histone.toNumber('+9e3') === 9000),
	(Histone, ret) => ret(Histone.toNumber('+.9e3') === 900),
	(Histone, ret) => ret(Histone.toNumber('+0.9e3') === 900),
	(Histone, ret) => ret(Histone.toNumber('+3.9e3') === 3900),
	(Histone, ret) => ret(Histone.toNumber('+9e-3') === 0.009),
	(Histone, ret) => ret(Histone.toNumber('+.9e-3') === 0.0009),
	(Histone, ret) => ret(Histone.toNumber('+0.9e-3') === 0.0009),
	(Histone, ret) => ret(Histone.toNumber('+3.9e-3') === 0.0039),
	(Histone, ret) => ret(Histone.toNumber('+9e+3') === 9000),
	(Histone, ret) => ret(Histone.toNumber('+.9e+3') === 900),
	(Histone, ret) => ret(Histone.toNumber('+0.9e+3') === 900),
	(Histone, ret) => ret(Histone.toNumber('+3.9e+3') === 3900),
	(Histone, ret) => ret(Histone.toNumber('+9E3') === 9000),
	(Histone, ret) => ret(Histone.toNumber('+.9E3') === 900),
	(Histone, ret) => ret(Histone.toNumber('+0.9E3') === 900),
	(Histone, ret) => ret(Histone.toNumber('+3.9E3') === 3900),
	(Histone, ret) => ret(Histone.toNumber('+9E-3') === 0.009),
	(Histone, ret) => ret(Histone.toNumber('+.9E-3') === 0.0009),
	(Histone, ret) => ret(Histone.toNumber('+0.9E-3') === 0.0009),
	(Histone, ret) => ret(Histone.toNumber('+3.9E-3') === 0.0039),
	(Histone, ret) => ret(Histone.toNumber('+9E+3') === 9000),
	(Histone, ret) => ret(Histone.toNumber('+.9E+3') === 900),
	(Histone, ret) => ret(Histone.toNumber('+0.9E+3') === 900),
	(Histone, ret) => ret(Histone.toNumber('+3.9E+3') === 3900),
	(Histone, ret) => ret(Histone.toNumber('-0x32') === -50),
	(Histone, ret) => ret(Histone.toNumber('-0b01111110') === -126),
	(Histone, ret) => ret(Histone.toNumber('-9') === -9),
	(Histone, ret) => ret(Histone.toNumber('-.9') === -0.9),
	(Histone, ret) => ret(Histone.toNumber('-0.9') === -0.9),
	(Histone, ret) => ret(Histone.toNumber('-3.9') === -3.9),
	(Histone, ret) => ret(Histone.toNumber('-9e3') === -9000),
	(Histone, ret) => ret(Histone.toNumber('-.9e3') === -900),
	(Histone, ret) => ret(Histone.toNumber('-0.9e3') === -900),
	(Histone, ret) => ret(Histone.toNumber('-3.9e3') === -3900),
	(Histone, ret) => ret(Histone.toNumber('-9e-3') === -0.009),
	(Histone, ret) => ret(Histone.toNumber('-.9e-3') === -0.0009),
	(Histone, ret) => ret(Histone.toNumber('-0.9e-3') === -0.0009),
	(Histone, ret) => ret(Histone.toNumber('-3.9e-3') === -0.0039),
	(Histone, ret) => ret(Histone.toNumber('-9e+3') === -9000),
	(Histone, ret) => ret(Histone.toNumber('-.9e+3') === -900),
	(Histone, ret) => ret(Histone.toNumber('-0.9e+3') === -900),
	(Histone, ret) => ret(Histone.toNumber('-3.9e+3') === -3900),
	(Histone, ret) => ret(Histone.toNumber('-9E3') === -9000),
	(Histone, ret) => ret(Histone.toNumber('-.9E3') === -900),
	(Histone, ret) => ret(Histone.toNumber('-0.9E3') === -900),
	(Histone, ret) => ret(Histone.toNumber('-3.9E3') === -3900),
	(Histone, ret) => ret(Histone.toNumber('-9E-3') === -0.009),
	(Histone, ret) => ret(Histone.toNumber('-.9E-3') === -0.0009),
	(Histone, ret) => ret(Histone.toNumber('-0.9E-3') === -0.0009),
	(Histone, ret) => ret(Histone.toNumber('-3.9E-3') === -0.0039),
	(Histone, ret) => ret(Histone.toNumber('-9E+3') === -9000),
	(Histone, ret) => ret(Histone.toNumber('-.9E+3') === -900),
	(Histone, ret) => ret(Histone.toNumber('-0.9E+3') === -900),
	(Histone, ret) => ret(Histone.toNumber('-3.9E+3') === -3900),
	(Histone, ret) => ret(Histone.toNumber('   0x32') === 50),
	(Histone, ret) => ret(Histone.toNumber('   0b01111110') === 126),
	(Histone, ret) => ret(Histone.toNumber('   9') === 9),
	(Histone, ret) => ret(Histone.toNumber('   .9') === 0.9),
	(Histone, ret) => ret(Histone.toNumber('   0.9') === 0.9),
	(Histone, ret) => ret(Histone.toNumber('   3.9') === 3.9),
	(Histone, ret) => ret(Histone.toNumber('   9e3') === 9000),
	(Histone, ret) => ret(Histone.toNumber('   .9e3') === 900),
	(Histone, ret) => ret(Histone.toNumber('   0.9e3') === 900),
	(Histone, ret) => ret(Histone.toNumber('   3.9e3') === 3900),
	(Histone, ret) => ret(Histone.toNumber('   9e-3') === 0.009),
	(Histone, ret) => ret(Histone.toNumber('   .9e-3') === 0.0009),
	(Histone, ret) => ret(Histone.toNumber('   0.9e-3') === 0.0009),
	(Histone, ret) => ret(Histone.toNumber('   3.9e-3') === 0.0039),
	(Histone, ret) => ret(Histone.toNumber('   9e+3') === 9000),
	(Histone, ret) => ret(Histone.toNumber('   .9e+3') === 900),
	(Histone, ret) => ret(Histone.toNumber('   0.9e+3') === 900),
	(Histone, ret) => ret(Histone.toNumber('   3.9e+3') === 3900),
	(Histone, ret) => ret(Histone.toNumber('   9E3') === 9000),
	(Histone, ret) => ret(Histone.toNumber('   .9E3') === 900),
	(Histone, ret) => ret(Histone.toNumber('   0.9E3') === 900),
	(Histone, ret) => ret(Histone.toNumber('   3.9E3') === 3900),
	(Histone, ret) => ret(Histone.toNumber('   9E-3') === 0.009),
	(Histone, ret) => ret(Histone.toNumber('   .9E-3') === 0.0009),
	(Histone, ret) => ret(Histone.toNumber('   0.9E-3') === 0.0009),
	(Histone, ret) => ret(Histone.toNumber('   3.9E-3') === 0.0039),
	(Histone, ret) => ret(Histone.toNumber('   9E+3') === 9000),
	(Histone, ret) => ret(Histone.toNumber('   .9E+3') === 900),
	(Histone, ret) => ret(Histone.toNumber('   0.9E+3') === 900),
	(Histone, ret) => ret(Histone.toNumber('   3.9E+3') === 3900),
	(Histone, ret) => ret(Histone.toNumber('   +0x32') === 50),
	(Histone, ret) => ret(Histone.toNumber('   +0b01111110') === 126),
	(Histone, ret) => ret(Histone.toNumber('   +9') === 9),
	(Histone, ret) => ret(Histone.toNumber('   +.9') === 0.9),
	(Histone, ret) => ret(Histone.toNumber('   +0.9') === 0.9),
	(Histone, ret) => ret(Histone.toNumber('   +3.9') === 3.9),
	(Histone, ret) => ret(Histone.toNumber('   +9e3') === 9000),
	(Histone, ret) => ret(Histone.toNumber('   +.9e3') === 900),
	(Histone, ret) => ret(Histone.toNumber('   +0.9e3') === 900),
	(Histone, ret) => ret(Histone.toNumber('   +3.9e3') === 3900),
	(Histone, ret) => ret(Histone.toNumber('   +9e-3') === 0.009),
	(Histone, ret) => ret(Histone.toNumber('   +.9e-3') === 0.0009),
	(Histone, ret) => ret(Histone.toNumber('   +0.9e-3') === 0.0009),
	(Histone, ret) => ret(Histone.toNumber('   +3.9e-3') === 0.0039),
	(Histone, ret) => ret(Histone.toNumber('   +9e+3') === 9000),
	(Histone, ret) => ret(Histone.toNumber('   +.9e+3') === 900),
	(Histone, ret) => ret(Histone.toNumber('   +0.9e+3') === 900),
	(Histone, ret) => ret(Histone.toNumber('   +3.9e+3') === 3900),
	(Histone, ret) => ret(Histone.toNumber('   +9E3') === 9000),
	(Histone, ret) => ret(Histone.toNumber('   +.9E3') === 900),
	(Histone, ret) => ret(Histone.toNumber('   +0.9E3') === 900),
	(Histone, ret) => ret(Histone.toNumber('   +3.9E3') === 3900),
	(Histone, ret) => ret(Histone.toNumber('   +9E-3') === 0.009),
	(Histone, ret) => ret(Histone.toNumber('   +.9E-3') === 0.0009),
	(Histone, ret) => ret(Histone.toNumber('   +0.9E-3') === 0.0009),
	(Histone, ret) => ret(Histone.toNumber('   +3.9E-3') === 0.0039),
	(Histone, ret) => ret(Histone.toNumber('   +9E+3') === 9000),
	(Histone, ret) => ret(Histone.toNumber('   +.9E+3') === 900),
	(Histone, ret) => ret(Histone.toNumber('   +0.9E+3') === 900),
	(Histone, ret) => ret(Histone.toNumber('   +3.9E+3') === 3900),
	(Histone, ret) => ret(Histone.toNumber('   -0x32') === -50),
	(Histone, ret) => ret(Histone.toNumber('   -0b01111110') === -126),
	(Histone, ret) => ret(Histone.toNumber('   -9') === -9),
	(Histone, ret) => ret(Histone.toNumber('   -.9') === -0.9),
	(Histone, ret) => ret(Histone.toNumber('   -0.9') === -0.9),
	(Histone, ret) => ret(Histone.toNumber('   -3.9') === -3.9),
	(Histone, ret) => ret(Histone.toNumber('   -9e3') === -9000),
	(Histone, ret) => ret(Histone.toNumber('   -.9e3') === -900),
	(Histone, ret) => ret(Histone.toNumber('   -0.9e3') === -900),
	(Histone, ret) => ret(Histone.toNumber('   -3.9e3') === -3900),
	(Histone, ret) => ret(Histone.toNumber('   -9e-3') === -0.009),
	(Histone, ret) => ret(Histone.toNumber('   -.9e-3') === -0.0009),
	(Histone, ret) => ret(Histone.toNumber('   -0.9e-3') === -0.0009),
	(Histone, ret) => ret(Histone.toNumber('   -3.9e-3') === -0.0039),
	(Histone, ret) => ret(Histone.toNumber('   -9e+3') === -9000),
	(Histone, ret) => ret(Histone.toNumber('   -.9e+3') === -900),
	(Histone, ret) => ret(Histone.toNumber('   -0.9e+3') === -900),
	(Histone, ret) => ret(Histone.toNumber('   -3.9e+3') === -3900),
	(Histone, ret) => ret(Histone.toNumber('   -9E3') === -9000),
	(Histone, ret) => ret(Histone.toNumber('   -.9E3') === -900),
	(Histone, ret) => ret(Histone.toNumber('   -0.9E3') === -900),
	(Histone, ret) => ret(Histone.toNumber('   -3.9E3') === -3900),
	(Histone, ret) => ret(Histone.toNumber('   -9E-3') === -0.009),
	(Histone, ret) => ret(Histone.toNumber('   -.9E-3') === -0.0009),
	(Histone, ret) => ret(Histone.toNumber('   -0.9E-3') === -0.0009),
	(Histone, ret) => ret(Histone.toNumber('   -3.9E-3') === -0.0039),
	(Histone, ret) => ret(Histone.toNumber('   -9E+3') === -9000),
	(Histone, ret) => ret(Histone.toNumber('   -.9E+3') === -900),
	(Histone, ret) => ret(Histone.toNumber('   -0.9E+3') === -900),
	(Histone, ret) => ret(Histone.toNumber('   -3.9E+3') === -3900),
	(Histone, ret) => ret(Histone.toNumber('0x32   ') === 50),
	(Histone, ret) => ret(Histone.toNumber('0b01111110   ') === 126),
	(Histone, ret) => ret(Histone.toNumber('9   ') === 9),
	(Histone, ret) => ret(Histone.toNumber('.9   ') === 0.9),
	(Histone, ret) => ret(Histone.toNumber('0.9   ') === 0.9),
	(Histone, ret) => ret(Histone.toNumber('3.9   ') === 3.9),
	(Histone, ret) => ret(Histone.toNumber('9e3   ') === 9000),
	(Histone, ret) => ret(Histone.toNumber('.9e3   ') === 900),
	(Histone, ret) => ret(Histone.toNumber('0.9e3   ') === 900),
	(Histone, ret) => ret(Histone.toNumber('3.9e3   ') === 3900),
	(Histone, ret) => ret(Histone.toNumber('9e-3   ') === 0.009),
	(Histone, ret) => ret(Histone.toNumber('.9e-3   ') === 0.0009),
	(Histone, ret) => ret(Histone.toNumber('0.9e-3   ') === 0.0009),
	(Histone, ret) => ret(Histone.toNumber('3.9e-3   ') === 0.0039),
	(Histone, ret) => ret(Histone.toNumber('9e+3   ') === 9000),
	(Histone, ret) => ret(Histone.toNumber('.9e+3   ') === 900),
	(Histone, ret) => ret(Histone.toNumber('0.9e+3   ') === 900),
	(Histone, ret) => ret(Histone.toNumber('3.9e+3   ') === 3900),
	(Histone, ret) => ret(Histone.toNumber('9E3   ') === 9000),
	(Histone, ret) => ret(Histone.toNumber('.9E3   ') === 900),
	(Histone, ret) => ret(Histone.toNumber('0.9E3   ') === 900),
	(Histone, ret) => ret(Histone.toNumber('3.9E3   ') === 3900),
	(Histone, ret) => ret(Histone.toNumber('9E-3   ') === 0.009),
	(Histone, ret) => ret(Histone.toNumber('.9E-3   ') === 0.0009),
	(Histone, ret) => ret(Histone.toNumber('0.9E-3   ') === 0.0009),
	(Histone, ret) => ret(Histone.toNumber('3.9E-3   ') === 0.0039),
	(Histone, ret) => ret(Histone.toNumber('9E+3   ') === 9000),
	(Histone, ret) => ret(Histone.toNumber('.9E+3   ') === 900),
	(Histone, ret) => ret(Histone.toNumber('0.9E+3   ') === 900),
	(Histone, ret) => ret(Histone.toNumber('3.9E+3   ') === 3900),
	(Histone, ret) => ret(Histone.toNumber('+0x32   ') === 50),
	(Histone, ret) => ret(Histone.toNumber('+0b01111110   ') === 126),
	(Histone, ret) => ret(Histone.toNumber('+9   ') === 9),
	(Histone, ret) => ret(Histone.toNumber('+.9   ') === 0.9),
	(Histone, ret) => ret(Histone.toNumber('+0.9   ') === 0.9),
	(Histone, ret) => ret(Histone.toNumber('+3.9   ') === 3.9),
	(Histone, ret) => ret(Histone.toNumber('+9e3   ') === 9000),
	(Histone, ret) => ret(Histone.toNumber('+.9e3   ') === 900),
	(Histone, ret) => ret(Histone.toNumber('+0.9e3   ') === 900),
	(Histone, ret) => ret(Histone.toNumber('+3.9e3   ') === 3900),
	(Histone, ret) => ret(Histone.toNumber('+9e-3   ') === 0.009),
	(Histone, ret) => ret(Histone.toNumber('+.9e-3   ') === 0.0009),
	(Histone, ret) => ret(Histone.toNumber('+0.9e-3   ') === 0.0009),
	(Histone, ret) => ret(Histone.toNumber('+3.9e-3   ') === 0.0039),
	(Histone, ret) => ret(Histone.toNumber('+9e+3   ') === 9000),
	(Histone, ret) => ret(Histone.toNumber('+.9e+3   ') === 900),
	(Histone, ret) => ret(Histone.toNumber('+0.9e+3   ') === 900),
	(Histone, ret) => ret(Histone.toNumber('+3.9e+3   ') === 3900),
	(Histone, ret) => ret(Histone.toNumber('+9E3   ') === 9000),
	(Histone, ret) => ret(Histone.toNumber('+.9E3   ') === 900),
	(Histone, ret) => ret(Histone.toNumber('+0.9E3   ') === 900),
	(Histone, ret) => ret(Histone.toNumber('+3.9E3   ') === 3900),
	(Histone, ret) => ret(Histone.toNumber('+9E-3   ') === 0.009),
	(Histone, ret) => ret(Histone.toNumber('+.9E-3   ') === 0.0009),
	(Histone, ret) => ret(Histone.toNumber('+0.9E-3   ') === 0.0009),
	(Histone, ret) => ret(Histone.toNumber('+3.9E-3   ') === 0.0039),
	(Histone, ret) => ret(Histone.toNumber('+9E+3   ') === 9000),
	(Histone, ret) => ret(Histone.toNumber('+.9E+3   ') === 900),
	(Histone, ret) => ret(Histone.toNumber('+0.9E+3   ') === 900),
	(Histone, ret) => ret(Histone.toNumber('+3.9E+3   ') === 3900),
	(Histone, ret) => ret(Histone.toNumber('-0x32   ') === -50),
	(Histone, ret) => ret(Histone.toNumber('-0b01111110   ') === -126),
	(Histone, ret) => ret(Histone.toNumber('-9   ') === -9),
	(Histone, ret) => ret(Histone.toNumber('-.9   ') === -0.9),
	(Histone, ret) => ret(Histone.toNumber('-0.9   ') === -0.9),
	(Histone, ret) => ret(Histone.toNumber('-3.9   ') === -3.9),
	(Histone, ret) => ret(Histone.toNumber('-9e3   ') === -9000),
	(Histone, ret) => ret(Histone.toNumber('-.9e3   ') === -900),
	(Histone, ret) => ret(Histone.toNumber('-0.9e3   ') === -900),
	(Histone, ret) => ret(Histone.toNumber('-3.9e3   ') === -3900),
	(Histone, ret) => ret(Histone.toNumber('-9e-3   ') === -0.009),
	(Histone, ret) => ret(Histone.toNumber('-.9e-3   ') === -0.0009),
	(Histone, ret) => ret(Histone.toNumber('-0.9e-3   ') === -0.0009),
	(Histone, ret) => ret(Histone.toNumber('-3.9e-3   ') === -0.0039),
	(Histone, ret) => ret(Histone.toNumber('-9e+3   ') === -9000),
	(Histone, ret) => ret(Histone.toNumber('-.9e+3   ') === -900),
	(Histone, ret) => ret(Histone.toNumber('-0.9e+3   ') === -900),
	(Histone, ret) => ret(Histone.toNumber('-3.9e+3   ') === -3900),
	(Histone, ret) => ret(Histone.toNumber('-9E3   ') === -9000),
	(Histone, ret) => ret(Histone.toNumber('-.9E3   ') === -900),
	(Histone, ret) => ret(Histone.toNumber('-0.9E3   ') === -900),
	(Histone, ret) => ret(Histone.toNumber('-3.9E3   ') === -3900),
	(Histone, ret) => ret(Histone.toNumber('-9E-3   ') === -0.009),
	(Histone, ret) => ret(Histone.toNumber('-.9E-3   ') === -0.0009),
	(Histone, ret) => ret(Histone.toNumber('-0.9E-3   ') === -0.0009),
	(Histone, ret) => ret(Histone.toNumber('-3.9E-3   ') === -0.0039),
	(Histone, ret) => ret(Histone.toNumber('-9E+3   ') === -9000),
	(Histone, ret) => ret(Histone.toNumber('-.9E+3   ') === -900),
	(Histone, ret) => ret(Histone.toNumber('-0.9E+3   ') === -900),
	(Histone, ret) => ret(Histone.toNumber('-3.9E+3   ') === -3900),
	(Histone, ret) => ret(Histone.toNumber('   0x32   ') === 50),
	(Histone, ret) => ret(Histone.toNumber('   0b01111110   ') === 126),
	(Histone, ret) => ret(Histone.toNumber('   9   ') === 9),
	(Histone, ret) => ret(Histone.toNumber('   .9   ') === 0.9),
	(Histone, ret) => ret(Histone.toNumber('   0.9   ') === 0.9),
	(Histone, ret) => ret(Histone.toNumber('   3.9   ') === 3.9),
	(Histone, ret) => ret(Histone.toNumber('   9e3   ') === 9000),
	(Histone, ret) => ret(Histone.toNumber('   .9e3   ') === 900),
	(Histone, ret) => ret(Histone.toNumber('   0.9e3   ') === 900),
	(Histone, ret) => ret(Histone.toNumber('   3.9e3   ') === 3900),
	(Histone, ret) => ret(Histone.toNumber('   9e-3   ') === 0.009),
	(Histone, ret) => ret(Histone.toNumber('   .9e-3   ') === 0.0009),
	(Histone, ret) => ret(Histone.toNumber('   0.9e-3   ') === 0.0009),
	(Histone, ret) => ret(Histone.toNumber('   3.9e-3   ') === 0.0039),
	(Histone, ret) => ret(Histone.toNumber('   9e+3   ') === 9000),
	(Histone, ret) => ret(Histone.toNumber('   .9e+3   ') === 900),
	(Histone, ret) => ret(Histone.toNumber('   0.9e+3   ') === 900),
	(Histone, ret) => ret(Histone.toNumber('   3.9e+3   ') === 3900),
	(Histone, ret) => ret(Histone.toNumber('   9E3   ') === 9000),
	(Histone, ret) => ret(Histone.toNumber('   .9E3   ') === 900),
	(Histone, ret) => ret(Histone.toNumber('   0.9E3   ') === 900),
	(Histone, ret) => ret(Histone.toNumber('   3.9E3   ') === 3900),
	(Histone, ret) => ret(Histone.toNumber('   9E-3   ') === 0.009),
	(Histone, ret) => ret(Histone.toNumber('   .9E-3   ') === 0.0009),
	(Histone, ret) => ret(Histone.toNumber('   0.9E-3   ') === 0.0009),
	(Histone, ret) => ret(Histone.toNumber('   3.9E-3   ') === 0.0039),
	(Histone, ret) => ret(Histone.toNumber('   9E+3   ') === 9000),
	(Histone, ret) => ret(Histone.toNumber('   .9E+3   ') === 900),
	(Histone, ret) => ret(Histone.toNumber('   0.9E+3   ') === 900),
	(Histone, ret) => ret(Histone.toNumber('   3.9E+3   ') === 3900),
	(Histone, ret) => ret(Histone.toNumber('   +0x32   ') === 50),
	(Histone, ret) => ret(Histone.toNumber('   +0b01111110   ') === 126),
	(Histone, ret) => ret(Histone.toNumber('   +9   ') === 9),
	(Histone, ret) => ret(Histone.toNumber('   +.9   ') === 0.9),
	(Histone, ret) => ret(Histone.toNumber('   +0.9   ') === 0.9),
	(Histone, ret) => ret(Histone.toNumber('   +3.9   ') === 3.9),
	(Histone, ret) => ret(Histone.toNumber('   +9e3   ') === 9000),
	(Histone, ret) => ret(Histone.toNumber('   +.9e3   ') === 900),
	(Histone, ret) => ret(Histone.toNumber('   +0.9e3   ') === 900),
	(Histone, ret) => ret(Histone.toNumber('   +3.9e3   ') === 3900),
	(Histone, ret) => ret(Histone.toNumber('   +9e-3   ') === 0.009),
	(Histone, ret) => ret(Histone.toNumber('   +.9e-3   ') === 0.0009),
	(Histone, ret) => ret(Histone.toNumber('   +0.9e-3   ') === 0.0009),
	(Histone, ret) => ret(Histone.toNumber('   +3.9e-3   ') === 0.0039),
	(Histone, ret) => ret(Histone.toNumber('   +9e+3   ') === 9000),
	(Histone, ret) => ret(Histone.toNumber('   +.9e+3   ') === 900),
	(Histone, ret) => ret(Histone.toNumber('   +0.9e+3   ') === 900),
	(Histone, ret) => ret(Histone.toNumber('   +3.9e+3   ') === 3900),
	(Histone, ret) => ret(Histone.toNumber('   +9E3   ') === 9000),
	(Histone, ret) => ret(Histone.toNumber('   +.9E3   ') === 900),
	(Histone, ret) => ret(Histone.toNumber('   +0.9E3   ') === 900),
	(Histone, ret) => ret(Histone.toNumber('   +3.9E3   ') === 3900),
	(Histone, ret) => ret(Histone.toNumber('   +9E-3   ') === 0.009),
	(Histone, ret) => ret(Histone.toNumber('   +.9E-3   ') === 0.0009),
	(Histone, ret) => ret(Histone.toNumber('   +0.9E-3   ') === 0.0009),
	(Histone, ret) => ret(Histone.toNumber('   +3.9E-3   ') === 0.0039),
	(Histone, ret) => ret(Histone.toNumber('   +9E+3   ') === 9000),
	(Histone, ret) => ret(Histone.toNumber('   +.9E+3   ') === 900),
	(Histone, ret) => ret(Histone.toNumber('   +0.9E+3   ') === 900),
	(Histone, ret) => ret(Histone.toNumber('   +3.9E+3   ') === 3900),
	(Histone, ret) => ret(Histone.toNumber('   -0x32   ') === -50),
	(Histone, ret) => ret(Histone.toNumber('   -0b01111110   ') === -126),
	(Histone, ret) => ret(Histone.toNumber('   -9   ') === -9),
	(Histone, ret) => ret(Histone.toNumber('   -.9   ') === -0.9),
	(Histone, ret) => ret(Histone.toNumber('   -0.9   ') === -0.9),
	(Histone, ret) => ret(Histone.toNumber('   -3.9   ') === -3.9),
	(Histone, ret) => ret(Histone.toNumber('   -9e3   ') === -9000),
	(Histone, ret) => ret(Histone.toNumber('   -.9e3   ') === -900),
	(Histone, ret) => ret(Histone.toNumber('   -0.9e3   ') === -900),
	(Histone, ret) => ret(Histone.toNumber('   -3.9e3   ') === -3900),
	(Histone, ret) => ret(Histone.toNumber('   -9e-3   ') === -0.009),
	(Histone, ret) => ret(Histone.toNumber('   -.9e-3   ') === -0.0009),
	(Histone, ret) => ret(Histone.toNumber('   -0.9e-3   ') === -0.0009),
	(Histone, ret) => ret(Histone.toNumber('   -3.9e-3   ') === -0.0039),
	(Histone, ret) => ret(Histone.toNumber('   -9e+3   ') === -9000),
	(Histone, ret) => ret(Histone.toNumber('   -.9e+3   ') === -900),
	(Histone, ret) => ret(Histone.toNumber('   -0.9e+3   ') === -900),
	(Histone, ret) => ret(Histone.toNumber('   -3.9e+3   ') === -3900),
	(Histone, ret) => ret(Histone.toNumber('   -9E3   ') === -9000),
	(Histone, ret) => ret(Histone.toNumber('   -.9E3   ') === -900),
	(Histone, ret) => ret(Histone.toNumber('   -0.9E3   ') === -900),
	(Histone, ret) => ret(Histone.toNumber('   -3.9E3   ') === -3900),
	(Histone, ret) => ret(Histone.toNumber('   -9E-3   ') === -0.009),
	(Histone, ret) => ret(Histone.toNumber('   -.9E-3   ') === -0.0009),
	(Histone, ret) => ret(Histone.toNumber('   -0.9E-3   ') === -0.0009),
	(Histone, ret) => ret(Histone.toNumber('   -3.9E-3   ') === -0.0039),
	(Histone, ret) => ret(Histone.toNumber('   -9E+3   ') === -9000),
	(Histone, ret) => ret(Histone.toNumber('   -.9E+3   ') === -900),
	(Histone, ret) => ret(Histone.toNumber('   -0.9E+3   ') === -900),
	(Histone, ret) => ret(Histone.toNumber('   -3.9E+3   ') === -3900),
	(Histone, ret) => ret(Histone.toNumber('   0 x32   ') === undefined),
	(Histone, ret) => ret(Histone.toNumber('   0x 32   ') === undefined),
	(Histone, ret) => ret(Histone.toNumber('   0x3 2   ') === undefined),
	(Histone, ret) => ret(Histone.toNumber('   0 b01111110   ') === undefined),
	(Histone, ret) => ret(Histone.toNumber('   0b 01111110   ') === undefined),
	(Histone, ret) => ret(Histone.toNumber('   0b0 1111110   ') === undefined),
	(Histone, ret) => ret(Histone.toNumber('   0b01 111110   ') === undefined),
	(Histone, ret) => ret(Histone.toNumber('   0b011 11110   ') === undefined),
	(Histone, ret) => ret(Histone.toNumber('   0b0111 1110   ') === undefined),
	(Histone, ret) => ret(Histone.toNumber('   0b01111 110   ') === undefined),
	(Histone, ret) => ret(Histone.toNumber('   0b011111 10   ') === undefined),
	(Histone, ret) => ret(Histone.toNumber('   0b0111111 0   ') === undefined),
	(Histone, ret) => ret(Histone.toNumber('   9 9   ') === undefined),
	(Histone, ret) => ret(Histone.toNumber('   . 9   ') === undefined),
	(Histone, ret) => ret(Histone.toNumber('   0 .9   ') === undefined),
	(Histone, ret) => ret(Histone.toNumber('   3. 9   ') === undefined),
	(Histone, ret) => ret(Histone.toNumber('   9e 3   ') === undefined),
	(Histone, ret) => ret(Histone.toNumber('   9 e3   ') === undefined),
	(Histone, ret) => ret(Histone.toNumber('   3 . 9   ') === undefined),
	(Histone, ret) => ret(Histone.toNumber('   .9e 3   ') === undefined),
	(Histone, ret) => ret(Histone.toNumber('   0 .9e3   ') === undefined),
	(Histone, ret) => ret(Histone.toNumber('   3. 9e3   ') === undefined),
	(Histone, ret) => ret(Histone.toNumber('   9e -3   ') === undefined),
	(Histone, ret) => ret(Histone.toNumber('   .9e- 3   ') === undefined),
	(Histone, ret) => ret(Histone.toNumber('   0 .9e-3   ') === undefined),
	(Histone, ret) => ret(Histone.toNumber('   3. 9e-3   ') === undefined),
	(Histone, ret) => ret(Histone.toNumber('   9e+ 3   ') === undefined),
	(Histone, ret) => ret(Histone.toNumber('   .9e +3   ') === undefined),
	(Histone, ret) => ret(Histone.toNumber('   0 .9e+3   ') === undefined),
	(Histone, ret) => ret(Histone.toNumber('   3.9e+ 3   ') === undefined),
	(Histone, ret) => ret(Histone.toNumber('   9 E3   ') === undefined),
	(Histone, ret) => ret(Histone.toNumber('   . 9E3   ') === undefined),
	(Histone, ret) => ret(Histone.toNumber('   0.9 E3   ') === undefined),
	(Histone, ret) => ret(Histone.toNumber('   3. 9E3   ') === undefined),
	(Histone, ret) => ret(Histone.toNumber('   9E - 3   ') === undefined),
	(Histone, ret) => ret(Histone.toNumber('   . 9E-3   ') === undefined),
	(Histone, ret) => ret(Histone.toNumber('   0.9 E -3   ') === undefined),
	(Histone, ret) => ret(Histone.toNumber('   3. 9 E-3   ') === undefined),
	(Histone, ret) => ret(Histone.toNumber('   9 E+3   ') === undefined),
	(Histone, ret) => ret(Histone.toNumber('   . 9 E+ 3   ') === undefined),
	(Histone, ret) => ret(Histone.toNumber('   0. 9E+3   ') === undefined),
	(Histone, ret) => ret(Histone.toNumber('   3.9 E+3   ') === undefined),
	(Histone, ret) => ret(Histone.toNumber('   +0x 32   ') === undefined),
	(Histone, ret) => ret(Histone.toNumber('   +0b011 11110   ') === undefined),
	(Histone, ret) => ret(Histone.toNumber(' ') === undefined),
	(Histone, ret) => ret(Histone.toNumber('') === undefined),
	(Histone, ret) => ret(Histone.toNumber('\n') === undefined),
	(Histone, ret) => ret(Histone.toNumber('.') === undefined),
	(Histone, ret) => ret(Histone.toNumber('0x') === undefined),
	(Histone, ret) => ret(Histone.toNumber('0b') === undefined),
	(Histone, ret) => ret(Histone.toNumber('x0') === undefined),
	(Histone, ret) => ret(Histone.toNumber('b0') === undefined),
	(Histone, ret) => ret(Histone.toNumber('e3') === undefined),
	(Histone, ret) => ret(Histone.toNumber('3e') === undefined),
	(Histone, ret) => ret(Histone.toNumber('-') === undefined),
	(Histone, ret) => ret(Histone.toNumber('+') === undefined),
	(Histone, ret) => ret(Histone.toNumber('- 0') === undefined),
	(Histone, ret) => ret(Histone.toNumber('+ 0') === undefined),
	(Histone, ret) => ret(Histone.toNumber('-0') === 0),
	(Histone, ret) => ret(Histone.toNumber('+0') === 0),
	(Histone, ret) => ret(Histone.toNumber('true') === undefined),
	(Histone, ret) => ret(Histone.toNumber('-true') === undefined),
	(Histone, ret) => ret(Histone.toNumber('false') === undefined),
	(Histone, ret) => ret(Histone.toNumber('-false') === undefined),
	(Histone, ret) => ret(Histone.toNumber('null') === undefined),
	(Histone, ret) => ret(Histone.toNumber('-null') === undefined),
	(Histone, ret) => ret(Histone.toNumber('undefined') === undefined),
	(Histone, ret) => ret(Histone.toNumber('-undefined') === undefined),
	(Histone, ret) => ret(Histone.toNumber('NaN') === undefined),
	(Histone, ret) => ret(Histone.toNumber('-NaN') === undefined),
	(Histone, ret) => ret(Histone.toNumber('Infinity') === undefined),
	(Histone, ret) => ret(Histone.toNumber('-Infinity') === undefined),
	(Histone, ret) => ret(Histone.toNumber('NOT_A_NUMBER') === undefined),
	(Histone, ret) => ret(Histone.toNumber('0-NOT_A_NUMBER') === undefined),
	(Histone, ret) => ret(Histone.toNumber('-0 NOT_A_NUMBER') === undefined),
	(Histone, ret) => ret(Histone.toNumber('000000000') === 0),
	(Histone, ret) => ret(Histone.toNumber('0000000001') === 1),
	(Histone, ret) => ret(Histone.toNumber('0000000010') === 10),
	(Histone, ret) => ret(Histone.toNumber('0,32') === undefined),
	(Histone, ret) => ret(Histone.toNumber('0.32') === 0.32),
	(Histone, ret) => ret(Histone.toNumber('000000000000.32') === 0.32),
	(Histone, ret) => ret(Histone.toNumber('000000000000,32') === undefined),
	(Histone, ret) => ret(Histone.toNumber(/regexp/) === undefined),
	(Histone, ret) => ret(Histone.toNumber(new RegExp) === undefined),
	(Histone, ret) => ret(Histone.toNumber([]) === undefined),
	(Histone, ret) => ret(Histone.toNumber([0]) === undefined),
	(Histone, ret) => ret(Histone.toNumber({}) === undefined),
	(Histone, ret) => ret(Histone.toNumber({false: false}) === undefined),
	// (Histone, ret) => ret(Histone.toNumber(new Date(1985, 6, 25, 0, 0, 0, 0)) === 491083200000),
	(Histone, ret) => ret(Histone.toNumber(0, 1, 2) === 0),
	(Histone, ret) => ret(Histone.toNumber(1, 2, 3) === 1)

];