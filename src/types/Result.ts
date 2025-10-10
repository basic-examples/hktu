export interface ResultBase<T, E> {
  t: T;
  e: E;
}

export interface ResultOk<V extends T, T = V, E = unknown>
  extends ResultBase<T, E> {
  ok: true;
  value: V;
}

export interface ResultErr<V extends E, T = unknown, E = V>
  extends ResultBase<T, E> {
  ok: false;
  error: V;
}

export type Result<T, E> = ResultOk<T, T, E> | ResultErr<E, T, E>;
