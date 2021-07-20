## Background & Objectives

This is a challenge that plays with the **wagon-chat** API.
This API will allow you to chat and gossip with your friends 😉

This exercise requires both http `GET` and `POST` requests to an API code. We'll use AJAX calls to implement a dynamic chat-room where we can instantly view the latest messages and post new ones.


![Highlights Gif](https://raw.githubusercontent.com/lewagon/fullstack-images/master/frontend/chat-room.gif)

## Setup

Go to the Terminal, choose a directory where you wish to clone the repository and run:
```bash
git clone git@github.com:Francisco-Webdeveloper/Chat-room.git
yarn install
```
Launch your local webserver with:

```bash
rake webpack
```
Then open [`localhost:8080`](http://localhost:8080) to test the code in the browser

## Resources
The [documentation of the wagon-chat API](https://github.com/lewagon/wagon-chat-api/blob/master/README.md)

## Specs

### View logic

In the `index.html` file of the challenge, there is a page structured into two main parts:

* A **send button** with a form, to push our messages to the chat API.
* A **refresh button** with a placeholder, where we will display all the new messages.

This [documentation of the API](https://github.com/lewagon/wagon-chat-api/blob/master/README.md) helps understand which endpoints are related to the form and to the refresh button.


### Refresh button: fetch recent messages

In the markup, we'll find the `#refresh` button. When clicked, we want to display all the latest comments from everyone in the chosen batch!

We will make a `GET` request to the API in JS using `fetch`: read the [documentation](https://github.com/lewagon/wagon-chat-api/blob/master/README.md) to see how this request is structured and what the API will return. We will find the messages in the data we receive, and display each one of them in the DOM.

Here is a sample message:

```html
<li>A sample message (posted <span class="date">10 minutes ago</span>) by John</li>
```

### Send button: push our messages to the API

Time to take part to the chat and post our own messages!

The form `#comment-form` has two inputs (`#your-message` and `#your-name`). We will start by coding a simple script to retrieve the input values. This is a basic DOM exercise, no AJAX involved yet!

**Hint**: We have to prevent the default behavior of the form submission (using the `preventDefault()` method).

After this, our code does not post any data to the server for the moment. To do that, we have to enhance the javascript code by adding a `POST` request to send data to be stored in the API's database. Read the [documentation](https://github.com/lewagon/wagon-chat-api/blob/master/README.md) to figure out how to build a request using `fetch`.

Here is an example on using `fetch` on the [JSON Placehoder API](https://jsonplaceholder.typicode.com/):

```js
const message = { name: "George", body: "Hello from Kitt" };
const url = "https://jsonplaceholder.typicode.com/comments";

fetch(url, {
  method: 'POST',
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(message)
})
.then(response => response.json())
.then((data) => {
  console.log(data);
});
```

### Auto-refresh

Time to automatically refresh our app and get rid of that "Refresh Chat" button!

## Other information
You can also check the code and a preview 👉 https://codepen.io/francisco-frontend/full/YzVxLOQ
