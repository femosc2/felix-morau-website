import React, { useEffect, useState } from 'react';
import { db } from 'variables/firebase';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { IStore } from 'store';
import { ProjectsList } from './ProjectsList';
import { setProjects, setProjectsFilter, setFilterModalVisbility, setProjectsSkills, setProjectsTypes, setProjectModal } from '../redux/actions';

type Props = ReturnType<typeof mapDispatchToProps> & ReturnType<typeof mapStateToProps>

const ProjectsListContainer: React.FC<Props> = (props) => {

  // eslint-disable-next-line no-unused-vars
  const [update, setUpdate] = useState('');

  useEffect(() => {
    db.ref('/Projects').once('value').then((snapshot) => {
      props.setProjects(snapshot.val());
    });
  }, []);

  useEffect(() => {
    getTypeOfProjects();
    getNameOfSkills();
  }, [props.projects]);

  useEffect(() => {
    updateProjects();
  }, [update]);

  const getNameOfSkills = () => {
    const pList: string[] = [];
    props.projects.map((p) => p.stack.map((ps) => pList.push(ps)));
    const filteredPList = [...new Set(pList)];
    props.setProjectsSkills(filteredPList);
  };

  const updateProjects = () => {
    const filtered = props.projects.filter((p => (p.stack.some(s => props.skillFilter.includes(s)))
     && props.typesFilter.includes(p.type)));

    props.setProjectsFilter(filtered);
  };

  const getTypeOfProjects = () => {
    const pList: string[] = [];
    props.projects.map((p) => pList.push(p.type));
    const filteredPList = [...new Set(pList)];
    props.setProjectsTypes(filteredPList);
  };

  const search = (query: string) => {
    query = query.toLowerCase();
    let searched;
    if (props.skillFilter.length === 0) {
      searched = props.projects.filter((p) => p.name.toLowerCase().includes(query) || p.description.toLowerCase().includes(query) );
      props.setProjectsFilter(searched);
    } else {
      searched = props.projectsFilter.filter((p) => p.name.toLowerCase().includes(query) || p.description.toLowerCase().includes(query) );
      props.setProjectsFilter(searched);
    }
  };

  return (
    <ProjectsList projects={ props.projects } search={ search } projectsFilter={ props.projectsFilter }
      setFilterModalVisbility={ props.setFilterModalVisbility } filtersVisibility={ props.filtersVisibility }
      setUpdate={ setUpdate }
      skillFilter={ props.skillFilter }
      typesFilter= { props.typesFilter }
      setProjectModal={ props.setProjectModal }
      projectModal={ props.projectModal } />
  );
};

const mapStateToProps = (store: IStore) => {
  return {
    projects: store.projects.projects,
    projectsFilter: store.projects.projectsFilter,
    filtersVisibility: store.projects.projectsFilterVisibility,
    typesFilter: store.projects.filteredProjectsTypes,
    skillFilter: store.projects.filteredProjectsSkills,
    projectModal: store.projects.projectModal,
  };
};


const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators({
    setProjects,
    setProjectsFilter,
    setFilterModalVisbility,
    setProjectsSkills,
    setProjectsTypes,
    setProjectModal,
  }, dispatch);
};

export default compose<Props, {}>(
  connect(mapStateToProps, mapDispatchToProps),
)(ProjectsListContainer);

