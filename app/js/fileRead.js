function checkWord (player) {

	var dictionaryString; // word + meaning
	var dictionaryWord; // slice word from dictionary
	var meaning; // slice meaning from dictionary

	var inputWord = arrayOfInputLetters.join(''); // making word from entered array
	var i = 0; // counter for loop

	while (i < data.length) {

		dictionaryString = data[i];
		// search entered word in dictionary
		for (var j = 0; j < dictionaryString.length; j++) {
			if (dictionaryString[j] == ' ') {
				dictionaryWord = dictionaryString.slice(0, j);
				meaning = dictionaryString.slice(j + 1);
				break;
			}
		}

		if (inputWord == dictionaryWord) {

			if (player == 1){
				$('.words-1').append('<p>' + dictionaryWord + ' ' + meaning + '<p/>');
			}
			if (player == 2) {
				$('.words-2').append('<p>' + dictionaryWord + ' ' + meaning + '<p/>');
			}

			return true;
		}

		i++;
	}

	return false;
}
