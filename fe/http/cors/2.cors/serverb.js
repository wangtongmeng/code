const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
app.use(express.json());//解析json请求体
app.use(express.urlencoded({extended:true}));//解析x-www-form-urlencoded
app.use(cookieParser());
app.use(express.static('public'));
const whiteList = [
    'http://localhost:3000'
]
app.use((req,res,next)=>{
    //设置允许哪些来源跨域访问 *  代表允许任何来源
 /*    if(whiteList.includes(req.header.origin)){
        res.header('Access-Control-Allow-Origin',req.header.origin);
    } */
    //The value of the 'Access-Control-Allow-Origin' header in the response must not be the wildcard '*' when the request's credentials mode is 'include'.
    //如果客户在请求的时候如果配置了credentials:'include'，那么Access-Control-Allow-Origin就不能设置为*
    res.header('Access-Control-Allow-Origin','http://localhost:3000');
    //如果客户端携带了cookie,服务器在预检的时候需要返回这样的一个响应头
    res.header('Access-Control-Allow-Credentials','true');
    //允许客户端跨域传递的请求头
    res.header('Access-Control-Allow-Headers','Content-Type');
    //指定在跨域的时候向客户端暴露的响应头
    res.header('Access-Control-Expose-Headers','custom-response-header');
    //正常情况下如何客户端想跨域向服务器发请求的时候，会先发一个预检请求，判断一下是否允许跨域
    //设置预检请求的结果可以缓存多少 3600秒就是一1小时内不再发送预检请求
    res.header('Access-Control-Max-Age','3600');
    //服务器端向客户端发送了一个自定义响应头
    res.header('custom-response-header','custom');
    if(req.method === 'OPTIONS'){
        //如果客户端发过来的是一个预检用的OPTIONS请求，那么可以直接返回，因为这种请求只需要有响应头就行了。不需要响应体
        return res.sendStatus(200);
    }
    next();
});
const users = [{id:1,name:'张三'}];
app.get('/users',(req,res)=>{
    // origin: 'http://localhost:3000', 代表请求的来源
    console.log(req.headers);
    res.json(users);
});
app.post('/users',(req,res)=>{
    //获取 请求体
    const newUser = req.body;
    newUser.id = users[users.length-1].id+1;
    users.push(newUser);
    res.json(newUser);
});
app.get('/count',(req,res)=>{
    //当客户端第一次访问服务器的时候肯定是没有cookie
    let count = req.cookies.count||0;
    count++;//1
    //然后服务器要向客户端种植cookie
    res.cookie('count',count);
    res.json({count});
});
const port = 4000;
app.listen(port,()=>console.log('server is started on port '+port));