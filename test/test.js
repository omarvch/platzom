const expect = require('chai').expect
const platzom = require('..').default

describe('#platzom', function(){

	it('1) si la palabra termina con "ar", se le quitan esas dos letras',function(){
		const translation = platzom('programar');
		expect(translation).to.equal('program');
	})
})