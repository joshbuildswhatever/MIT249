/* Display the last time this document was modified */
var msg = '<p><b>Last Modified: </b>' + document.lastModified + '</p>';
var el = document.getElementById('footer');

el.innerHTML = msg;