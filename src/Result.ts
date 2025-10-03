export type Result<T, E> = ResultOk<T> | ResultErr<E>;

export type ResultOk<T> = {
  ok: true;
  value: T;
};

export type ResultErr<E> = {
  ok: false;
  error: E;
};

export type Unwrap<R extends ResultOk<unknown>> = R['value'];
