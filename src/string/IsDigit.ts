import { Fn } from '../Fn';
import { IfInvoking, Input } from '../utils';

export interface IsDigit extends Fn<string, boolean> {
  out: IfInvoking<this, InvokeIsDigit<Input<this>>, boolean>;
}

export type InvokeIsDigit<C extends string> = C extends
  | '0'
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  ? true
  : false;
