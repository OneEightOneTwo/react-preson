var fs=require('fs');
var express = require('express');
var router = express.Router();
let telurl='./public/LoginMsg.json'
// telMsg = {
//   "user": [
//     { "tel": 18007727380 },
//     { "tel": 13456789123 }
//   ]
// }

/* GET home page. */
router.all('/', function(req, res) {
  res.header('Access-Control-Allow-Origin','*')
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  
  let _res = res;
  let {tel} = req.query;
  // console.log(tel)
  fs.readFile(telurl, (err, data) => {
    if(err) throw err
    let {user} = JSON.parse(data.toString())
    var isTrue = false;
    for(var i = 0; i < user.length; i++) {
      if(tel == user[i].tel) {
        console.log('yes')
        isTrue = true;
      }
    }
    if(!isTrue) {
      user.push({tel: tel*1})
    }
    console.log(user)
    let newObj = {user}
    console.log(newObj)
    fs.writeFile(telurl, JSON.stringify(newObj), (err) => {
      if(err) throw err;
      console.log('succcess ~');
      _res.send('succcess ~')
    })
  })
  
  //读取文件
  // fs.readFile(telurl,function(err,data){
  //   res.json({
  //     data:data.toString()
  //   })
  //   if(err){
  //     return console.error(err);
  //   }
  //   // res.send(data)
  //   let preson=data.toString();
  //   preson=JSON.parse(preson);
  //   preson.user.push(req)
  //   console.log(preson.user)
  //   let str=JSON.stringify(person)





    
    // res.json({
    //   data:preson.user
    // })

    // fs.appendFile(telurl,str,function(err){
    //   if(err){
    //     return res.json({
    //       msg:'失败'
    //     })
    //   }
    //   console.log('加入成功')
    //   istrue='true';
    //   res.json({
    //     msg:'成功'
    //   })
    // })
    
  // })



  // if(istrue=='true'){
  //   // res.send('加入成功')
  // }else{
  //   // res.send('操作失败')
  // }
  
  // res.send(telurl)
  // res.render('index', { title: 'welcome' });
  
});

module.exports = router;
