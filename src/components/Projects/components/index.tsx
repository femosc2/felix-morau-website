import React, { useEffect } from 'react';
import { db } from 'variables/firebase';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { IStore } from 'store';
import { ProjectsList } from './ProjectsList';
import { setProjects } from '../redux/actions';

type Props = ReturnType<typeof mapDispatchToProps> & ReturnType<typeof mapStateToProps>

const ProjectsListContainer: React.FC<Props> = (props) => {

  useEffect(() => {
    db.ref('/Projects').once('value').then((snapshot) => {
      props.setProjects(snapshot.val());
    });
  }, []);

  return (
    <ProjectsList projects={ props.projects } />
  );
};

const mapStateToProps = (store: IStore) => {
  return {
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
)(ProjectsListContainer);

