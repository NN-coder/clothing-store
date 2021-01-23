export interface Action<V, T extends string = string> {
  type: T;
  value: V;
}
