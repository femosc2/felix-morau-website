import React from 'react';
import { IStore } from 'store';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { withRouter, RouteComponentProps } from 'react-router';
import { About } from './About';

interface IPropsInternal {
}

type Props = IPropsInternal & RouteComponentProps

const AboutContainer: React.FC<Props> = () => {


  // const handleClick = () => {
  //   whoAmIActive && props.history.push('/about/me');
  //   whoAmIActive && setActiveAbout(false);
  // };

  return (
    <>
      <About />
    </>
  );
};

const mapStateToProps = (store: IStore) => {
  return {
    whoAmIActive: store.about.whoAmIActive,
  };
};


const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators({
  }, dispatch);
};

export default compose<Props, {}>(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter,
)(AboutContainer);
