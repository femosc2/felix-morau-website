import React from 'react';
import { TopBar } from './TopBar';
import { withRouter, RouteComponentProps } from 'react-router';
import { IStore } from 'Root/store';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setLastPage, setActivePage } from 'pages/Structure/redux/actions';

type Props = RouteComponentProps & ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>

const TopBarContainer: React.FC<Props> = (props) => {
  const tabs = ['about', 'skills', 'projects', 'contact'];

  const switchTab = (tabName: string) => {
    props.setLastPage(props.history.location.pathname.substring(1));
    props.history.push(`/${ tabName }`);
    props.setActivePage(tabName);
  };

  return (
    <TopBar tabs={ tabs } switchTab= { switchTab } activePage={ props.activePage } isProjectsFilterVisible={ props.isProjectsFilterVisible } />
  );
};

const mapStateToProps = (store: IStore) => {
  return {
    activePage: store.structure.activePage,
    isProjectsFilterVisible: store.projects.projectsFilterVisibility,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators({
    setLastPage,
    setActivePage,
  }, dispatch);
};

export default compose<Props, {}>(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter,
)(TopBarContainer);

