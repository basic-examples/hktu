import { Fn } from '../Fn';
import { IfInvoking, Input } from '../utils';

export interface Nth<
  T extends [unknown, ...unknown[]],
  N extends number & keyof T,
> extends Fn<T, T[N]> {
  out: IfInvoking<this, InvokeNth<T, N, Input<this>>, T[N]>;
}

export type InvokeNth<
  T extends [unknown, ...unknown[]],
  N extends number & keyof T,
  Tuple extends T,
> = Tuple[N];
