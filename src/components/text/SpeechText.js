import React from "react";
import styled from "styled-components";
import { BlinkingCursor } from "../animations";

const Text = styled.div`
  text-align: center;
  font-size: 40px;
  color: #000;
`;

const SpeechText = ({ text }) => (
  <Text>
    {Text} <BlinkingCursor />
  </Text>
);

export default SpeechText;
