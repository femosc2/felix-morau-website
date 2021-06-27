import React from 'react';

interface IProps {
  switchTab: (tab: string) => void;
}

export const Header: React.FC<IProps> = (props) => {
  const { switchTab } = props;
  return (
    <header>
      <h1> Header </h1>
      <h2 onClick={() => switchTab('about')}> About </h2>
      <h2 onClick={() => switchTab('contact')}> Contact </h2>
    </header>
  );
};
