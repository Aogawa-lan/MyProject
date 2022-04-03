const http = require('http');//调用模块

let cs = (req, res) => {
    res.setHeader('Content-type', 'text/plain;charset=utf-8');
}

const server = http.createServer(cs)

server.on('request', function (req, res) {//监听request事件
    console.log('收到服务器请求');
    let data = [
        {
            "id":"001",
            "name":"tom",
            "age":18
        },
        {
            "id": "002",
            "name": "jerry",
            "age": 19
        },
        {
            "id": "003",
            "name": "tony",
            "age": 120
        },
    ]
    res.end(JSON.stringify(data));
});

server.listen(890, function () {//绑定端口号启动服务器
    console.log('服务器启动成功');
});