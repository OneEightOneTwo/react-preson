import React from 'react';
// dva提供了一个connect的方法
// 如果你用了它就会自动帮你把该组件连上这个Model（redux）
import { connect } from 'dva';

function LoginRedux(props){
    console.log(props.telNum.userTel)
    return (
        <div>redux{props.telNum.userTel.yzmTex}</div>
    )
}
LoginRedux.prototypes={}

export default connect((state)=>{
    console.log(state)
    return state;
})(LoginRedux)