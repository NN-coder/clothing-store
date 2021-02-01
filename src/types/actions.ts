export interface Action<T extends string = string, P = unknown> {
  type: T;
  payload: P;
}

export type ActionCreator<A extends Action = Action> = (
  payload: A['payload']
) => Action<A['type'], A['payload']>;
