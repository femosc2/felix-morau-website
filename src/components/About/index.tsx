import React from 'react';
import { IStore } from 'store';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { withRouter, RouteComponentProps } from 'react-router';
import { About } from './About';

type Props = ReturnType<typeof mapStateToProps> & RouteComponentProps

const AboutContainer: React.FC<Props> = (props) => {

  return (
    <>
      {(props.activePage === 'about' || props.lastPage === 'about')
      && <About activePage={ props.activePage } />}
    </>
  );
};

const mapStateToProps = (store: IStore) => {
  return {
    activePage: store.structure.activePage,
    lastPage: store.structure.lastPage,
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
