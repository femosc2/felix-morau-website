import { Request, Response } from 'express';
import { Skill } from '../../Models/skill';
import { db } from '../../index';

export const getSkills = ({ }, res: Response): Response<Skill[]> => {
    try {
      db.ref('/skills').once('value').then((snapshot) => {
      return res.status(200).send(snapshot.val());
    })  
    } catch(e) {
        return res.status(400).send("Something went wrong.")
    }
    
    return res.status(400).send("Something went wrong.")
  }