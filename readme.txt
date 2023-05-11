Hi there, I have created this front end inventory project using react js. and the backend is created
using Spring boot (Java Framework).

So basically in this react based app, there is a component which is returing a method with the name header, and this method has releted 
informations about the routings.

In the page package there are 2 javascript xml files created which behaves as the web pages (screens in the browser).

AddItem page is responsible for taking 2 input fields, these are item name and item description. On clicking the submit button, there
is an event occuring and on the execution of that event listener the data filled in the form goes to the server side in the spring boot application.

In the congig package there is a config.js file which has the relevant base url for the server side.

And in the AddItem.jsx the end points are defined along with the POST requests and its necessary request body.

After successful data passing over to the server side, the AddItem page redirects back to the Home page.

Simillarly the GET apis are also implemented in the same manner in the Home.jsx file.

The api url's used in this project are as follows: 

 -----> POST -> localhost:8080/api/item/save     (Add Items)

 -----> GET  -> localhost:8080/api/item          (Get All Items)

 -----> GET  -> localhost:8080/api/item/Cake     (Get Items By Name)
