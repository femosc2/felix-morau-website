import { Router } from 'express';

import { getTranslation, getTranslationByLanguage, getTranslations } from '../Controllers/translationsController';

const translationsRouter = Router();

translationsRouter.get('/', getTranslations);
translationsRouter.get('/translation', getTranslation);
translationsRouter.get('/byLanguage', getTranslationByLanguage);

export default translationsRouter;
