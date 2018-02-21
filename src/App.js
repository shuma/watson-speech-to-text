import React, { Component } from "react";
import "./App.css";
import Logo from "./mic.png";
import recognizeMic from "watson-speech/speech-to-text/recognize-microphone";

class App extends Component {
  constructor() {
    super();
    this.state = {
      text: ""
    };
  }

  onListenClick() {
    fetch("http://localhost:3002/api/speech-to-text/token")
      .then(function(response) {
        return response.text();
      })
      .then(token => {
        console.log("token is", token);
        var stream = recognizeMic({
          token: token,
          objectMode: true, // send objects instead of text
          extractResults: true, // convert {results: [{alternatives:[...]}], result_index: 0} to {alternatives: [...], index: 0}
          format: false // optional - performs basic formatting on the results such as capitals an periods
        });
        stream.on("data", data => {
          this.setState({
            text: data.alternatives[0].transcript
          });
        });
        stream.on("error", function(err) {
          console.log(err);
        });
        //document.querySelector("#stop").onclick = stream.stop.bind(stream);
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="App">
        <a class="#" onClick={() => this.onListenClick()}>
          <span className="microphone">Listen to microphone input</span>
        </a>
        <div className="speechtext">{this.state.text}</div>
      </div>
    );
  }
}

export default App;
