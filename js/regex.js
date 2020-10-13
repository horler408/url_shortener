/*var expression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
var regex = new RegExp(expression);
var t = 'www.google.com';

if (t.match(regex)) {
  alert("Successful match");
} else {
  alert("No match");
}
*/

//Http_Regex: 'https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)'
//[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)

//(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})

const cors = 'https://cors-anywhere.herokuapp.com/'
fetch(`${cors}https://url-shortener-service.p.rapidapi.com/shorten`, {
	"method": "POST",
	"headers": {
		"x-rapidapi-host": "url-shortener-service.p.rapidapi.com",
		"x-rapidapi-key": "d05af97474msh7862c7f459849eap1c29f3jsnc3a3c2f01a5c",
		"content-type": "application/x-www-form-urlencoded"
	},
	"body": {
		"url": "https://google.com/"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.log(err);
});