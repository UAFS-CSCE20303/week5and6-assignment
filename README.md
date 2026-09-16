## Week 5 and 6 Assignment: NodeJS/Express Forms Processing with HTTP GET and POST

### Objective:

Build an NodeJS/Express server backend that handles two different HTML forms: a search form using GET and a registration form using POST. Your server route handlers will dynamically build and return an HTML web page displaying the data sent by the browser.

#### 1. Static HTML Page (public/home.html)
Create an HTML page served from your public folder containing two forms:

Form 1 (GET Search):
* Method set to GET, action set to /search.
* Contains an input field named keyword and a submit button labeled "Search".

Form 2 (POST Registration):
* Method set to POST, action set to /register.
* Contains input fields named username and email, and a submit button labeled "Register".

#### 2. Express Middleware Configuration (server.js)
To read incoming form data on POST requests, configure Express to serve static files and parse URL-encoded body payloads: (**app.use**)

#### 3. Backend Route Handlers (server.js)
Modify your route handlers to read the incoming parameters and return dynamic HTML pages using template strings (res.send):

GET /search Handler:
* Accesses req.query.keyword.
* Returns an HTML string that renders and displays the searched keyword inside a paragraph tag.

POST /register Handler:
* Accesses req.body.username and req.body.email.
* Returns an HTML string rendering a confirmation heading and displaying the submitted form values.
