var express = require("express"); 
var app = express(); 
app.use(express.static("public"));/// tat ca casc resquet gui len sex tim trong public 
// ex : http://localhost:2000/teo
app.set("view engine","ejs"); // tạo view cho app bằng thư viện ejs
app.set("views","./views"); // chay ve thu muc goc lay giao dien views
//khai bao server
var server = require("http").Server(app);// khai báo server sử dụng thư viện http chay như server với tham số app 
var io =require("socket.io")(server);///// khai bao socket io 

server.listen(3000); // lang nghe tai port 3000 
///////////////////////////////
//lang nghe xem co ai ket noi hay khong. chi bat ket noi socket
io.on("connection",function(socket){
    console.log("net noi moi: "+socket.id);

    socket.on("disconnect",function(socket){
    console.log(socket.id+" disconnection!");
    });

    socket.on("Client-click",function(data){
       console.log(data);
     io.sockets.emit("Server-send","Server hello"); // send data to everyone
     // socket.emit("",""); // echo lai client
     // socket.broadcast.emit(); // gui cho tat ca cac thang khac tru client
     // io.to("socketID").emit(); // gui cho mot may rieng 
    });
    
}); 






app.get("/",function(req,res){
    res.render("trangchu")
}); // khi requr

app.get("/nhap",function(req,res){
    res.render("trangnhap")
}); // khi requr


