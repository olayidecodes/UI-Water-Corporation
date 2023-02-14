import React from "react";
import ButtonComponent from "./Button";
import box from "./../src/assets/briefcase11.png";
import styled from "styled-components";

const FlexedDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5em;
  margin: 1em 0;
`;

export default function JobCard({ title, location, status }) {
  return (
    <div>
      <h3>{title}</h3>
      <span>{location}</span>
      <FlexedDiv>
        <img src={box} width={20} height={20} />
        <span>{status}</span>
      </FlexedDiv>
      <ButtonComponent compact={true} label={"Apply"} />
    </div>
  );
}
