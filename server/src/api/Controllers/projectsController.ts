import { Response } from 'express';

import { db } from '../..';
import { Project } from '../../Models/Project';

export const getProjects = ({ }, res: Response): Response<Project[]> | null => {
  try {
    db.ref('/projects').once('value').then((snapshot) => {
      return res.status(200).send(snapshot.val());
    });
  } catch(e) {
    return res.status(400).send(e);
  }
  return null;
};
