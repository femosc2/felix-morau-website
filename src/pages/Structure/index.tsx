import React from 'react';
import { AboutContainer } from 'components/About';
import { ProjectContainer } from 'components/Projects/index';
import { ContactContainer } from 'components/Contact';

export const Structure: React.FC<{}> = () => (
  <>
    <AboutContainer />
    <ProjectContainer />
    <ContactContainer />
  </>
);
