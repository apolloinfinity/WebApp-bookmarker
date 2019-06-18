document.getElementById('myForm').addEventListener('submit', saveBookmark);
fetchBookmarks();

function saveBookmark(e) {
    const siteName = document.getElementById('siteName').value;
    const siteUrl = document.getElementById('siteUrl').value;

    if (!validateForm(siteName, siteUrl)) {
        return false;
    }

    const bookmark = {
        name: siteName,
        url: siteUrl
    }

    fetch('http://127.0.0.1:5000/api/bookmarks', {
        method: 'POST',
        headers: { "Content-Type": "application/json; charset=utf-8" },
        body: JSON.stringify(bookmark)
    });

    // Clear form
    document.getElementById('myForm').reset();

    // Refetches Bookmarks
    fetchBookmarks();

    // Prevents default behavior of form from submitting
    e.preventDefault();
}

function deleteBookmark(url) {

}

function validateForm(siteName, siteUrl) {
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
}

// async function fetchBookmarks() {

//     const bookmarksResults = document.getElementById('bookmarksResults');

//     let response = await (await fetch('http://127.0.0.1:5000/api/bookmarks'));
//     let bookmarks = await response.json();
//     console.log(bookmarks)

//     for (bookmark of bookmarks) {
//         let name = bookmark.bookmarkName;
//         let url = bookmark.bookmarkURL;
//         bookmarksResults.innerHTML +=
//             `<div class="well">
//             <h3>${name}
//                 <a class="btn btn-default" target="_blank" href="${url}">Visit</a>
//                 <a onclick="deleteBookmark('${url}')" class="btn btn-danger" href="">Delete</a>
//             </h3>
//         </div>
//         `
//     };

// }

function fetchBookmarks() {

    const bookmarksResults = document.getElementById('bookmarksResults');

    fetch('http://127.0.0.1:5000/api/bookmarks')
        .then((resp) => {
            if (resp.ok) {
                return resp.json();
            } else {
                return Promise.reject('Something went wrong!');
            }
        })
        .then(bookmarks => {
            for (bookmark of bookmarks) {
                let name = bookmark.name;
                let url = bookmark.url;
                bookmarksResults.innerHTML +=
                    `<div class="well">
                <h3>${name}
                    <a class="btn btn-default" target="_blank" href="${url}">Visit</a>
                    <a onclick="deleteBookmark('${url}')" class="btn btn-danger" href="">Delete</a>
                </h3>
            </div>
            `
            };
        }).catch(error => console.log(`Error is ${error}`));
}
