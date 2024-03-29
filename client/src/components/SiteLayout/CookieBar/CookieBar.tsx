import { Button } from 'components/Shared/Button';
import { useTranslation } from 'hooks/translation';
import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { COLORS } from 'variables/colors';
import { MARGINS } from 'variables/margins';
import { SHADOWS } from 'variables/shadows';

interface IProps {
    isShowing: boolean;
    setIsShowing: (isShowing: boolean) => void;
}

export const CookieBar: React.FC<IProps> = (props) => {
  const dispatch = useDispatch();
  
  const acceptCookies = () => {
    dispatch(props.setIsShowing(false));
    localStorage.setItem('cookies', 'enabled');
  };
  const refuseCookies = () => {
    dispatch(props.setIsShowing(false));
    localStorage.setItem('cookies', 'disabled');
  };

  return (
    props.isShowing ? <StyledCookieBar>
      <StyledCookieBarText>{useTranslation('CookieBar')}</StyledCookieBarText>
      <StyledCookieBarContainer>
        <Button onClick={() => acceptCookies()} size={'small'}text={'Yes'} variant={'primary'} />
        <Button  onClick={() => refuseCookies()} size={'small'} text={'No'} variant={'primaryOutline'} />
      </StyledCookieBarContainer>
    </StyledCookieBar> : null
  );
};

const StyledCookieBar = styled.article`
background-color: ${COLORS.white};
width: 33%;
position: fixed;
z-index: 10;
top: 82vh;
left: 33.5%;
box-shadow: ${SHADOWS.cookieBarShadow};
text-align: center;
border-radius: 25px;
`;

const StyledCookieBarText = styled.p`
color: ${COLORS.primary};
padding: ${MARGINS.gutter};
padding-top: 10px;
`;

const StyledCookieBarContainer = styled.div`
display: flex;
justify-content: center;
margin-bottom: 10px;
> * {
    margin-right: 10px;
    margin-left: 10px;
}
`;


