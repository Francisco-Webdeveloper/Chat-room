const batch = 533;
// using endpoint ':channel/messages'
const baseUrl = `https://wagon-chat.herokuapp.com/${batch}/messages`;

// selecting the elements
const refreshBtn = document.getElementById("refresh");
const listOfMessages = document.getElementById("list");
const comment = document.getElementById("your-message");
const author = document.getElementById("your-name");
const submitBtn = document.getElementById("submit");

// http GET request to refresh the list of comments
const refreshChat = () => {
  fetch(baseUrl)
    .then(response => response.json())
    .then((data) => {
      const messages = data.messages;
      messages.forEach((message) => {
        const content = message.content;
        const author = message.author;
        const minutesAgo = Math.round((new Date() - new Date(message.created_at)) / 60000);
        const fullMessage = `<li>${message.content} (posted <span class="date">${minutesAgo} minutes ago</span>) by ${author}</li>`
        listOfMessages.insertAdjacentHTML("afterbegin", fullMessage);
      });
    });
}


