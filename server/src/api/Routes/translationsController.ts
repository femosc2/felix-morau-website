import { Router } from 'express';

import { getTranslation, getTranslations } from '../controllers/translationsController';

const translationsRouter = Router();

translationsRouter.get('/', getTranslations);
translationsRouter.get('/translation', getTranslation);

export default translationsRouter;
