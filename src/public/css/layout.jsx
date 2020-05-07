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

export {
  Block,
  List,
  LayoutRow,
  LayoutColumn,
}