import { IModal } from './reducers';
import { JSXElement } from '@babel/types';

export const SET_MODAL_CONTENT = 'SET_MODAL_CONTENT';


export type ModalAction =
| { type: typeof SET_MODAL_CONTENT, content: JSXElement }

export const setModalContent = (content: JSXElement): ModalAction => ({
  content,
  type: SET_MODAL_CONTENT,
});
