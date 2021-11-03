import React, { Component } from 'react'
import {connect} from 'react-redux';
import actions from '../store/actions/counter1';
//Counter1.props = {...state.counter1,...actions};
class Counter1 extends Component {
    render() {
        let {color,number,add1,minus1,changeColor} = this.props;
        return (
            <div style={{color}}>
                <p>{number}</p>
                <button onClick={add1}>+</button>
                <button onClick={minus1}>-</button>
                <button onClick={()=>changeColor('red')}>改成红色</button>
            </div>
        )
    }
}
//把仓库中的状态映射为组件的属性对象 输入
let mapStateToProps = state=>state.counter1;
//把派发的动作映射为属性对象
//let mapDispatchToProps
export default connect(
    mapStateToProps,
    actions
)(Counter1);
/**
 * 组件关联仓库两个方向 
 * 输入 组件里使用仓库提供的状态进行组件的渲染
 * 输出 在组件可以派发动作从而修改仓库中的状态 
 */