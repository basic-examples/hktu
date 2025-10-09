import { Fn } from '../Fn';
import { IfInvoking, Input } from '../utils';

export interface StartsWith<P extends string> extends Fn<string, boolean> {
  out: IfInvoking<this, InvokeStartsWith<P, Input<this>>, boolean>;
}

export type InvokeStartsWith<P extends string, S extends string> = [S] extends [
  `${P}${string}`,
]
  ? true
  : false;
