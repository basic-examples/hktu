import { Fn } from '../Fn';
import { IfInvoking, Input } from '../utils';

export interface Map<T> extends Fn<keyof T & string, T[keyof T]> {
  out: IfInvoking<this, InvokeMap<T, Input<this>>, T[keyof T]>;
}

export type InvokeMap<T, U extends keyof T & string> = T[U];
