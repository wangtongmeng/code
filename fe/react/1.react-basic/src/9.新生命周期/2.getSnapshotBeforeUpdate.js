/* 
getSnapshotBeforeUpdate() 被调用于render之后，可以读取但无法使用DOM的时候。它使您的组件可以在可能更改之前从DOM捕获一些信息（例如滚动位置）。此生命周期返回的任何值都将作为参数传递给componentDidUpdate()
*/

import React from "react";
import ReactDOM from "react-dom";

class ScrolllingList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { messages: [] };
    this.wrapper = React.createRef();
  }
  addMessage() {
    this.setState((state) => ({
      messages: [`${state.messages.length}`, ...state.messages],
    }));
  }
  componentDidMount() {
    this.timeID = window.setInterval(() => {
      this.addMessage();
    }, 1000);
  }
  componentWillUnmount() {
    window.clearInterval(this.timeID);
  }
  getSnapshotBeforeUpdate() {
    //很关键的，我们获取当前rootNode的scrollHeight，传到componentDidUpdate 的参数perScrollHeight
    return {
      prevScrollTop: this.wrapper.current.scrollTop,
      prevScrollHeight: this.wrapper.current.scrollHeight,
    };
  }
  componentDidUpdate(
    pervProps,
    pervState,
    { prevScrollHeight, prevScrollTop }
  ) {
    //当前向上卷去的高度加上增加的内容高度
    this.wrapper.current.scrollTop =
      prevScrollTop + (this.wrapper.current.scrollHeight - prevScrollHeight);
  }
  render() {
    let style = {
      height: "100px",
      width: "200px",
      border: "1px solid red",
      overflow: "auto",
    };
    //<div key={index}>里不要加空格!
    return (
      <div style={style} ref={this.wrapper}>
        {this.state.messages.map((message, index) => (
          <div key={index}>{message}</div>
        ))}
      </div>
    );
  }
}
ReactDOM.render(<ScrolllingList />, document.getElementById("root"));
