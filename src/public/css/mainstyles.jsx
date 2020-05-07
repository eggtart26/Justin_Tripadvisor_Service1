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

const Button = styled.button`
  display: block;
  padding: 8px 16px;
  border: 1px solid #000000;
  border-radius: 3px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  cursor: hand;

  &:hover {
    background-color: #d6d6d6;
  }

  &:focus {
    outline: $black solid 1px;
    outline-offset: -4px;
  }

  &:active {
    background-color: #adadad;
  }
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
  Button,
  LayoutRow,
  LayoutColumn,
}