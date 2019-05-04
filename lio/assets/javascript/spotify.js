$(document).ready(function () {
	function authorize() {
		
		var token = "BQAJSLUIi28zfsCu1uOohpJYEnnrCMiER8CvwsRbW7lpTUa-QiLpaETjBU4e6gM7kaDfg1RNrp2EizlBa4UqSL_sH4xjIn9wRsme7Uu0EGv2Jgtkr_Lc0cw1rVU-ZjVCktop-xvbmsXhspwgtuPyLka0Qf5bb54saJBlA6LGWAvy9brnIJj7poiCNUa1pR9pRNpAnUSk-6WUG1Dh7fo4x6H5zoRWUtQ"
		var queryURL = "https://api.spotify.com/v1/playlists/59ZbFPES4DQwEjBpWHzrtC"
		
		$.ajax({
			url: queryURL,
			headers: {
				'Authorization': 'Bearer ' + token
			},
			method: 'GET',
		}).then(function(response) {
			console.log(response);
			let plId= 'https://open.spotify.com/embed/playlist/'+ "6v1dsdZknqXf2xukNyeJ2x" + response.id;
			
			$("#player").attr('src', plId);
			
		})
	}
	
	const app = {};
	
	app.init = function() {
		
			
			authorize();
		
	if({"anger":parseInt} >= .9){
		userResponse = "6v1dsdZknqXf2xukNyeJ2x"
	}
	if({"happiness":parseInt} >= .9){
		userResponse = "37i9dQZF1DXdPec7aLTmlC"
	}
	if({"sadness":parseInt} >= .9){
		userResponse = "37i9dQZF1DWSqBruwoIXkA"
	}
	if({"neutral":parseInt} >= .9){
		userResponse = "37i9dQZF1DX6ziVCJnEm59"
	}

	}
	
	console.log(app.init)
	
	$(app.init);

	
});
