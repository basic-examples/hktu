import { Fn } from '../Fn';
import { IfInvoking, Input } from '../utils';

export interface ToUnion<T> extends Fn<T[], T> {
  out: IfInvoking<this, InvokeToUnion<Input<this>>, T>;
}

export type InvokeToUnion<T extends unknown[]> = T[number];
