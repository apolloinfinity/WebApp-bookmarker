document.getElementById('myForm').addEventListener('submit', saveBookmark);
function saveBookmark(e){
    // Get Values
    var siteName =  document.getElementById('siteName').value;
    var siteUrl =  document.getElementById('siteUrl').value;

    var bookmark = {
        name: siteName,
        url: siteUrl
    }

    /*
    // Local Storate Test
    localStorage.setItem('test', 'hello world');
    console.log(localStorage.getItem('test'));
    localStorage.removeItem('test');
    console.log(localStorage.getItem('test'));
    */

    if(localStorage.getItem('bookmarks') === null) {
        //Init Array
        var bookmarks = [];
        bookmarks.push(bookmark);
        // Set to localStorage
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    } else {
        // Get bookmarks from LocalStorage
        var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
        // Add book to array
        bookmarks.push(bookmark);
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));


    }

    // Prevents default behavior of form from submitting
    e.preventDefault();
}

// Fetch Bookmarks
function fetchBookmarks(){

    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

    // Get ouput id
    var bookmarksResults = document.getElementById('bookmarksResults');

    // Build output
    bookmarksResults.innerHTML = '';
    for(var i = 0; i < bookmarks.length; i++) {
        var name = bookmarks[i].name;
        var ulr = bookmarks[i].url;

        bookmarksResults.innerHTML += 
        '<div class="well">' + 
        '<h3>' + name + '</h3>' +
        '</div>'

    }
}