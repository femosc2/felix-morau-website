import React from 'react';
import Loader from './Loader';

interface IProps {
  margin?: string;
}

const LoaderContainer: React.FC<IProps> = (props) => {
  const { margin } = props;
  return (
    <Loader margin={ margin }  />
  );
};

export default LoaderContainer;
