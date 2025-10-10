import { Fn } from '../Fn';
import { Result, ResultOk } from '../types';
import { IfInvoking, Input } from '../utils';

export interface UnwrapOr<T, V extends T> extends Fn<Result<T, any>, T> {
  out: IfInvoking<this, InvokeUnwrapOr<T, V, Input<this>>, T>;
}

export type InvokeUnwrapOr<T, V extends T, In extends Result<T, any>> = [
  In,
] extends [ResultOk<infer I extends T, unknown, unknown>]
  ? I
  : V;
