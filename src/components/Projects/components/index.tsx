import React, { useEffect, useState } from 'react';
import { db } from 'variables/firebase';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { IStore } from 'store';
import { ProjectsList } from './ProjectsList';
import { setProjects, setProjectsFilter } from '../redux/actions';

type Props = ReturnType<typeof mapDispatchToProps> & ReturnType<typeof mapStateToProps>

const ProjectsListContainer: React.FC<Props> = (props) => {
  const [projectSkills, setProjectSkills] = useState<string[]>([]);

  useEffect(() => {
    db.ref('/Projects').once('value').then((snapshot) => {
      props.setProjects(snapshot.val());
    });
  }, []);

  useEffect(() => {
    getNameOfSkills();
  }, [props.projects]);

  const getNameOfSkills = () => {
    const pList = projectSkills;
    props.projects.map((p) => p.stack.map((ps) => pList.push(ps)));
    const filteredPList = [...new Set(pList)];
    setProjectSkills(filteredPList);
  };

  const search = (query: string) => {
    query = query.toLowerCase();
    const searched = props.projects.filter((p) => p.name.toLowerCase() === query || p.description.toLowerCase().includes(query) );
    props.setProjectsFilter(searched);
    console.log(searched);
  };

  return (
    <ProjectsList projects={ props.projects } search={ search } projectsFilter={ props.projectsFilter } />
  );
};

const mapStateToProps = (store: IStore) => {
  return {
    projects: store.projects.projects,
    projectsFilter: store.projects.projectsFilter,
  };
};


const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators({
    setProjects,
    setProjectsFilter,
  }, dispatch);
};

export default compose<Props, {}>(
  connect(mapStateToProps, mapDispatchToProps),
)(ProjectsListContainer);

