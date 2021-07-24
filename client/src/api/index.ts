import axios from 'axios';
import { Languages } from 'models/languages';

const DEFAULT_API_PATH = '/api/v1/';
export const getTranslation = async (word: string): Promise<any> => {
  const response = await axios.get(`http://localhost:8081${DEFAULT_API_PATH}translations/translation?word=${word}`);
  return response;
};
export const getTranslations = async (language: Languages): Promise<any> => {
  const response = await axios.get(`http://localhost:8081${DEFAULT_API_PATH}translations/byLanguage?language=${language}`);
  return response;
};
