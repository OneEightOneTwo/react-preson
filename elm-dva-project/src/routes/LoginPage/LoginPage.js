// import fs from 'fs'
import axios from 'axios'
import { Component } from 'react'
import { connect } from 'dva';
import LoginStyle from './LoginPage.css'
// import LoginMsg from './LoginMsg.json'
// console.log(this.fetch())
// {"tel":18007727380},



class LoginPage extends Component {
    constructor(props) {
        super(props)
        this.loginYzm = this.loginYzm.bind(this)
        this.loginIn = this.loginIn.bind(this)
        // this.state={
        //     isTex:false
        // }
    }

    data = {
        // isTex:false,
        yzmTex: '',
        reg: /^1(3|4|5|7|8)\d{9}$/,
        istrue: true//是否允许登录
    }
    loginFocus(e) {
        // console.log(e.target);
        e.target.style.borderColor = '#0089dc';
    }
    loginBlur(e) {
        // console.log(e.target);

        e.target.style.borderColor = '#ddd';
    }
    loginChange(e) {
        //正则判断是否能获取验证码(变成蓝色)
        // let reg=/^1(3|4|5|7|8)\d{9}$/;
        if ((this.data.reg).test(e.target.value)) {
            // console.log(this.refs.colorBtn)
            (this.refs.colorBtn).style.color = '#2395ff';
        } else {
            (this.refs.colorBtn).style.color = '#ccc';
        }
    }
    loginYzm() {//随机生成6位验证码
        // (LoginMsg.user).some((item)=>{
        // console.log(this.refs.telTex.value);
        this.data.yzmTex = ''
        if ((this.data.reg).test(this.refs.telTex.value)) {
            for (let i = 0; i < 6; i++) {
                let ran = parseInt(Math.random() * 10)
                this.data.yzmTex = (this.data.yzmTex) + ran
            }
            // return this.data.yzmTex
        }

        // })
        // console.log(this...telTex.value)
        // console.log(this.refs.yzmP)
        this.refs.yzmP.innerHTML = this.data.yzmTex;
        // console.log(this.data.yzmTex)
    }



    loginIn() {//验证功能
        // console.log(this.props.telNum.userTel);
        // console.log(LoginMsg.user);
        // fetch('http://localhost:3000/')
        //     .then(function (response) {
        //         return response.json();
        //     })
        //     .then(function (myJson) {
        //         console.log(myJson);
        //     });

        if (this.refs.yzmT.value == this.refs.yzmP.innerHTML && this.refs.yzmT.value) {
            axios.get('http://localhost:3000', {
                params: {
                    tel: this.refs.telTex.value
                }
            })
            .then(function (response) {
                console.log(response.data)
            })
            .catch(function (error) {
                console.log(error)
            })
        }

        // this.data.istrue = true;

        // // console.log(item.tel)

        // if (this.data.istrue) {//只执行一次
        //     if ((this.data.reg).test(this.refs.telTex.value)) {//是否符合正则
        //         //值相等且非空
        //         if (this.refs.yzmP.innerHTML == this.refs.yzmT.value && this.refs.yzmT.value) {
        //             // alert('登录成功')

        //             (this.props.telNum.userTel).forEach((item, index) => {
        //                 // console.log(item)
        //                 if (item.tel == this.refs.telTex.value) {//数据库是否有该数据
        //                     console.log('nopush')

        //                 } else {

        //                     // console.log('push');
        //                     // (LoginMsg.user).push({"tel":18007727380},);
        //                     // (function wJson(pram){
        //                     //     fs.readFile('./LoginMsg.json',(err,user)=>{
        //                     //         if(err){
        //                     //             return console.error(err);
        //                     //         }
        //                     //         console.log(user);
        //                     //     })
        //                     // })()
        //                     axios.get('http://localhost:3000', {
        //                         params: {
        //                             tel: this.refs.telTex.value
        //                         }
        //                     })
        //                         .then(function (response) {
        //                             console.log(response.data)
        //                         })
        //                         .catch(function (error) {
        //                             console.log(error)
        //                         })
        //                 }
        //             })



        //         } else {
        //             alert('验证码错误')
        //         }

        //     } else {
        //         alert('手机号错误')
        //     }
        // }
        // this.data.istrue = false;



        // console.log(item.tel)
        // if (this.data.istrue == true) {
        //     if (item.tel == this.refs.telTex.value) {//数据库是否有该数据
        //         LoginMsg.user.push({ "tel": this.refs.telTex.value });
        //     }
        // } else {
        //     alert('验证码或手机号错误')
        // }


        // this.data.istrue = false;

    }
    // yzmTexS(){
    // console.log(this.data.yzmTex)

    // }
    render() {
        return (
            <div className={LoginStyle.loginBox}>
                <div className={LoginStyle.loginContent}>
                    <div className={LoginStyle.loginImgbox}>
                        <img src={require('../../assets/logo.ba876fd.png')} alt='' className={LoginStyle.loginImg} />
                    </div>
                    <div className={LoginStyle.loginTextBox}>
                        <div className={LoginStyle.loginTelbox}>
                            <input type='tel' maxLength='11' placeholder='手机号'
                                className={`${LoginStyle.loginTex} ${LoginStyle.loginTel}`} ref='telTex'
                                onFocus={(e) => { this.loginFocus(e) }}
                                onBlur={(e) => { this.loginBlur(e) }}
                                onChange={(e) => { this.loginChange(e) }}
                            />
                            <button className={LoginStyle.loginGetYzm} ref='colorBtn'
                                onClick={this.loginYzm}
                            >获取验证码</button>
                            <span ref="yzmP" className={LoginStyle.yzmInner}></span>
                        </div>
                        <div className={LoginStyle.loginTelbox}>
                            <input type='tel' maxLength='6' placeholder='验证码'
                                className={`${LoginStyle.loginTex} ${LoginStyle.loginTel}`}
                                onFocus={(e) => { this.loginFocus(e) }}
                                onBlur={(e) => { this.loginBlur(e) }}
                                ref="yzmT"
                            />

                        </div>
                        <p className={LoginStyle.loginP}>新用户登录即自动注册，并表示已同意<span className={LoginStyle.loginSpan}>《用户服务协议》</span></p>
                        <button
                            className={LoginStyle.loginLog}
                            onClick={this.loginIn}
                        >
                            登录</button>
                    </div>
                </div>
                <div className={LoginStyle.loginBottom}>
                    <p>所有方：上海拉扎斯信息科技有限公司</p>

                </div>
            </div>
        )
    }
}

export default connect((state) => {
    return state
})(LoginPage);