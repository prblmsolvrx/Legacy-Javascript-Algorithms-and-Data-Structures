let movieName = "2001: A Space Odyssey";
let noNumRegex = /\D/g; // Change this line - its for non digit
let result = movieName.match(noNumRegex).length;