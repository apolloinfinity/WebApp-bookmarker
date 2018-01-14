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

    if(localStorage.getItem('bookmarks')=== null) {
        //Init Array
        var bookmarks = [];
        bookmarks.push(bookmark);
        // Set to localStorage
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    }

    // Prevents default behavior of form from submitting
    e.preventDefault();
}