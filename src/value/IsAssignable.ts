import { Fn } from '../Fn';
import { IfInvoking, Input } from '../utils';

export interface IsAssignable<T1, T2> extends Fn<T1, boolean> {
  out: IfInvoking<this, InvokeIsAssignable<T1, T2, Input<this>>, boolean>;
}

export type InvokeIsAssignable<T1, T2, Input extends T1> = [Input] extends [T2]
  ? true
  : false;
