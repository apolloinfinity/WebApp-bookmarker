$(document).ready(function() {
	$('form').on('submit', function() {
		const name = $('input#siteName');
		const url = $('input#siteUrl');
		const user = 'Ramirez, Javier';

		if (!validateForm(siteName, siteUrl)) {
		}

		const bookmark = {
			name: name.val(),
			url: url.val(),
			user: user
		};

		console.log(name + url);

		$.ajax({
			type: 'POST',
			url: '/bookmark',
			data: bookmark,
			success: function(data) {
				//do something with the data via front-end framework
				location.reload();
			}
		});

		return false;
	});

	$('a.delete').on('click', function(e) {
		const id = $('.well').attr('id');
		e.preventDefault();
		// console.log(`Clicked ${item}`);
		$.ajax({
			type: 'DELETE',
			url: '/bookmark/' + id,
			success: function(data) {
				//do something with the data via front-end framework
				location.reload();
			}
		});
	});
});

function validateForm(siteName, siteUrl) {
	if (!siteName || !siteUrl) {
		$('#myModal').on('shown.bs.modal', function() {
			$('#myInput').trigger('focus');
		});
		alert('Please fill in the form');
		return false;
	}

	var expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
	var regex = new RegExp(expression);

	if (!siteUrl.match(regex)) {
		alert('Please use a valid URL');
		return false;
	}

	return true;
}
