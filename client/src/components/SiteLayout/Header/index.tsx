import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { IStore } from 'store';
import { Header } from './Header';
import { setCurrentTab } from './redux/actions';
import { compose } from 'recompose';
import { RouteComponentProps, withRouter } from 'react-router-dom';

type Props = RouteComponentProps & ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>

const HeaderContainer: React.FC<Props> = (props) => {

  const switchTab = (tabName: string) => {
    props.history.push(`/${ tabName }`);
  };

  return (
    <Header switchTab={ switchTab } />
  );
};

const mapStateToProps = (store: IStore) => {
  return {
    currentTab: store.header.tabs,
  };
};
  
const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators({
    setCurrentTab,
  }, dispatch);
};
  
export default compose<Props, Record<string, unknown>>(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter,
)(HeaderContainer);

