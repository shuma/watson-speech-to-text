import React, { Component } from "react";
import "./App.css";
import recognizeMic from "watson-speech/speech-to-text/recognize-microphone";
import styled from "styled-components";

// components
import { Loading } from "./components/animations";
import { SpeechText } from "./components/text";
import { Logo } from "./components/img";

// container
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 12em;
`;

class App extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      text: ""
    };
  }

  componentDidMount() {
    fetch("http://localhost:3002/api/speech-to-text/token")
      .then(function(response) {
        return response.text();
      })
      .then(token => {
        console.log("token is", token);
        this.setState({
          loading: false
        });
        let stream = recognizeMic({
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
    const { loading, text } = this.state;
    return loading ? (
      <Loading />
    ) : (
      <Container>
        {" "}
        <Logo />
        <SpeechText text={text} />
      </Container>
    );
  }
}

export default App;
