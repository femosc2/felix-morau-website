import React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { bindActionCreators } from 'redux';
import { IStore } from 'store';

import { Header } from './Header';
import { setCurrentPage, setLanguage } from './redux/actions';

type Props = RouteComponentProps & ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>

const HeaderContainer: React.FC<Props> = (props) => {

  const switchPage = (tabName: string) => {
    props.history.push(`/${ tabName }`);
    props.setCurrentPage(tabName);
  };

  return (
    <Header switchPage={ switchPage } switchLanguage={ props.setLanguage } />
  );
};

const mapStateToProps = (store: IStore) => {
  return {
    currentPage: store.header.currentPage,
  };
};
  
const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators({
    setCurrentPage,
    setLanguage,
  }, dispatch);
};
  
export default compose<Props, Record<string, unknown>>(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter,
)(HeaderContainer);

