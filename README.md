# Node back end for my personal vision board app
**This is a personal side project to practice my node/express skills. It includes my notes on Node.js and Express.**

## This API deployed at **https://vision-board-2020.herokuapp.com/** 

### A vision in the database has the following structure 
### The image url string is not required.

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
|Create a vision| POST| /api/visions
|Update a vision| PUT| /api/visions/:id
|Remove a vision| DELETE| /api/visions/:id
|Add a vision background image | PUT|/api/visions/:id/image|



 
### Third party middleware
- Morgan - logger 
- CORS   - enables cross site communication between server and client
- Helmet - security
