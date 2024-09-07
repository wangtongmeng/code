import { Component } from "react";
// import { flushSync } from "react-dom";
class NewBatchUpdatePage extends Component {
  state = { number: 0 };
  handleCLick = () => {
    this.setState({ number: this.state.number + 1 });
    console.log("number", this.state.number);
    this.setState({ number: this.state.number + 1 });
    console.log("number", this.state.number);
    setTimeout(() => {
      // flushSync 改成非批量的
      // flushSync(() => {
      this.setState({ number: this.state.number + 1 });
      // });
      console.log("number", this.state.number);
      // flushSync(() => {
      this.setState({ number: this.state.number + 1 });
      // });
      console.log("number", this.state.number);
    }, 0);
  };

  render() {
    return (
      <div>
        <p>{this.state.number}</p>
        <button onClick={this.handleCLick}>+</button>
      </div>
    );
  }
}
export default NewBatchUpdatePage;
