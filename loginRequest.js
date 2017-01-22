var HttpClient = function () {
	this.get = function (url, input, callback) {
		var anHttpRequest = new XMLHttpRequest();
		anHttpRequest.onreadystatechange = function () {
			if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200) {
				callback(anHttpRequest.responseText);
			}
		}

		anHttpRequest.open('GET', url, true);
		anHttpRequest.send(input);
	}
}

var elem = document.getElementById('target');
elem.addEventListener('submit', function (input) {
	console.log('Reached here');
	var client = new HttpClient();
	client.get('https://www.google.com/', input, function (data) {
		document.getElementById('channeldisplay').textContent = 'Channel Name: ' + input.username;
		//document.getElementById('numusers').textContent = 'Number of users: ' + data.numUsers;
	})
}, false);