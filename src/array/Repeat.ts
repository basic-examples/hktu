import { Fn } from '../Fn';
import { IfInvoking, Input } from '../utils';

export interface Repeat<T, N extends number> extends Fn<T, T[]> {
  out: IfInvoking<this, InvokeRepeat<T, N, Input<this>>, T[]>;
}

export type InvokeRepeat<T, N extends number, In extends T> = Internal<
  T,
  N,
  In,
  []
>;

type Internal<
  T,
  N extends number,
  In extends T,
  Acc extends T[],
> = N extends Acc['length'] ? Acc : Internal<T, N, In, [...Acc, In]>;
