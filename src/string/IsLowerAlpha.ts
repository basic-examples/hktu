import { Fn } from '../Fn';
import { IfInvoking, Input } from '../utils';

export interface IsLowerAlpha extends Fn<string, boolean> {
  out: IfInvoking<this, InvokeIsLowerAlpha<Input<this>>, boolean>;
}

export type InvokeIsLowerAlpha<C extends string> = C extends
  | 'a'
  | 'b'
  | 'c'
  | 'd'
  | 'e'
  | 'f'
  | 'g'
  | 'h'
  | 'i'
  | 'j'
  | 'k'
  | 'l'
  | 'm'
  | 'n'
  | 'o'
  | 'p'
  | 'q'
  | 'r'
  | 's'
  | 't'
  | 'u'
  | 'v'
  | 'w'
  | 'x'
  | 'y'
  | 'z'
  ? true
  : false;
