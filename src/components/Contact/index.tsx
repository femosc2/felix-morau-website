import React from 'react';
import { IStore } from 'store';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { withRouter, RouteComponentProps } from 'react-router';
import { Contact } from './Contact';


type Props = ReturnType<typeof mapStateToProps> & RouteComponentProps

const ContactContainer: React.FC<Props> = (props) => {

  return (
    <>
      {(props.activePage === 'contact' || props.lastPage === 'contact')
      && <Contact activePage={ props.activePage } />}
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
)(ContactContainer);
