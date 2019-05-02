$(document).ready(function () {
	function authorize() {
		var queryURL = "https://cors-anywhere.herokuapp.com/https://accounts.spotify.com/authorize?client_id=404cd5ddbefc43d09fed23f29cd77530" +
				"&response_type=token&redirect_uri=https:%2F%2Fakili1999.github.io%2FGroupProjectOne%2F"
		$.ajax({
			url: queryURL,
			method: 'GET',
		}).then(function(response) {
			console.log(response);
			
		})
	}
  
  	
		$('form').on('submit', function(e) {
			e.preventDefault();
			authorize();
      		});
	
	
 });
