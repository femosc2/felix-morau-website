import { Request, Response } from 'express';

import { db } from '../..';

export const getTranslations = ({ }, res: Response): Response<any> | null => {
  try {
    db.ref('/translations').once('value').then((snapshot) => {
      return res.status(200).send(snapshot.val());
    });
  } catch(e) {
    return res.status(400).send(e);
  }
  return null;
};

export const getTranslation = (req: Request, res: Response): Response<any> | null => {
  try {
    console.log(req.query);
    db.ref('/translations').once('value').then((snapshot) => {
      for (const [key, value] of Object.entries(snapshot.val())) {
        if (key === req.query.word) {
          return res.status(200).send(value);
        } else {
          return res.status(400).send(req.query.word);
        }
      }
    });
  } catch(e) {
    return res.status(400).send(e);
  }
  return null;
};
