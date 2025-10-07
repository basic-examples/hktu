import { Fn } from '../Fn';
import { IfInvoking, Input } from '../utils';

export interface IsUpperAlpha extends Fn<string, boolean> {
  out: IfInvoking<this, InvokeIsUpperAlpha<Input<this>>, boolean>;
}

export type InvokeIsUpperAlpha<C extends string> = C extends
  | 'A'
  | 'B'
  | 'C'
  | 'D'
  | 'E'
  | 'F'
  | 'G'
  | 'H'
  | 'I'
  | 'J'
  | 'K'
  | 'L'
  | 'M'
  | 'N'
  | 'O'
  | 'P'
  | 'Q'
  | 'R'
  | 'S'
  | 'T'
  | 'U'
  | 'V'
  | 'W'
  | 'X'
  | 'Y'
  | 'Z'
  ? true
  : false;
