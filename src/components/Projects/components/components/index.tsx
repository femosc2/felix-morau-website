import React from 'react';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { IStore } from 'store';
import { ProjectFilters } from './ProjectFilters';
import { setFilterModalVisbility, setFilteredProjectsSkills, setFilteredProjectsTypes } from '../../redux/actions';


type Props =  ReturnType<typeof mapDispatchToProps> & ReturnType<typeof mapStateToProps>

const ProjectsFiltersContainer: React.FC<Props> = (props) => {

  const updateSkillFilter = (skill: string) => {
    let ufps = props.filteredProjectSkills;
    if (ufps.includes(skill)) {
      ufps = ufps.filter((s) => s !== skill);
    } else {
      ufps.push(skill);
    }
    props.setFilteredProjectsSkills(ufps);
  };

  const updateTypeFilter = (type: string) => {
    let ufpt = props.filteredProjectsTypes;
    if (ufpt.includes(type)) {
      ufpt = ufpt.filter((t) => t !== type);
    } else {
      ufpt.push(type);
    }
    props.setFilteredProjectsTypes(ufpt);
  };

  return (
    props.isVisible ? <ProjectFilters
      setFilterModalVisbility={ props.setFilterModalVisbility }
      projectsSkills={ props.projectsSkills }
      projectsTypes={ props.projectsTypes }
      filteredProjectSkills={ props.filteredProjectSkills }
      updateSkillFilter={ updateSkillFilter }
      updateTypeFilter={ updateTypeFilter }
      filteredProjectsTypes={ props.filteredProjectsTypes} /> : null
  );
};

const mapStateToProps = (store: IStore) => {
  return {
    isVisible: store.projects.projectsFilterVisibility,
    projectsSkills: store.projects.projectsSkills,
    projectsTypes: store.projects.projectsTypes,
    filteredProjectSkills: store.projects.filteredProjectsSkills,
    filteredProjectsTypes: store.projects.filteredProjectsTypes,
  };
};


const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators({
    setFilterModalVisbility,
    setFilteredProjectsSkills,
    setFilteredProjectsTypes,
  }, dispatch);
};

export default compose<Props, {}>(
  connect(mapStateToProps, mapDispatchToProps),
)(ProjectsFiltersContainer);

