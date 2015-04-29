/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var wsUrl="ws://"+document.location.host+ document.location.pathname+"echo";
var websocket= new WebSocket(wsUrl);
var userName;

websocket.onOpen= function(evt)(onOpen(evt));
websocket.onmessage = function(evt)(onMessage(evt));
websocket.onclose = function(evt)(onClose(evt));
websocket.join = function(evt)(join(evt));

var output = documento.getElementByID("output");

function join(){
    userName= textField.Value;
    websocket.send(userName+"enlazado");
}

function sendMessage(){
    websocket.send(userName +":"+textField.Value);
}

function onOpen(evt){
    writeToScreen("Conectado a"+wsurl);
}

function onMessage(evt){
    console.log("onMessage");
    writeToScreen("RECIBIDO:"+ evt.data);
    if(evt.data.indexOf("enlazado") !== -1){
        userField.innerHTML+= evt.data.subString(0,evt.data.indexOf("enlazado"))+"\n";
    }
    else{
        chatLogField.innerHTML+=evt.data+"\n";
    }
}

function onError(evt){
    writeToScreen('<span style="color:red;">ERROR:</span>'+evt.data);
}

function writeToScreen(message){
    output.innerHTML+= message + "<br>";
   
}