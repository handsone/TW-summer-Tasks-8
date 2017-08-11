"use strict";
let   main = require('../main/Postal-number.js');
var   expect = require('chai').expect;

describe('input a string of zip code , then return a string coding', function(){

	it ("input '95713' then return ||:|:::|:|:|:::|:::||::||::|:|:|", function(){
		let result = main('95713');
		expect(result).to.be.equal('||:|:::|:|:|:::|:::||::||::|:|:|');

	});

	it ("input '321578649' then return |::||:::|:|:::||:|:|:|:::||::|::||:::|::||:|:::|:|:|", function(){
		let result = main('321578649');
		expect(result).to.be.equal('|::||:::|:|:::||:|:|:|:::||::|::||:::|::||:|:::|:|:|');

	});

	it ("input '95713-3456' then return ||:|:::|:|:|:::|:::||::||:::||::|::|:|:|::||::|:::||", function(){
		let result = main('95713-3456');
		expect(result).to.be.equal('||:|:::|:|:|:::|:::||::||:::||::|::|:|:|::||::|:::||');
        }); 

	});
 	
	describe('input a string coding , then it return a string zip code', function(){
		it ("input '||:|:::|:|:|:::|:::||::||::|:|:|' , then return 95713", function(){
			let result = main('||:|:::|:|:|:::|:::||::||::|:|:|');
			expect(result).to.be.equal('95713');
		});
		it.skip ("input '||:|:::|:|:|:::|:::||::||:::||::|::|:|:|::||:::|:|:|', then it should return 95713-3456" , function(){
			let result = main('||:|:::|:|:|:::|:::||::||:::||::|::|:|:|::||:::|:|:|');
			expect(result).to.be.equal('95713-3456');
		});
});
