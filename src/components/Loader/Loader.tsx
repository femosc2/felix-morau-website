import React from 'react';
import Particles from 'react-particles-js';
import styled from 'styled-components';
import { loaderParams } from 'variables/particles';
import { COLORS } from 'variables/colors';

interface IProps {
  margin?: string;
}

const Loader: React.FC<IProps> = (props) => {
  const c = { ...COLORS };
  const { margin } = props;

  const StyledLoaderOutline = styled.div`
    width: 200px;
    height: 200px;
    overflow: hidden;
    border: 1px solid ${c.red};
    border-radius: 50%;
    margin: 0 auto;
    margin-top: 25vh;
    margin-left: ${ margin };
    color: white;
  `;

  const StyledP = styled.p`
    font-size: 30px;
  `;

  const StyledLoader = styled.div`
  color: white;
  `;

  return (
    <StyledLoader>
      <StyledLoaderOutline>
        <Particles className="loaderParticles"
          params={ loaderParams } />
      </StyledLoaderOutline>
      <StyledP> Loading... </StyledP>
    </StyledLoader>
  );
};

export default Loader;
