import {Component} from 'react'
import HeaderStyle from './Header.css'

class Header extends Component{
    render(){
        return (
            <div className={HeaderStyle.headerBox}>头部组件★↓</div>
        )
    }
}
export default Header