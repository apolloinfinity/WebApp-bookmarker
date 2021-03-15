window.onload = fetchBookmarks();

const bookmarksResults = document.getElementById('bookmarksResults');
document.getElementById('myForm').addEventListener('submit', saveBookmark);

async function saveBookmark(e) {
  e.preventDefault();
  const siteDescription = document.getElementById('siteDescription').value;
  const siteUrl = document.getElementById('siteUrl').value;
  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');

  if (!validateForm(siteDescription, siteUrl)) {
    return false;
  }

  const bookmark = {
    user: 'Javier',
    description: siteDescription,
    url: siteUrl,
  };

  await fetch('http://127.0.0.1:5000/api/bookmark', {
    method: 'POST',
    headers: myHeaders,
    body: JSON.stringify(bookmark),
  });
  // Clear form
  document.getElementById('myForm').reset();

  //   console.log(siteDescription, siteUrl);
}

async function fetchBookmarks() {
  const response = await fetch('http://127.0.0.1:5000/api/bookmark');
  if (response.status === 404) {
    bookmarksResults.innerHTML = `<div class="well">
    No bookmarks at this moment</div>
    `;
  } else {
    const bookmarks = await response.json();
    console.log(bookmarks.data);
    for (bookmark of bookmarks.data) {
      let description = bookmark.description;
      let url = bookmark.url;

      bookmarksResults.innerHTML += `<div class="well">
          <h3>${description}
              <a class="btn btn-default" target="_blank" href="${url}">Visit</a>
              <a onclick="deleteBookmark('${url}')" class="btn btn-danger" href="">Delete</a>
          </h3>
      </div>
      `;
    }
  }
}

function validateForm(siteDescription, siteUrl) {
  if (!siteDescription || !siteUrl) {
    alert('Please fill in the form');
    return false;
  }

  let expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
  let regex = new RegExp(expression);

  if (!siteUrl.match(regex)) {
    alert('Please use a valid URL');
    return false;
  }

  return true;
}
