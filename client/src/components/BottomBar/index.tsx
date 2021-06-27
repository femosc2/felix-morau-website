import React, { useState, useEffect } from 'react';
import { BottomBar } from './BottomBar';
import { withRouter, RouteComponentProps } from 'react-router';
import { IStore } from 'Root/store';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setLastPage, setActivePage } from '../../pages/Structure/redux/actions';

type Props = RouteComponentProps & ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>

const BottomBarContainer: React.FC<Props> = (props) => {
  const [nextPage, setNextPage] = useState('skills');
  const [previousPage, setPreviousPage] = useState('contact');

  const switchTab = (tabName: string) => {
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
      props.history.push(`/${ tabName }`);
      props.setActivePage(tabName);
      props.setLastPage(props.history.location.pathname.substring(1));
    }else{
      props.setLastPage(props.history.location.pathname.substring(1));
      props.history.push(`/${ tabName }`);
      props.setActivePage(tabName);
    }
  };

  const getNextPage = () => {
    switch (props.activePage) {
    case 'about':
      setNextPage('skills');
      break;
    case 'skills':
      setNextPage('projects');
      setPreviousPage('about');
      break;
    case 'projects':
      setNextPage('contact');
      setPreviousPage('skills');
      break;
    case 'contact':
      setPreviousPage('projects');
      break;
    }
  };

  useEffect(() => {
    getNextPage();
  }, [props.activePage]);

  return (
    <BottomBar activePage={ props.activePage } nextPage={ nextPage } previousPage={ previousPage } switchTab={ switchTab }/>
  );
};

const mapStateToProps = (store: IStore) => {
  return {
    activePage: store.structure.activePage,
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
)(BottomBarContainer);

