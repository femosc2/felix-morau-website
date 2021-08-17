import { getSkills } from 'api';
import { Skill } from 'models/skill';
import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IStore } from 'store';

import { setSkills } from './redux/actions';
import { Skills } from './Skills';


export const SkillsContainer: React.FC = () => {
  const skills = useSelector<IStore, Skill[]>(state => state.skills.skills);
  const dispatch = useDispatch();
  useEffect(() => {skills.length === 0 && getSkills().then((response => {
    dispatch(setSkills(response.data));}));});
  return (
    <Skills skills={skills} />
  );
};
