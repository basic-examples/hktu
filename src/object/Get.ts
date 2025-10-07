import { Fn } from '../Fn';
import { IfInvoking, Input } from '../utils';

export interface Get<T, K extends keyof T> extends Fn<T, T[K]> {
  out: IfInvoking<this, InvokeGet<T, K, Input<this>>, T[K]>;
}

export type InvokeGet<T, K extends keyof T, V extends T> = V[K];
