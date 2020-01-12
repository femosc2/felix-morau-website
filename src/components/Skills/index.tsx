import React, { useEffect } from 'react';
import { IStore } from 'store';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { withRouter, RouteComponentProps } from 'react-router';
import { Skills } from './Skills';
import { db } from '../../firebase';
import { ISkill } from './redux/reducers';
import { setSkills, setSkillsSortedBy } from './redux/actions';

type Props = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps> & RouteComponentProps

const SkillsContainer: React.FC<Props> = (props) => {

  const getSkills = () => {
    db.ref('/skills').once('value').then((snapshot) => {
      props.setSkills(snapshot.val());
    });
  };

  const sortSkillsByComfortability = (skills: ISkill[]) => {
    console.log(skills);
    const sortedSkills = skills.sort((a, b) => {
      return b.comfortability - a.comfortability;
    });
    console.log(sortedSkills);
    props.setSkillsSortedBy('comfortability');
    props.setSkills(sortedSkills);
  };

  useEffect(() => {
    getSkills();
  }, []);

  return (
    <>
      { (props.activePage === 'skills' || props.lastPage === 'skills')
      && <Skills activePage={ props.activePage } skills={ props.skills }
        sbComfortability={ sortSkillsByComfortability } /> }
    </>
  );
};

const mapStateToProps = (store: IStore) => {
  return {
    activePage: store.structure.activePage,
    lastPage: store.structure.lastPage,
    skills: store.skills.skills,
    skillsSortedBy: store.skills.skillsSortedBy,
  };
};


const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators({
    setSkills,
    setSkillsSortedBy,
  }, dispatch);
};

export default compose<Props, {}>(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter,
)(SkillsContainer);
