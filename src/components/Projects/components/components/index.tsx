import React from 'react';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { IStore } from 'store';
import { ProjectFilters } from './ProjectFilters';
import { setFilterModalVisbility, setFilteredProjectsSkills, setFilteredProjectsTypes, setProjectModal } from '../../redux/actions';
import { ProjectModal } from './ProjectModal';

interface IProps {
  setUpdate: (update: string) => void;
}

type Props =  IProps & ReturnType<typeof mapDispatchToProps> & ReturnType<typeof mapStateToProps>

const ProjectsFiltersContainer: React.FC<Props> = (props) => {
  const { setUpdate } = props;

  const updateSkillFilter = (skill: string) => {
    let ufps = props.filteredProjectSkills;
    if (ufps.includes(skill)) {
      ufps = ufps.filter((s) => s !== skill);
    } else {
      ufps.push(skill);
    }
    if (ufps.length !== 0) {
      props.setFilteredProjectsSkills(ufps);
      setUpdate(skill);
    } else {
      props.setFilteredProjectsSkills([]);
      setUpdate(skill);
    }
  };

  const updateTypeFilter = (type: string) => {
    let ufpt = props.filteredProjectsTypes;
    if (ufpt.includes(type)) {
      ufpt = ufpt.filter((t) => t !== type);
    } else {
      ufpt.push(type);
    }
    if (ufpt.length !== 0) {
      props.setFilteredProjectsTypes(ufpt);
      setUpdate(type);
    } else {
      alert('You must select atleast one type!');
    }
  };

  return (
    <>
      { props.isVisible && <ProjectFilters
        setFilterModalVisbility={ props.setFilterModalVisbility }
        projectsSkills={ props.projectsSkills }
        projectsTypes={ props.projectsTypes }
        filteredProjectSkills={ props.filteredProjectSkills }
        updateSkillFilter={ updateSkillFilter }
        updateTypeFilter={ updateTypeFilter }
        filteredProjectsTypes={ props.filteredProjectsTypes} /> }

      {props.projectModal.visibility && <ProjectModal setProjectModal={ props.setProjectModal } projectModal={ props.projectModal } />}
    </>
  );
};

const mapStateToProps = (store: IStore) => {
  return {
    isVisible: store.projects.projectsFilterVisibility,
    projectsSkills: store.projects.projectsSkills,
    projectsTypes: store.projects.projectsTypes,
    filteredProjectSkills: store.projects.filteredProjectsSkills,
    filteredProjectsTypes: store.projects.filteredProjectsTypes,
    projectModal: store.projects.projectModal,
  };
};


const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators({
    setFilterModalVisbility,
    setFilteredProjectsSkills,
    setFilteredProjectsTypes,
    setProjectModal,
  }, dispatch);
};

export default compose<Props, IProps>(
  connect(mapStateToProps, mapDispatchToProps),
)(ProjectsFiltersContainer);

