import React from './react';
import ReactDOM from './react-dom';
/**
 * 组件的数据来源有两个
 * 1.父级组传递过来的属性 性别、血型 ，一般不能改变
 * 2.自己挣的 是可能改变 组件的状态
 * 3.在类组件里有些方法里的this绑定为组件实例了 render this指向组件实例
 * 1.异步更新
 * 2.dom diff
 */
class Counter extends React.Component {
  constructor(props) {
    super(props);
    //构建函数是唯一能直接给state直接赋值的地方
    this.state = { number: 0, age: 13 };
  }
  //如何让监听函数this指向组件实例
  //首推写法 写一个类的属性，指向一个箭头函数，方法的this就永久指向类的实例
  handleClick = (amount) => {
    /*  this.setState({ number: this.state.number + amount }, () => {
       console.log('callback', this.state);
     }); */
    this.setState((state) => ({ number: state.number + amount }), () => {
      console.log('callback', this.state);
    });
    console.log(this.state);
  }
  render() {
    return this.state.number % 2 == 0 ? <div>
      <p>number:{this.state.number}</p>
      <button onClick={() => this.handleClick(5)}>+</button>
    </div> : <p>
      <p>number:{this.state.number}</p>
      <button onClick={() => this.handleClick(5)}>+</button>
    </p>
  }
}

let element = <Counter />;

ReactDOM.render(
  element,
  document.getElementById('root')
);