import React from 'react';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { IStore } from 'store';
import { ProjectFilters } from './ProjectFilters';

type Props = ReturnType<typeof mapDispatchToProps> & ReturnType<typeof mapStateToProps>

const ProjectsFiltersContainer: React.FC<Props> = (props) => {

  return (
    <ProjectFilters />
  );
};

const mapStateToProps = (store: IStore) => {
  return {
  };
};


const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators({
  }, dispatch);
};

export default compose<Props, {}>(
  connect(mapStateToProps, mapDispatchToProps),
)(ProjectsFiltersContainer);

