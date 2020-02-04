import React, { useEffect } from 'react';
import { IStore } from 'store';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { withRouter, RouteComponentProps } from 'react-router';
import { ProjectsList } from './Projects';
import { db } from 'variables/firebase';
import { setProjects } from './redux/actions';


type Props = ReturnType<typeof mapStateToProps> & RouteComponentProps & ReturnType<typeof mapDispatchToProps>

const ProjectsContainer: React.FC<Props> = (props) => {

  useEffect(() => {
    db.ref('/Projects').once('value').then((snapshot) => {
      props.setProjects(snapshot.val());
    });
  }, []);

  return (
    <>
      {(props.activePage === 'projects' || props.lastPage === 'projects')
      && <ProjectsList activePage={ props.activePage } projects={ props.projects } />}
    </>
  );
};

const mapStateToProps = (store: IStore) => {
  return {
    activePage: store.structure.activePage,
    lastPage: store.structure.lastPage,
    projects: store.projects.projects,
  };
};


const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators({
    setProjects,
  }, dispatch);
};

export default compose<Props, {}>(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter,
)(ProjectsContainer);
