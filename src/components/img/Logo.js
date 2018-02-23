import React from "react";
import styled from "styled-components";
import TextToSpeechLogo from "./logo.svg";

const Img = styled.img`
  flex: 1;
`;

const Logo = () => <Img src={TextToSpeechLogo} alt="Logo" />;

export default Logo;
