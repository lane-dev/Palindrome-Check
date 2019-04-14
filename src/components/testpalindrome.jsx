import React, { Component } from "react";
import "./testpalindrome.css";

class TestPalindrome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPalindrome: false
    };
    this.props = {
      textToTest: ""
    };
  }

  render() {
    this.state.isPalindrome = testPalindrome(this.props.textToTest);
    return (
      <div className="TestPalindrome">
        <p>
          Is a palindrome?:{" "}
          <span className="response">
            {this.state.isPalindrome ? (
              <span className="yes">'yes'</span>
            ) : (
              <span className="no">'no'</span>
            )}
          </span>
        </p>
      </div>
    );
  }
}

function testPalindrome(textToTest) {
  var reverseText = textToTest
    .split("")
    .reverse()
    .join("");
  if (textToTest === reverseText) {
    return true;
  } else {
    return false;
  }
}

export default TestPalindrome;
