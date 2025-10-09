import { Fn } from '../Fn';
import { IfInvoking, Input } from '../utils';

export interface EndsWith<P extends string> extends Fn<string, boolean> {
  out: IfInvoking<this, InvokeEndsWith<P, Input<this>>, boolean>;
}

export type InvokeEndsWith<P extends string, S extends string> = [S] extends [
  `${string}${P}`,
]
  ? true
  : false;
