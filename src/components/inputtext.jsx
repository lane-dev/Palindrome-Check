import React, { Component } from "react";
import TestPalindrome from "./testpalindrome";
import "./inputtext.css";

class InputText extends Component {
  constructor(props) {
    super(props);
    // Creationg the state value of "value" where contains the text you will test
    // It's an state because we send to the other component
    this.state = {
      value: ""
    };

    this.style = {
      fontSize: 10,
      fontWeight: "bold"
    };
    this.handleChangeText = this.handleChangeText.bind(this);
  }

  handleChangeText(event) {
    const mytarget = event.target;
    const textvalue = mytarget.value;
    this.setState({ value: textvalue });
  }

  render() {
    return (
      <div className="InputText">
        <input
          type="text"
          className="form-control mb-2"
          name="textval"
          value={this.state.value}
          onChange={this.handleChangeText}
        />
        <TestPalindrome textToTest={this.state.value} />
      </div>
    );
  }
}

export default InputText;
