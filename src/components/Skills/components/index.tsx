import React, { useEffect } from 'react';
import { ISkill } from '../redux/reducers';
import { db } from '../../../firebase';
import SkillsList from './SkillsList';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { IStore } from 'store';
import { setSkills, setSkillsSortedBy } from '../redux/actions';

type Props = ReturnType<typeof mapDispatchToProps> & ReturnType<typeof mapStateToProps>

const SkillsListContainer: React.FC<Props> = (props) => {

  const sortSkillsByComfortability = (skills: ISkill[]) => {
    const sortedSkills = skills.sort((a, b) => {
      return b.comfortability - a.comfortability;
    });
    props.setSkillsSortedBy('comfortability');
    props.setSkills(sortedSkills);
  };

  const sortSkillsByName = (skills: ISkill[]) => {
    const sortedSkills = skills.sort((a, b) => a.skillName.localeCompare(b.skillName));
    props.setSkillsSortedBy('name');
    props.setSkills(sortedSkills);
  };

  useEffect(() => {
    db.ref('/skills').once('value').then((snapshot) => {
      props.setSkills(snapshot.val());
    });
    if (props.skillsSortedBy === 'name') {
      sortSkillsByName(props.skills);
    } else if (props.skillsSortedBy === 'comfortability') {
      sortSkillsByComfortability(props.skills);
    }
  }, []);

  return (
    <SkillsList skills={ props.skills }
      sbComfortability={ () => sortSkillsByComfortability(props.skills)}
      sbName={() => sortSkillsByName(props.skills)}
      sortedBy={ props.skillsSortedBy} />
  );
};

const mapStateToProps = (store: IStore) => {
  return {
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
)(SkillsListContainer);

