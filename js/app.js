$(document).ready(function(){

	var apiKey     = '0771a4c95ca7e23d41e33f67a1da0000';
	var apiURL     = 'http://words.bighugelabs.com/api/2/' + apiKey; 


	
		
	function getWordSearch(word,json) {
		apiURL += "/" + word + "/" + json;
		console.log(apiURL);
	}




	function parseWord(data) {
		
		$('#synon').text(syn.noun);
	
	}



});