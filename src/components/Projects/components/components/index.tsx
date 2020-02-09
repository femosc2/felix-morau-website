import React from 'react';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { IStore } from 'store';
import { ProjectFilters } from './ProjectFilters';
import { setFilterModalVisbility, setFilteredProjectsSkills } from '../../redux/actions';


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

  return (
    props.isVisible ? <ProjectFilters
      setFilterModalVisbility={ props.setFilterModalVisbility }
      projectsSkills={ props.projectsSkills }
      filteredProjectSkills={ props.filteredProjectSkills }
      updateSkillFilter={ updateSkillFilter } /> : null
  );
};

const mapStateToProps = (store: IStore) => {
  return {
    isVisible: store.projects.projectsFilterVisibility,
    projectsSkills: store.projects.projectsSkills,
    filteredProjectSkills: store.projects.filteredProjectsSkills,
  };
};


const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators({
    setFilterModalVisbility,
    setFilteredProjectsSkills,
  }, dispatch);
};

export default compose<Props, {}>(
  connect(mapStateToProps, mapDispatchToProps),
)(ProjectsFiltersContainer);

