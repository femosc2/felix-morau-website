import { Languages } from 'models/languages';
import React from 'react';
import styled from 'styled-components';

interface IProps {
    switchLanguage: (langauge: Languages) => void;
}
export const LanguagePicker: React.FC<IProps> = (props) => {
  const { switchLanguage } = props;
  return (
    <StyledLanguagePicker>
      <a onClick={() => switchLanguage('fr')}> FR </a>
      <a onClick={() => switchLanguage('en')}> EN </a>
      <a onClick={() => switchLanguage('sv')}> SV </a>
    </StyledLanguagePicker>
  );
};

const StyledLanguagePicker = styled.ul`
display: flex;
width: 15%;
justify-content: space-around;
list-decoration: none;
 > a {
    &:hover {
        cursor: pointer;
    }
}
align-content: center;
`;
