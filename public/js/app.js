const validateForm = (siteName, siteUrl) => {
	if (!siteName || !siteUrl) {
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
};

const saveBookmark = (e) => {
	const siteName = document.getElementById('siteName').value;
	const siteUrl = document.getElementById('siteUrl').value;

	if (!validateForm(siteName, siteUrl)) {
		return false;
	}

	const bookmark = {
		name: siteName,
		url: siteUrl
	};

	const options = {
		method: 'POST',
		body: JSON.stringify(bookmark),
		headers: {
			'Content-Type': 'application/json'
		}
	};

	fetch('/bookmark', options)
	document.getElementById('myForm').reset();
	e.preventDefault();
};

document.getElementById('myForm').addEventListener('submit', saveBookmark);
