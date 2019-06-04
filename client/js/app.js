document.getElementById('myForm').addEventListener('submit', saveBookmark);

function saveBookmark(e) {

}

function validateForm(siteName, siteUrl) {
    if (!siteName || !siteUrl) {
        alert('Please fill in the form');
        return false;
    }

    var expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
    var regex = new RegExp(expression);

    if (!siteUrl.match(regex)) {
        alert("Please use a valid URL");
        return false;
    }

    return true;
}

fetch('')