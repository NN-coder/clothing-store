import { ActionCreator, Action } from '../types/actions';

function createActionCreator<A extends Action>(type: A['type']): ActionCreator<A> {
  return (payload: A['payload']) => ({
    type,
    payload,
  });
}

export { createActionCreator };
