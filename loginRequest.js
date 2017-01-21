$(document).ready(function () {
	$('form').submit(function (event) {
		var arr = $(this).serializeArray();

		$.get("http://fizznow.com:8083/data", {name: arr[0], password: arr[1]}, function (data) {
			alert('Got the data: ' + data);
		});
	});
});