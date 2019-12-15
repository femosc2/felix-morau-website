import React, { useEffect } from 'react';
import AboutContainer from 'components/About';
import { ProjectContainer } from 'components/Projects/index';
import { ContactContainer } from 'components/Contact';
import { SkillsContainer } from 'components/Skills';
import { withRouter, RouteComponentProps } from 'react-router';
import { IStore } from 'store';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { setActivePage, setLastPage } from './redux/actions';

type Props = RouteComponentProps & ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

const Structure: React.FC<Props> = (props) => {

  useEffect(() => {
    if (window.location.href.includes('about')) {
      console.log('hello');
    } else if (window.location.href.includes('skills')) {
      props.lastPage === 'asd' && props.setLastPage('about');
    } else if (window.location.href.includes('projects')) {
      props.lastPage === 'asdd' && props.setLastPage('skills');
    } else if (window.location.href.includes('contact')) {
      props.lastPage === 'asd' && props.setLastPage('projects');
    }
  });

  return (
    <>
      <AboutContainer />
      <SkillsContainer />
      <ProjectContainer />
      <ContactContainer />
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
    setActivePage,
    setLastPage,
  }, dispatch);
};

export default compose<Props, {}>(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter,
)(Structure);
