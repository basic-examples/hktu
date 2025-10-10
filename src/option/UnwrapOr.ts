import { Fn } from '../Fn';
import { Option, OptionSome } from '../types';
import { IfInvoking, Input } from '../utils';

export interface UnwrapOr<T, V extends T> extends Fn<Option<T>, T> {
  out: IfInvoking<this, InvokeUnwrapOr<T, V, Input<this>>, T>;
}

export type InvokeUnwrapOr<T, V extends T, In extends Option<T>> = [
  In,
] extends [OptionSome<infer I extends T, unknown>]
  ? I
  : V;
