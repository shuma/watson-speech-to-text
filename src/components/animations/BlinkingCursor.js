import React from "react";
import styled, { keyframes } from "styled-components";

const Blink = keyframes`
    from, to {
        color: transparent;
    }
    50% {
        color: #ffc702;
    }
`;

const Cursor = styled.span`
  color: #2e3d48;
  animation: ${Blink} 1s step-end infinite;
`;

const BlinkingCursor = () => <Cursor>|</Cursor>;
export default BlinkingCursor;
