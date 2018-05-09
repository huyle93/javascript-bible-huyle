# Asynchronous JavaScript and XML

## Synchronous Requests

The vast majority of the requests web browsers make of servers are **synchronous**

**Synchronous requests** are synchronized, in that the browser makes the request and halts other functionality until the response arrives.
* Typically, the arrival of the response involves the rendering of a new web page.
* The time this takes to complete involves not just the time to transmit the request, wait, and receive the response, but also the time it takes to render a fresh page.
* This time if often perceptible to the user as sluggishness or "flashing" of the browser window.

## Asyncronous Requests

**Asynchronous requests** are not synchronized, in that the browser can make such a request and then go about other business while awaiting a response.
* Only after the response is fully received does the browser need to turn its attention back to dealing with that response
* Since other things are going on while the request is sent, and the browser is waiting, and the response is being received, the user doesn’t perceive any delay
* And if we can use JavaScript to insert some or all of the response content into the current page’s DOM, there’s no need to render an entirely new page
* This can greatly improve the perceived responsiveness of a web application

## History of Web Interactivity

* 1991, when the web was first introduced, interactivity was limited primarily to following links
* 1993, Mosaic browser was released, it provided the initial support for forms
* 1999, Microsoft added an ActiveX control to IE5 that allowed for asynchronous requests to the server. Most other browers eventually followed suit. Well done, IE :) 
* 2004 - 2005, Google released Gmail and Google Maps, both of which relied heavily upon this functionality, effectively revolutionizing the concept of a **web application**
* 2005, Jesse James Garrett published the article in which he coined the term **AJAX** and laid out its initial specs
* * Originally, it was an acronym standing for Asynchronous JavaScript and XML
* * As XML has fallen out of favor, the term has morphed simply into the name “Ajax”
* * Today, Ajax has become an essential part of most household names on the Web 

## Same-origin Policy

Sometimes a script in one resource needs to access data contained in another resource
* But obviously this could lead to a security hole if allowed without restriction
* As such, virtually every browser since Netscape 2 has implemented a **same-origin policy** that allows this to occur only when both resources originate from the same host (via the same protocol and port)
* The idea is that the same server would already have access to any information it might be trying to steal from resources that it has provided
* * But a malicious script delivered to your browser from a server would not be able to access the data in any pages you have obtained from other servers
* * This is an important component of keeping the Web secure

However, since Ajax is often used to access resources from other servers, there needs to be some way to work around this limitation without forfeiting all of its security protections

## Cross-origin resource sharing (CORS)

There are various ways of getting around the same-origin policy, but a common option is CORS

* CORS is popular because it can be handled behind the scenes by the browser and the server, without requiring the direct involvement of the user or the developer
* CORS operates through the exchange of special **HTTP headers** in the requests and responses that move between the browser and the server
* Configured on the server side, CORS allows for browsers to be given access to data deemed suitable for them to use
* * Browsers can utilize this information to selectively override their same-origin policies for servers willing to allow access
* * In turn, this makes it possible for access to be allowed when appropriate and restricted when necessary

Alternative workarounds involve **JSON with Padding (JSONP), WebSockets, cross-document messaging**, and manipulating the **document.domain** property

## XMLHttpRequest

The key to performing asynchronous requests from JavaScript is the built-in **XMLHttpRequest** object

Don’t let the XML in the name confuse you; that’s just a historical artifact
* This first became available in MS IE 5
* It was subsequently adopted by all major browsers
* But it wasn’t standardized until the release of HTML5

Use new XMLHttpRequest() to generate a new XMLHttpRequest object and assign the returned reference to a variable. Then, through that variable you can access the properties and methods you need to manipulate and use that object
* The most important properties of this object are its readystate property and its various response-related properties
* The most important methods are open() and send()

Note that XMLHttpRequest objects cannot be reused
* Use each one to handle only a single transaction with the server
* If there are additional transactions, create a new XMLHttpRequest object for each one

## Preparing a request

An asynchronous request must be properly configured before it can be sent to a server

1. Start the process by generating a new **XMLHttpRequest** object
2. Then invoke that object’s open() method with three arguments
- The first argument needs to be a string representing an HTTP verb
- - There are several HTTP verbs, but most commonly you’ll use "GET" to request a resource and "POST" to send data
- The second argument should be a string representing the URL to which the request will be sent
- - It can be either an absolute URL or a relative URL
- The third argument should be true
- - Passing a third argument of false will cause the request to be sent synchronously, which is almost never desirable

A basic request:
```js
var xhttp = new XMLHttpRequest();
xhttp.open("GET", "demo_get.asp", true);
xhttp.send();
```

By default, an asynchronous request remains in effect **indefinitely**

* Set the XMLHttpRequest object’s timeout property to a number of milliseconds to establish a time at which it will give up
* If there’s an action that needs to be taken when the request times out, specify it as an event listener for the timeout event on the XMLHttpRequest object

## Issuing a request

Once a request has been properly configured, it can be sent to the server
* Which server it gets sent to will be determined by the URL with which it was configured
* What type of message gets sent will be determined by the HTTP verb used to configure it
* What, if any, data gets sent along with the request is determined by the argument used at the time it is sent
* To send a request, invoke its object’s **send()** method
* * If you’re simply requesting a static resource, you can invoke **send()** without any argument
* * If you wish to send data with your request to be used in producing a dynamically generated document, pass that data as an argument to **send()**
* * * **send()** accepts several types of data as an argument but the simplest possibility is a string representing a URL encoded query or JSON
* * * When sending some types of data, you must first use the XMLHttpRequest object’s setRequestHeader() method to establish the proper **HTTP Content-type header** on the request
* * If you need to alter the **MIME type** of the server’s response to fit your code’s expectations, you can invoke the request’s **overrideMimeType()** method with the desired MIME type expressed as a string argument ("application/json" is common)
* * * Remember to do this before you invole the **send()** method

## Awaiting a response

The whole point to an asynchronous request is that we don’t want to actually wait for it to be fulfilled
* We want to go ahead and let the program continue running (and maybe even finish)
* We can deal with the arrival of the response when it happens
* We’ve already seen numerous instances of this type of solution; we need an event listener

Before we actually send the request to the server, we first establish an event listener on the **XMLHttpRequest** object’s **readystatechange** event
* This listener contains whatever code is needed to handle the response when it arrives
* However, it’s important to realize that the **readystatechange** event fires several times during the process
* * Each time it fires, we can examine the XMLHttpRequest object’s readystate property to find out what has changed
* * In general, we’re only interested in acting once the value of the readystate property is set to 4, which indicates completion of the request
* * Just because the request is complete, however, doesn’t guarantee that it was successful
* * So we almost always want to also check that the value of the XMLHttpRequest object’s status property is 200 before proceeding
* * * There are various status codes that indicate success, but the most common one is 200
* * * For a more complete list see https://en.wikipedia.org/wiki/List_of_HTTP_status_codes 

A basic HTML AJAX call:
```html
<!DOCTYPE html>
<html>
<body>

<div id="demo">
<h2>The XMLHttpRequest Object</h2>
<button type="button" onclick="loadDoc()">Change Content</button>
</div>

<script>
function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("demo").innerHTML =
      this.responseText;
    }
  };
  xhttp.open("GET", "ajax_info.txt", true);
  xhttp.send();
}
</script>

</body>
</html>
```

## Handling a response

Once the listener has determined that the request is complete and was successful, it generally goes on to do something with the contents of the response
* At this point, the response is accessible through several properties of the XMLHttpRequest object
* **response** contains the unaltered response, which might be text, HTML code, JSON, XML, or some other type of file
* **responseType** contains a string describing the nature of the data response contains
* For a list of possible response types see https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/responseType 
* **responseText** contains a string representation of the response
* **responseXML** contains a reference to a document object that can be treated as the root of a DOM

## Using a Callback Function

If you have more than one AJAX task in a website, you should create one function for executing the XMLHttpRequest object, and one callback function for each AJAX task.

The function call should contain the URL and what function to call when the response is ready.

A sample of using Callback
```js
loadDoc("url-1", myFunction1);

loadDoc("url-2", myFunction2);

function loadDoc(url, cFunction) {
  var xhttp;
  xhttp=new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      cFunction(this);
    }
 };
  xhttp.open("GET", url, true);
  xhttp.send();
}

function myFunction1(xhttp) {
  // action goes here
} 
function myFunction2(xhttp) {
  // action goes here
}
```

HTML sample:
```js
<!DOCTYPE html>
<html>
<body>

<div id="demo">

<h1>The XMLHttpRequest Object</h1>

<button type="button"
onclick="loadDoc('ajax_info.txt', myFunction)">Change Content
</button>
</div>

<script>
function loadDoc(url, cFunction) {
  var xhttp;
  xhttp=new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      cFunction(this);
    }
  };
  xhttp.open("GET", url, true);
  xhttp.send();
}
function myFunction(xhttp) {
  document.getElementById("demo").innerHTML =
  xhttp.responseText;
}
</script>
</body>
</html>
```

## Sending data with a request

If the HTTP verb used to configure the request supports it (typically POST), data can be submitted to the server by simply specifying the data as a string argument to the **send()** method
* This is often a stringified JSON object, but it can be any string data the server is prepared to accept

If you’re submitting the contents of an HTML form, building a JSON object to represent the form data can require a lot of steps
* And if the form supports file uploads, things get much more complicated
* For this reason, modern browsers support a **FormData** interface that greatly simplifies this process

### formData()

Just use the new operator with the FormData() constructor to generate a new FormData object

* This constructor can accept a reference to a form’s element node in the DOM and will construct and stringify a form data set automatically
* It can also be called without an argument to create an empty FormData object, to which individual name-value pairs can be added using its append() method
* The **send()** method can just accept a reference to a FormData object as its argument

A sample of formData() with pure JavaScript:
```html
<form id="myForm">
    <label for="myName">Send me your name:</label>
    <input id="myName" name="name" value="John">
    <input type="submit" value="Send Me!">
</form>

<script>
    window.addEventListener("load", function () {
        function sendData() {
            var XHR = new XMLHttpRequest();

            // Bind the FormData object and the form element
            var FD = new FormData(form);

            // Define what happens on successful data submission
            XHR.addEventListener("load", function (event) {
                alert(event.target.responseText);
            });

            // Define what happens in case of error
            XHR.addEventListener("error", function (event) {
                alert('Oops! Something went wrong.');
            });

            // Set up our request
            XHR.open("POST", "https://example.com/cors.php");

            // The data sent is what the user provided in the form
            XHR.send(FD);
        }

        // Access the form element...
        var form = document.getElementById("myForm");

        // ...and take over its submit event.
        form.addEventListener("submit", function (event) {
            event.preventDefault();

            sendData();
        });
    });
</script>
```
A sample of formData() with jQuery:
```js
var fd = new FormData();    
fd.append( 'file', input.files[0] );

$.ajax({
  url: 'http://example.com/script.php',
  data: fd,
  processData: false,
  contentType: false,
  type: 'POST',
  success: function(data){
    alert(data);
  }
});

```
Another sample of formData with jQuery:
```js
var formData = new FormData();

formData.append('name', dogName);
// ... 
formData.append('file', document.getElementById("dogImg").files[0]);


$.ajax({
    type: "POST",
    url: "/foodoo/index.php?method=insertNewDog",
    data: formData,
    processData: false,
    contentType: false,
    success: function(response) {
        console.log(response);
    },
    error: function(errResponse) {
        console.log(errResponse);
    }
});
```