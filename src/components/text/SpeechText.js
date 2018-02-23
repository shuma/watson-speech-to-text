import React from "react";
import styled from "styled-components";
import { BlinkingCursor } from "../animations";

const Container = styled.div`
  text-align: center;
  font-size: 40px;
  color: #000;
  font-weight: 600;
`;

const SpeechText = ({ text }) => (
  <Container>
    {text}
    <BlinkingCursor />
  </Container>
);

export default SpeechText;
