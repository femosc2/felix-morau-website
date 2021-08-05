import { Languages } from 'models/languages';
import React, { useState } from 'react';
import styled from 'styled-components';
import { fadeIn } from 'variables/animations';
import { COLORS } from 'variables/colors';
import { SHADOWS } from 'variables/shadows';

interface IProps {
    switchLanguage: (langauge: Languages) => void;
    language: Languages;
}

type LanguageFlag =
  {
    country: Languages,
    alt: string,
  }
  
export const LanguagePicker: React.FC<IProps> = (props) => {
  const { switchLanguage, language } = props;
  const [isDropDownShowing, setIsDropDownShowing] = useState(false);
  const languages: LanguageFlag[] = [{
    country: 'fr',
    alt: 'France Flag',
  },
  {
    country: 'gb',
    alt: 'Great Britain flag',
  },
  {
    country: 'se',
    alt: 'Sweden Flag',
  },
  ];
  return (
    <StyledLanguagePicker>
      <img
        alt={`${language} flag`}
        src={`http://purecatamphetamine.github.io/country-flag-icons/3x2/${language.toUpperCase()}.svg`}
        onClick={() => switchLanguage(language)}
        onMouseEnter={() => setIsDropDownShowing(true)} />
      {isDropDownShowing && <StyledLanguageDropDown  onMouseLeave={() => setIsDropDownShowing(false)}>
        <StyledLanguage key={language} active={language} country={language}>
          <img
            alt={`${language} flag`}
            src={`http://purecatamphetamine.github.io/country-flag-icons/3x2/${language.toUpperCase()}.svg`}
            onClick={() => switchLanguage(language)}
            onMouseEnter={() => setIsDropDownShowing(true)}
          />
        </StyledLanguage>
        {languages.map((l) => <StyledLanguage key={l.country} active={language} country={l.country}>
          <img src={`http://purecatamphetamine.github.io/country-flag-icons/3x2/${l.country.toUpperCase()}.svg`} alt={l.alt}
            onClick={() => switchLanguage(l.country)}
          /></StyledLanguage>)}
      </StyledLanguageDropDown>}
    </StyledLanguagePicker>
  );
};

const StyledLanguagePicker = styled.section`
display: flex;
width: 15%;
justify-content: space-around;
margin-top: 30px;
list-decoration: none;
 > img {
   height: 32px;
 }
 > a {
    &:hover {
        cursor: pointer;
    }
}
align-content: center;
`;

const StyledLanguageDropDown = styled.ul`
  display: flex;
  flex-direction: column;
  background-color: white;
  justify-content: center;
  align-content: center;
  position: absolute;
  width: 100px;
  list-style-type: none;
  margin: 0;
  padding: 0;
  margin-top: -10px;
  border-radius: 10px;
  box-shadow: ${SHADOWS.languagePickerShadow};
  animation: ${fadeIn} 0.25s linear 1 forwards;
  > li {
   > img {
    height: 32px;
    margin: 10px;
  } 
  }
  
`;

const StyledLanguage = styled.li<{active: string, country: string}>`
background-color: ${(props) => props.active === props.country ? COLORS.primary : COLORS.secondary };
transition: 0.2s;
&:hover {
  cursor: pointer;
  background-color: ${COLORS.primary};
}
`;
