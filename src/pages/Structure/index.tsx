import React, { useEffect } from 'react';
import AboutContainer from 'components/About';
import ProjectContainer from 'components/Projects/index';
import ContactContainer from 'components/Contact';
import SkillsContainer from 'components/Skills';
import { withRouter, RouteComponentProps } from 'react-router';
import { IStore } from 'store';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { setActivePage, setLastPage } from './redux/actions';
import { ConstructionContainer } from 'components/Construction';

type Props = RouteComponentProps & ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

const Structure: React.FC<Props> = (props) => {

  useEffect(() => {
    if (window.location.href.includes('about')) {
      props.setActivePage('about');
    } else if (window.location.href.includes('skills')) {
      props.setActivePage('skills');
    } else if (window.location.href.includes('projects')) {
      props.setActivePage('projects');
    } else if (window.location.href.includes('contact')) {
      props.setActivePage('contact');
    } else {
      props.setActivePage('about');
    }
  });

  return (
    <section>

      <AboutContainer />
      <SkillsContainer />
      <ProjectContainer />
      <ContactContainer />
    </section>
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
