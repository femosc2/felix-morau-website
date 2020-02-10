import React, { useEffect } from 'react';
import { db } from 'variables/firebase';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { IStore } from 'store';
import { ProjectsList } from './ProjectsList';
import { setProjects, setProjectsFilter, setFilterModalVisbility, setProjectsSkills, setProjectsTypes } from '../redux/actions';

type Props = ReturnType<typeof mapDispatchToProps> & ReturnType<typeof mapStateToProps>

const ProjectsListContainer: React.FC<Props> = (props) => {

  useEffect(() => {
    db.ref('/Projects').once('value').then((snapshot) => {
      props.setProjects(snapshot.val());
    });
  }, []);

  useEffect(() => {
    loadResources();
  }, [props.projects]);

  const loadResources = () => {
    getTypeOfProjects();
    getNameOfSkills();
  };

  const getNameOfSkills = () => {
    const pList: string[] = [];
    props.projects.map((p) => p.stack.map((ps) => pList.push(ps)));
    const filteredPList = [...new Set(pList)];
    props.setProjectsSkills(filteredPList);
  };

  const getTypeOfProjects = () => {
    const pList: string[] = [];
    props.projects.map((p) => pList.push(p.type));
    const filteredPList = [...new Set(pList)];
    props.setProjectsTypes(filteredPList);
  };

  const search = (query: string) => {
    query = query.toLowerCase();
    const searched = props.projects.filter((p) => p.name.toLowerCase().includes(query) || p.description.toLowerCase().includes(query) );
    props.setProjectsFilter(searched);
  };

  return (
    <ProjectsList projects={ props.projects } search={ search } projectsFilter={ props.projectsFilter }
      setFilterModalVisbility={ props.setFilterModalVisbility } isVisible={ props.isVisible } />
  );
};

const mapStateToProps = (store: IStore) => {
  return {
    projects: store.projects.projects,
    projectsFilter: store.projects.projectsFilter,
    isVisible: store.projects.projectsFilterVisibility,
  };
};


const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators({
    setProjects,
    setProjectsFilter,
    setFilterModalVisbility,
    setProjectsSkills,
    setProjectsTypes,
  }, dispatch);
};

export default compose<Props, {}>(
  connect(mapStateToProps, mapDispatchToProps),
)(ProjectsListContainer);

