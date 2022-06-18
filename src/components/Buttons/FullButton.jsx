import React from "react";
import styled from "styled-components";

export default function FullButton({ title, action, border }) {
  return (
    <Wrapper
      className="animate pointer radius8"
      onClick={action ? () => action() : null}
      border={border}
    >
      {title}
    </Wrapper>
  );
}

const Wrapper = styled.button`
  border: 1px solid ${(props) => (props.border ? "#707070" : "#ff5f20")};
  background-color: ${(props) => (props.border ? "transparent" : "#ff5f20")};
  width: 100%;
  font-size: 16px;
  padding: 15px;
  outline: none;
  color: ${(props) => (props.border ? "#707070" : "#fff")};
  :hover {
    background-color: ${(props) => (props.border ? "transparent" : "#ff5f20")};
    border: 1px solid #ff5f20;
    color: ${(props) => (props.border ? "#ff5f20" : "#fff")};
  }
`;

