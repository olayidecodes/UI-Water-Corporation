import React from "react";
import styled from "styled-components";

const GridLayout = styled.div`
  display: grid;
  grid-template-columns: ${(props) => `repeat(${props.grid}, 1fr)`};
  gap: 1em;
  margin: 2em 0;
  ${(props) => (props.tOff ? "margin-top: 0;" : "margin-top: 2em;")}
  ${(props) => (props.gapY ? `row-gap: ${props.gapY}em;` : "gap-y: 0;")}
`;

export default function Grid({ grid, tOff = false, gapY, children }) {
  return (
    <GridLayout grid={grid} gapY={gapY} tOff={tOff}>
      {children}
    </GridLayout>
  );
}
