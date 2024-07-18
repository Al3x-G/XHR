const baseURL = "https://ci-swapi.herokuapp.com/api/";

function getData(type, cb) {
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            cb(JSON.parse(this.responseText));
        }
    };

    xhr.open("GET", baseURL + type + "/");
    xhr.send();
}

function writeToDocument(type) {
    getData(type, function(data) {
        document.getElementById("data").innerHTML = data;
    });
}


/*
var xhr = new XMLHttpRequest();


xhr.open("GET", "https://ci-swapi.herokuapp.com/api/");
xhr.send();

xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        document.getElementById("data").innerHTML = this.responseText;
    }
};
 
XML - Extensible Markup Language

This XMLHttpRequest object is an inbuilt object that JavaScript provides, to allow us to consume 
APIs. So this gives us the method to open connections, to send connections, and close them. The 
example shown returns a string of data. 

GET retrieves data, POST sends data 

"readyState = 4" means that the operation has been completed.
0 means that open() has not been called yet.
1 means that the open() method has been called.
A readyState of 2 is that send() has been called.
3 means that the responseText now has some data in it.
And 4, the one that we are checking for, is that the entire operation is complete.

The HTTP status code of 200 means "OK".
Other common HTTP status codes - 
301 for instance, means moved permanently.
401 is "Unauthorized".
403, "Forbidden".
404, one of the most common ones that we see, is "Page not found". 
The page that we're looking for doesn't exist at this location.
And 500, which we can often see, is "Internal server error", where something has gone 
wrong with the server.
So the HTTP status code of 200 means "request succeeded, content delivered'.

*/