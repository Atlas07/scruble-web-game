window.onload = function () {

	randomLetters('player1', lettersNum); // player1 = html class
	randomLetters('player2', lettersNum);
	var letter, place, temp;


	$('td').contextmenu(function() {
		var place = $(this); // current td
		var letter = place.children('li');
		
		contextTemp ++;

		// pushing letter into array of all letters
		arrayOfInputLetters.push(letter.context.lastChild.textContent);

		if( place.children().is('img') ){
			bonusPos.currentPos = place.children();
			// counting bonuses for current letter with image
			bonus(bonusPos);
		}
		else { // for bonuses if tile without image
			bonusArray.push(1);
		}
		console.log(arrayOfInputLetters);
		return false;
	});

//----------------------------First player-----------------------------------
//---------------------------------------------------------------------------

	$('#play1').click(function(){
		$('body').on( 'click', '.player1', putLetters );
	});

	$('#end-play1').click(function(){
		$('body').off( 'click', '.player1', putLetters );
		var tempSum = 0;

		bonusPos.length = arrayOfInputLetters.length;

		if ( checkWord(1) == true ) { // if word is founded in dictionary
			
			for(var i = 0; i < arrayOfInputLetters.length; i++) {
				// counting price of the single word
				tempSum += sum(letters, arrayOfInputLetters[i], bonusArray[i]);
			}
			
			// counting how much letter used
			for (var i = 0; i < arrayOfInputLetters.length - contextTemp; i++) {
				$('#player1 ul').append('<li class="player1"></li>');
			}

			//adding score
			totalCounter1 += tempSum;
			$('.score-1').text(totalCounter1);


			// randomLetters('player1', lettersNum);
			trying(1, lettersNum);

			tdArray.length = 0;
			contextTemp = 0;
		}
		else {
			console.log("There is no such word, try again");
			putLettersBack(1); // 1 - player's number
			tdArray.length = 0;
		}

		// cleaning arrays
		arrayOfInputLetters.length = 0; 
		bonusArray.length = 0;
		
	});

//----------------------------Second player----------------------------------
//---------------------------------------------------------------------------

	$('#play2').click(function(){
		$('body').on( 'click', '.player2', putLetters );
	});

	$('#end-play2').click(function(){
		$('body').off( 'click', '.player2', putLetters );
		var tempSum = 0;

		bonusPos.length = arrayOfInputLetters.length;

		if ( checkWord(2) == true ) { // if word is founded in dictionary
			
			for(var i = 0; i < arrayOfInputLetters.length; i++) {
				// counting price of the single word
				tempSum += sum(letters, arrayOfInputLetters[i], bonusArray[i]);
			}
			
			// counting how much letter used
			for (var i = 0; i < arrayOfInputLetters.length - contextTemp; i++) {
				$('#player2 ul').append('<li class="player2"></li>');
			}

			//adding score
			totalCounter2 += tempSum;
			$('.score-2').text(totalCounter2);


			// randomLetters('player2', lettersNum);
			trying(2, lettersNum);

			tdArray.length = 0;
			contextTemp = 0;
		}
		else {
			console.log("There is no such word, try again");
			putLettersBack(2); // 2 - player's number
			tdArray.length = 0;
		}

		// cleaning arrays
		arrayOfInputLetters.length = 0; 
		bonusArray.length = 0;
		
	});

//----------------------------Chenging one letter----------------------------
//---------------------------------------------------------------------------

	$('#change1').click(function(){
		$('body').on( "click", ".player1", changeLetter );
	});

	$('#end1').click(function(){
		$('body').off( "click", ".player1", changeLetter );
	});

	$('#change2').click(function(){
		$('body').on( "click", ".player2", changeLetter );
	});

	$('#end2').click(function(){
		$('body').off( "click", ".player2", changeLetter );
	});


}

//---------------------------------------------------------------------------

function trying (gamer, lettersNum) {
	var getLetter;
	var index = 0;

	if (gamer == 1){
		getLetter = $('ul .player1');
	}
	if (gamer == 2){
		getLetter = $('ul .player2')
	}

	for (var i = 0; i < lettersNum; i++){

		if (getLetter[i].innerHTML == "") {
			index = i;
			break;
		}
	}

	for (var i = index; i < lettersNum; i++){
		tempRandomLetter = Math.floor( 25 * Math.random() );

		if (letters[tempRandomLetter].quantity > 0) {
			getLetter[i].innerHTML = letters[tempRandomLetter].letter;
			letters[tempRandomLetter].quantity --;
		}
		else {
			do {
				tempRandomLetter = Math.floor( 25 * Math.random() );
			} while (letters[tempRandomLetter].quantity == 0);

			getLetter[i].innerHTML = letters[tempRandomLetter].letter;
			letters[tempRandomLetter].quantity --;
		}
	}

}

// --------------- generating 7 random letters ------------------------------------
// --------------------------------------------------------------------------------

function randomLetters (gamer, lettersNum) { // lettersNum can't be greater than 7
	var getLetter = document.getElementsByClassName(gamer);
		for (var i = 0; i < lettersNum; i++){
			tempRandomLetter = Math.floor( 25 * Math.random() );

			if (letters[tempRandomLetter].quantity > 0) {
				getLetter[i].innerHTML = letters[tempRandomLetter].letter;
				letters[tempRandomLetter].quantity --;
			}
			else {
				do {
					tempRandomLetter = Math.floor( 25 * Math.random() );
				} while (letters[tempRandomLetter].quantity == 0);

				getLetter[i].innerHTML = letters[tempRandomLetter].letter;
				letters[tempRandomLetter].quantity --;
			}
		}
	// }

}

//------------------------- changing letter --------------------------------
//---------------------------------------------------------------------------
function changeLetter () {

		tempRandomLetter = Math.floor( 25 * Math.random() );

		if (letters[tempRandomLetter].quantity > 0) {
			this.innerHTML = letters[tempRandomLetter].letter;
			letters[tempRandomLetter].quantity --;
		}
		else {
			do {
				tempRandomLetter = Math.floor( 25 * Math.random() );
			} while (letters[tempRandomLetter].quantity == 0);

			this.innerHTML = letters[tempRandomLetter].letter;
			letters[tempRandomLetter].quantity --;
		}
}

// ----------------------- putting letter -----------------------------------
//---------------------------------------------------------------------------
function putLetters() {
	var flag;
	var	letter = $(this); // current li with letter
	var check = false;

		$('td').on('click', function() {

			if(!check) {
				place = 0;
				place = $(this); // current td

				tdArray.push(place);
				
				if( place.children().is('img') ){
					bonusPos.currentPos = place.children();
					// counting bonuses for current letter with image
					bonus(bonusPos);
					
					$(place).children('img').css({'display':'none'});
				}
				else { // for bonuses if tile without image
					bonusArray.push(1);
				}

				$(letter).appendTo( $(place) );

				arrayOfInputLetters.push(letter.context.firstChild.data);
				console.log(arrayOfInputLetters);
				check = true;
			}
		});
}
// ---------------------- putting letters back
//----------------------------------------------------------------------------
function putLettersBack(player) {
	if (player == 1) player = '#player1 ul';
	if (player == 2) player = '#player2 ul';

	for (var i = 0; tdArray[i]; i++) {
		tdArray[i].children('li').appendTo(player);

		if( tdArray[i].children().is('img') ){
			tdArray[i].children('img').css({'display':'block'});
		}	
	}

	alert("There is no such word, try again");
}

// ---------------------------- counting sum --------------------------------
//---------------------------------------------------------------------------
function sum (letters, letterFromArray, bonusArrayElem) {
	var price = 0;
	for (i in letters) {
		if (letterFromArray == letters[i].letter) {
			price = letters[i].price * bonusArrayElem;
			return price;
		}
	}
}

// ------------------------------ counting bonuses --------------------------
//---------------------------------------------------------------------------
function bonus (bonusPos) { // bonusPos = img
		if( bonusPos.currentPos.attr('alt') === 'tl'
			|| bonusPos.currentPos.attr('alt') === 'td') bonusArray.push(2);
		if ( bonusPos.currentPos.attr('alt') === 'dw' 
			|| bonusPos.currentPos.attr('alt') === 'tw') bonusArray.push(3);
		else {
			bonusArray.push(1);
		}
}