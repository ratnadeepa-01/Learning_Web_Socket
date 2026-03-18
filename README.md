# WebSocket Chat Application

## 📌 Overview

This project is a **simple real-time chat application** built using **WebSockets**.
It demonstrates how a client (browser) communicates with a Node.js WebSocket server to send and receive messages instantly without refreshing the page.

The project contains:

* A **WebSocket server** built with Node.js using the **ws library**
* A **web client** built using **HTML, CSS, and JavaScript**

---

## 🚀 Features

* Real-time messaging using WebSockets
* Client-to-server communication
* Server-to-client response
* Automatic display of messages in the chat window
* Auto-scroll to latest message
* Different message styles for:

  * Client messages
  * Server messages
* Displays number of connected clients

---

## 🛠 Technologies Used

* **Node.js**
* **WebSocket (ws library)**
* **HTML**
* **CSS**
* **JavaScript**

---

## 📂 Project Structure

```
project-folder
│
├── server.js        # WebSocket server
├── index.html       # Chat client
└── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/websocket-chat.git
cd websocket-chat
```

### 2️⃣ Install dependencies

```bash
npm install ws
```

### 3️⃣ Run the WebSocket server

```bash
node server.js
```

You should see:

```
server is running on ws://localhost:8080
```

---

## 🌐 Running the Client

1. Open **index.html** in your browser
2. Type a message in the input field
3. Click **Send**

The message will be sent to the WebSocket server and displayed in the chat window.

---

## 🔄 How It Works

### Client Side

1. The browser creates a WebSocket connection

```javascript
const socket = new WebSocket("ws://localhost:8080");
```

2. When the connection opens

```javascript
socket.onopen = () => {
    console.log("Connected to server");
};
```

3. Messages are sent using

```javascript
socket.send(message);
```

4. Messages received from the server are displayed

```javascript
socket.onmessage = (event) => {
    displayMessage(event.data);
};
```

---

### Server Side

The server listens for connections:

```javascript
wss.on("connection", ws => {
    console.log("New client connected");
});
```

When a message is received:

```javascript
ws.on("message", message => {
    ws.send(`Server received: ${message}`);
});
```

---

## 💬 Example Chat Flow

```
Client: Hello
Server: again send the received message: Hello
Server: total there are 1 clients connected
```

---

## 📈 Possible Improvements

* Multi-user broadcast chat
* Username support
* Message timestamps
* Enter key to send messages
* Better UI styling
* Chat history storage
* Typing indicators

---

## 📚 Learning Purpose

This project helps understand:

* WebSocket communication
* Event-driven programming
* Real-time applications
* DOM manipulation
* Client-server architecture


