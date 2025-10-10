import { Fn } from './Fn';
import { IfInvoking, Input } from './utils';

export interface I<T> extends Fn<T, T> {
  out: IfInvoking<this, InvokeI<Input<this>>, T>;
}

export type InvokeI<T> = T;
