import { Fn } from '../Fn';
import { IfInvoking, Input } from '../utils';

export interface And extends Fn<boolean, boolean> {
  out: IfInvoking<this, InvokeAnd<Input<this>>, boolean>;
}

export type InvokeAnd<B extends boolean> = [B] extends [true] ? true : false;
