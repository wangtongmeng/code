const express = require('express');
const app = express();
app.get('/sugrec',(req,res)=>{
    //https://www.baidu.com/sugrec?prod=pc&wd=a&cb=jQuery1300000000
    //req.query={prod:'pc',cb:'jQuery1300000000',wd:'a'}
    const {cb,wd}  = req.query;
    const result = {
        g:Array.from({length:10},(_,i)=>({q:`${wd}${i+1}`}))
    }
    //result={g:[{q:'a1'},{q:'a2'}]}
    res.send(`${cb}(${JSON.stringify(result)})`);
});
const port = 3000;
app.listen(port,()=>console.log('server is started on port '+port));