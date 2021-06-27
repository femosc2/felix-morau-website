import { Request, Response } from 'express';
import { Skill } from '../../Models/skill';
import { db } from '../../index';

export const getSkills = ({ }, res: Response): any => {
    try {
      db.ref('/skills').once('value').then((snapshot) => {
      return res.status(200).send(snapshot.val());
    })  
    } catch(e) {
        console.log(e)
    }
    
    return null;
  }