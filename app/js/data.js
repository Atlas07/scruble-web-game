var tempRandomLetter,
	totalCounter1 = 0, // player1 score counter
	totalCounter2 = 0; // player2 score counter

var arrayOfInputLetters = [],  // array for entered letters
	bonusArray = [], // array for bonuses (img)
	tdArray = []; // remembering place of entered letters

var bonusPos = {}; // for counting bonuses

var lettersNum = 7
	contextTemp = 0; // for right generating empty tiles

var letters = {

	0: {
		letter: 'a',
		price: 1,
		quantity: 9
	},
	1: {
		letter: 'b', 
		price: 3,
		quantity: 2
	},
	2: {
		letter: 'c',
		price: 3,
		quantity: 2
	},
	3: {
		letter: 'd',
		price: 2,
		quantity: 3
	},
	4: {
		letter: 'e',
		price: 1,
		quantity: 12
	},
	5: {
		letter: 'f',
		price: 4,
		quantity: 2
	},
	6: {
		letter: 'g',
		price: 2,
		quantity: 3
	},
	7: {
		letter: 'h',
		price: 4,
		quantity: 2
	},
	8: {
		letter: 'i',
		price: 1,
		quantity: 9
	},
	9: {
		letter: 'j',
		price: 2,
		quantity: 1
	},
	10: {
		letter: 'k',
		price: 5,
		quantity: 1
	},
	11: {
		letter: 'l',
		price: 1,
		quantity: 4
	},
	12: {
		letter: 'm',
		price: 3,
		quantity: 2
	},
	13: {
		letter: 'n',
		price: 1,
		quantity: 7
	},
	14: {
		letter: 'o',
		price: 1,
		quantity: 8
	},
	15: {
		letter: 'p',
		price: 3,
		quantity: 2
	},
	16: {
		letter: 'q',
		price: 10,
		quantity: 1
	},
	17: {
		letter: 'r',
		price: 1,
		quantity: 6
	},
	18: {
		letter: 's',
		price: 1,
		quantity: 4
	},
	19: {
		letter: 't',
		price: 1,
		quantity: 6
	},
	20: {
		letter: 'u',
		price: 1,
		quantity: 4
	},
	21: {
		letter: 'v',
		price: 4,
		quantity: 2
	},
	22: {
		letter: 'w',
		price: 4,
		quantity: 2
	},
	23: {
		letter: 'x',
		price: 8,
		quantity: 1
	},
	24: {
		letter: 'y',
		price: 8,
		quantity: 1
	},
	25: {
		letter: 'z',
		price: 10,
		quantity: 1
	}

};