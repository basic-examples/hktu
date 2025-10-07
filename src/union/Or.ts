import { Fn } from '../Fn';
import { IfInvoking, Input } from '../utils';

export interface Or extends Fn<boolean, boolean> {
  out: IfInvoking<this, InvokeOr<Input<this>>, boolean>;
}

export type InvokeOr<B extends boolean> = true extends B ? true : false;
