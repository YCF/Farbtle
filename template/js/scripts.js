/* search function */
function search() {
    if (document.getElementById('search-bar').value) {
        location.href = 'http://' + location.host + '?s=' + document.getElementById('search-bar').value
    }
    else {
        return false;
    }
}