import styled from 'styled-components';

const defaultTypeface = "Muli, Arial, 'Helvetica Neue', Helvetica, sans-serif";

const Block = styled.section`
  font-family: var(--bodytypeface, ${defaultTypeface} );
  -webkit-font-smoothing:antialiased;
  max-width: 813px;
  background-color: #ffffff;
  padding: 16px 24px;
  box-sizing: border-box;
  border: 1px solid rgb(224, 224, 224);
  border-radius: 2px;
  margin: 12px;
`;

const List = styled.ul`
  border-top: 1px solid rgb(224, 224, 224);
  border-bottom: 1px solid rgb(224, 224, 224);
  border-left: 4px dotted rgb(24, 24, 24);
  padding: 4px 8px;
`;

const Flex = styled.div`
  display: flex;
`;

const LayoutRow = styled(Flex)`
  flex-direction: row;
`;

const LayoutColumn = styled(Flex)`
  flex-direction: column;
`;

// A "SR*" class for screen reader use/accessibility. 
const SRSpan = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0,0,0,0);
  border: 0;
`;

export {
  Block,
  List,
  LayoutRow,
  LayoutColumn,
  SRSpan
}