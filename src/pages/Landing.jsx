import React from "react";
import styled from "styled-components";

export const Landing = () => {
  return (
    <Wrapper>
      <h1>Landing page</h1>
      <div className="content">sjbdksjd</div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: lightblue;
  h1 {
    color: red;
  }
  .content {
    background-color: red;
  }
`;
export default Landing;
