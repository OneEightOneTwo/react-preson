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
        this.state={
            yzmTex: '',//用来存验证码
            reg: this.props.telNum.userTel.reg,//从redux仓库中获取数据
            
        }
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
        if ((this.state.reg).test(e.target.value)) {
            // console.log(this.refs.colorBtn)
            (this.refs.colorBtn).style.color = '#2395ff';
        } else {
            (this.refs.colorBtn).style.color = '#ccc';
        }
    }
    loginYzm() {//随机生成6位验证码
        
        // this.state.yzmTex = ''
        this.setState={//生成之前初始化
            yzmTex : ''
        }
        if ((this.state.reg).test(this.refs.telTex.value)) {
            for (let i = 0; i < 6; i++) {
                let ran = parseInt(Math.random() * 10)//随机取1-9的数
                this.state.yzmTex = (this.state.yzmTex) + ran
            }
           
        }

        // })
        // console.log(this...telTex.value)
        // console.log(this.refs.yzmP)
        this.refs.yzmP.innerHTML = this.state.yzmTex;
        
    }



    loginIn() {
        console.log(this.props.telNum.userTel.reg)
        if (this.refs.yzmT.value == this.refs.yzmP.innerHTML && this.refs.yzmT.value) {
            axios.get('http://localhost:3000', {
                params: {
                    tel: this.refs.telTex.value
                }
            })
            .then(function (response) {
                console.log(response.data)
                alert(response.data)
            })
            .catch(function (error) {
                console.log(error)
            })
        }
        
    }
    componentWillUnMount=()=>{
        this.cancelable.cancel('组件卸载,取消请求');
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