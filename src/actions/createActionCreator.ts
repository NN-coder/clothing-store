import { ActionCreator, Action } from '../types/actions';

function createActionCreator<A extends Action>(type: A['type']): ActionCreator<A> {
  return Object.assign((payload: A['payload']) => ({ type, payload }), { type });
}

export { createActionCreator };
