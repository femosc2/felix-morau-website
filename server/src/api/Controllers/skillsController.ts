import { Response } from 'express';

import { db } from '../..';
import { Skill } from '../../Models/skill';

export const getSkills = ({ }, res: Response): Response<Skill[]> | null => {
  try {
    db.ref('/skills').once('value').then((snapshot) => {
        return res.status(200).send(snapshot.val());
    })
    } catch(e) {
    return res.status(400).send(e)
  }
  return null;
  }