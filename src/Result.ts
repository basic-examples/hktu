import { Fn } from './Fn';
import { IfInvoking, Input } from './utils';

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

export type InvokeUnwrapOr<
  T,
  R extends Result<T, unknown>,
  Or extends T,
> = R extends ResultOk<T> ? R['value'] : Or;

export interface UnwrapOr<T, Or extends T> extends Fn<Result<T, unknown>, T> {
  out: IfInvoking<this, InvokeUnwrapOr<T, Input<this>, Or>, T>;
}

export interface IsOk extends Fn<Result<unknown, unknown>, boolean> {
  out: IfInvoking<this, InvokeIsOk<Input<this>>, boolean>;
}

export type InvokeIsOk<R extends Result<unknown, unknown>> =
  R extends ResultOk<unknown> ? true : false;
