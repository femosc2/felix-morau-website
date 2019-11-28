import React, { useEffect, useState } from 'react';
import { IStore } from '../../../../store';
import { bindActionCreators } from 'redux';
import { setActiveAbout } from '../../redux/actions';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { WhatDoIDo } from './WhatDoIDo';
import { RouteComponentProps, withRouter } from 'react-router';
import axios from 'axios';
import { ISkill } from './index';

interface IPropsInternal {
    whoAmIActive: boolean;
    setActiveAbout: (isWhoAmIActive: boolean) => void;
}

export interface ISkill {
    skillName: string;
    color: string;
    comfortability: number;
    description: string;
}


type Props = IPropsInternal & RouteComponentProps

const WhatDoIDoContainer: React.FC<Props> = (props: Props) => {
  const { whoAmIActive, setActiveAbout } = props;
  const [skills, setSkills] = useState([{
    skillName: '',
    color: '',
    comfortability: 0,
    description: '',
  }]);

  const getSkills = async () => {
    const response = await axios.get('https://my-website-21d35.firebaseio.com/skills.json');
    let skills: ISkill[] = response.data;
    skills = skills.sort((a, b) => {
      return b.comfortability - a.comfortability;
    });
    setSkills(skills);
  };

  useEffect(() => {
    getSkills();
    window.location.href.includes('skills') ? setActiveAbout(true) : setActiveAbout(false);
  }, []);

  const handleClick = () => {
    whoAmIActive ? console.log('lol') : props.history.push('/about/skills');
    whoAmIActive ? console.log('lol') : setActiveAbout(true);
  };

  return (
    <>
      <WhatDoIDo handleClick={ handleClick } whoAmIActive={ whoAmIActive} skills={ skills } />
    </>
  );
};

const mapStateToProps = (store: IStore) => {
  return {
    whoAmIActive: store.about.whoAmIActive,
  };
};


const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators({
    setActiveAbout,
  }, dispatch);
};

export default compose<Props, {}>(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter,
)(WhatDoIDoContainer);
