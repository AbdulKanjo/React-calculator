import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: "",
      operator: null,
      previous: null,
      operatorClicked: false
    };
  }

  handelInput = n => {
    this.setState({ current: `${this.state.current}${n}` });
  };

  handelOperator = e => {
    this.setState({
      operator: e,
      operatorClicked: true,
      previous: this.state.current,
      current: " "
    });
  };

  clearCurrent = () => {
    this.setState({ current: "" });
  };

  handelDot = () => {
    if (!this.state.current.includes(".")) {
      this.setState({ current: `${this.state.current}${"."}` });
    }
  };

  handelTot() {
    var pre = Number(this.state.previous);
    var cur = Number(this.state.current);
    if (this.state.operator === "/") {
      this.setState({ current: pre / cur });
    } else if (this.state.operator === "*") {
      this.setState({ current: pre * cur });
    } else if (this.state.operator === "+") {
      this.setState({ current: pre + cur });
    } else if (this.state.operator === "-") {
      this.setState({ current: pre - cur });
    }
  }

  render() {
    console.log("this is current", this.state.current);
    console.log("this is prev", this.state.previous);
    console.log("this is operator", this.state.operator);

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="grid">
          <div className="display">{this.state.current || 0}</div>
          <div onClick={this.clearCurrent} className="buttons">
            C
          </div>
          <div className="buttons">+/-</div>
          <div className="buttons">%</div>
          <div
            onClick={() => this.handelOperator("/")}
            className="operator buttons"
          >
            /
          </div>
          <div onClick={() => this.handelInput(7)} className="buttons">
            7
          </div>
          <div onClick={() => this.handelInput(8)} className="buttons">
            8
          </div>
          <div onClick={() => this.handelInput(9)} className="buttons">
            9
          </div>
          <div
            onClick={() => this.handelOperator("*")}
            className="operator buttons"
          >
            x
          </div>
          <div onClick={() => this.handelInput(4)} className="buttons">
            4
          </div>
          <div onClick={() => this.handelInput(5)} className="buttons">
            5
          </div>
          <div onClick={() => this.handelInput(6)} className="buttons">
            6
          </div>
          <div
            onClick={() => this.handelOperator("-")}
            className="operator buttons"
          >
            -
          </div>
          <div onClick={() => this.handelInput(1)} className="buttons">
            1
          </div>
          <div onClick={() => this.handelInput(2)} className="buttons">
            2
          </div>
          <div onClick={() => this.handelInput(3)} className="buttons">
            3
          </div>
          <div
            onClick={() => this.handelOperator("+")}
            className=" operator buttons"
          >
            +
          </div>
          <div onClick={() => this.handelInput(0)} className="zero buttons">
            0
          </div>
          <div onClick={() => this.handelDot(".")} className="buttons">
            .
          </div>
          <div onClick={() => this.handelTot()} className=" operator buttons">
            =
          </div>
        </div>
      </div>
    );
  }
}

export default App;
