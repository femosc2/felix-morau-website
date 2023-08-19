import { getProjects } from 'api';
import { Project } from 'models/projects';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IStore } from 'store';

import { Projects } from './Projects';
import { setProjects } from './redux/actions';

export const ProjectsContainer: React.FC = () => {
  const dispatch = useDispatch();
  const [currentProjects, setCurrentProjects] = useState<Project[]>([]);
  const projects = useSelector<IStore, Project[]>(state => state.projects.projects);
  
  useEffect(() => setCurrentProjects(projects), [projects]);
  useEffect(() => {
    getProjects().then((projects) => dispatch(setProjects((projects.data))));
  }, []);

  return (
    <>
      {currentProjects.length !== 0 ? <Projects projects={currentProjects} /> : null}
    </>
  );
};
