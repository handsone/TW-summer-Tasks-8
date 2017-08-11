"use strict";
module.exports = function (input){
	function changCodingTonumber(aCoding){
		let number  ;
		switch (aCoding){
			case '||:::' :number = 0 ;break ; 
			case ':::||' :number = 1 ;break ; 
			case '::|:|' :number = 2 ;break ; 
			case '::||:' :number = 3 ;break ; 
			case ':|::|' :number = 4 ;break ; 
			case ':|:|:' :number = 5 ;break ; 
			case ':||::' :number = 6 ;break ; 
			case '|:::|' :number = 7 ;break ; 
			case '|::|:' :number = 8 ;break ; 
			case '|:|::' :number = 9 ;break ; 
		}
		return number ; 
	}
	function changeNumberToCoding(aNumber){
		let Coding = '';
		switch(aNumber){
			case '0' :Coding = '||:::';break;
			case '1' :Coding = ':::||';break;
			case '2' :Coding = '::|:|';break;
			case '3' :Coding = '::||:';break;
			case '4' :Coding = ':|::|';break;
			case '5' :Coding = ':|:|:';break;
			case '6' :Coding = ':||::';break;
			case '7' :Coding = '|:::|';break;
			case '8' :Coding = '|::|:';break;
			case '9' :Coding = '|:|::';break;
		}
		return Coding ;
	}
	function getTheCoding  (input){
		var StringNumberArray = input.split('');
		StringNumberArray = StringNumberArray.filter((x) => x!== '-');
		let theSum = 0 ;
		let Coding = '|' ;
		for ( let everyLetter of StringNumberArray  ){
			theSum += Number(everyLetter);
			Coding += changeNumberToCoding(everyLetter);	
		}
		return   Coding  += changeNumberToCoding(String(10 - theSum % 10) ) + '|' ;

	}
	function getTheNumber(input){
		let TheCodingArray = input.split('');
		TheCodingArray.pop();
		TheCodingArray.shift();
		let StringCodingArray = [];
		let TheNumber = '';
		for ( let  i = 0 ; i < input.length ; i ++ ){
			if ( i % 5 === 0  ){
				StringCodingArray.push(TheCodingArray.slice(i,i+5).join(''));
			}
		}
		for ( let j = 0 ; j < StringCodingArray.length - 2 ; j ++ ){
			TheNumber += changCodingTonumber(StringCodingArray[j]);
		}
		if (TheNumber.length === 9){
			let thenumberarray = TheNumber.split('');
			thenumberarray.splice(5 , 0 , '-');
			TheNumber = thenumberarray.join('');
		}
		return TheNumber ;
	}
	if (input[0] !== '|'){
		return getTheCoding(input);
	}
	return getTheNumber(input);
};
