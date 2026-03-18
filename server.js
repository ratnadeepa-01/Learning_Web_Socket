import {WebSocketServer} from 'ws';
const wss=new WebSocketServer({port:8080});
wss.on("connection",ws=>{
    console.log(`new client connected,total number of client connected:${wss.clients.size}`);
    //send message to newly connected client
    ws.send("welcome to the websockect server");
    ws.on("message",(message)=>{
        console.log(`message received is : ${message}`);
        ws.send(`again send the recived message:${message}`);
     });
        //send a message to the client that how many clients are connected
    setInterval(()=>{
        ws.send(`total ther are ${wss.clients.size} clients connected to the server`);
    },5000);
    ws.on("close",()=> console.log(`client disconnectes,total number of clients :${wss.clients.size}`));
});
console.log("server is running on ws://localhost:8080");