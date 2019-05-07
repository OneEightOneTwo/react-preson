var fs=require('fs');
var express = require('express');
var router = express.Router();
let telurl='./public/LoginMsg.json'//引入json文件
// var bodyParser = require('body-parser')//引入中间件（接收post请求要用到）



/* GET home page. */
router.all('/', function(req, res) {
  res.header('Access-Control-Allow-Origin','*')//跨域
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  
  // let _res = res;//
  let {tel} = req.query;//前端传过来的数据
  // console.log(req.query)
  
  fs.readFile(telurl, (err, data) => {//读文件(读到的data是二进制数据)
    if(err) throw err
    let {user} = JSON.parse(data.toString())//将二进制数据转为正常的对象
    var isTrue = '注册成功';//相当于是一个开关
    for(var i = 0; i < user.length; i++) {//遍历文件中的所有数据
      if(tel == user[i].tel) {//判断是否有数据和前端传过来的数据
        console.log('yes')
        isTrue = '登录成功';
      }
    }
    if(isTrue == '注册成功') {//通过里面的值进行判断
      user.push({tel: tel*1})
    }
    console.log(user)
    let newObj = {user}
    console.log(newObj)
    fs.writeFile(telurl, JSON.stringify(newObj), (err) => {//写入文件
      if(err) throw err;
      
    })
    console.log(isTrue);
    res.send(isTrue)
  })
  
  
});

module.exports = router;
