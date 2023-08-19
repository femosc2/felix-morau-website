import axios from 'axios';
import { Languages } from 'models/languages';

export const getTranslation = async (word: string): Promise<any> => {
  const response = await axios.get(`${process.env.REACT_APP_API}translations/translation?word=${word}`);
  return response;
};
export const getTranslations = async (language: Languages): Promise<any> => {
  const response = await axios.get(`${process.env.REACT_APP_API}translations/byLanguage?language=${language}`);
  return response;
};

export const getProjects = async (): Promise<any> => {
  const response = await axios.get(`${process.env.REACT_APP_API}projects`);
  return response;
};

export const getSkills = async (): Promise<any> => {
  const response = await axios.get(`${process.env.REACT_APP_API}skills`);
  return response;
};
