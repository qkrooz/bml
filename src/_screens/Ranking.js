import React from "react";
import ScrollContainer from 'react-indiana-drag-scroll'
// Brackets
import Testing from './_brackets/Testing';

function Ranking() {
  return (
    <ScrollContainer style={{ overflow: 'auto', height: '150%', width: 'auto', position: 'relative', display: 'flex' }}>
      <Testing />
    </ScrollContainer>
  );
};
export default Ranking;
