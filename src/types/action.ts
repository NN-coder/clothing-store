export interface ActionWithoutPayload<T extends string> {
  type: T;
}

export interface Action<T extends string, P> extends ActionWithoutPayload<T> {
  payload: P;
}
