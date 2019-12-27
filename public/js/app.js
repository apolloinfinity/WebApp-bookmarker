$(document).ready(function() {
	$('form').on('submit', function() {
		const name = $('input#siteName');
		const url = $('input#siteUrl');

		const bookmark = {
			name: name.val(),
			url: url.val()
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
