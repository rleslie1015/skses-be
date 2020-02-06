# Node back end for my personal vision board app
**This is a personal side project to practice my node/express skills.**

To write a simple web server with Node.js 
1. Use Node `HTTP` module to abstract away complex network related operations
2. Write the single *request handler* function that will handle all the requests to the server

 

  - A vision in the database has the following structure 
  - The image url string is not required.

 ```
 {
        "name": "Code for fun",
        "compleleted": true,
        "image":  "https://www.cccrockland.org/wp-content/uploads/vision.jpg"
 }
```
|Action|Method|Endpoint|
|:--|:--:|:--
|List visions|GET|/visions
|Create a vision| POST| /visions
|Update a vision| PUT| /visions/:id
|Remove a vision| DELETE| /visions/:id
|Add a vision background image | POST/PUT|/visions/:id/image|
