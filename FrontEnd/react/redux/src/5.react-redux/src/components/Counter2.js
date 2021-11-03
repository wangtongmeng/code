import React, { Component } from 'react'
import {connect} from 'react-redux';
import actions from '../store/actions/counter2';
//Counter2.props = {...state.counter2,...actions};
class Counter2 extends Component {
    render() {
        let {color,number,add2,minus2,changeColor} = this.props;
        return (
            <div style={{color}}>
                <p>{number}</p>
                <button onClick={add2}>+</button>
                <button onClick={minus2}>-</button>
                <button onClick={()=>changeColor('green')}>改成绿色</button>
            </div>
        )
    }
}
//把仓库中的状态映射为组件的属性对象 输入
let mapStateToProps = state=>state.counter2;
//把派发的动作映射为属性对象
//let mapDispatchToProps
export default connect(
    mapStateToProps,
    actions
)(Counter2);
/**
 * 组件关联仓库两个方向 
 * 输入 组件里使用仓库提供的状态进行组件的渲染
 * 输出 在组件可以派发动作从而修改仓库中的状态 
 */