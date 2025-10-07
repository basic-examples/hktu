import { Fn } from '../Fn';
import { InvokeOr } from '../union';
import { IfInvoking, Input } from '../utils';
import { InvokeIsLowerAlpha } from './IsLowerAlpha';
import { InvokeIsUpperAlpha } from './IsUpperAlpha';

export interface IsAlpha extends Fn<string, boolean> {
  out: IfInvoking<this, InvokeIsAlpha<Input<this>>, boolean>;
}

export type InvokeIsAlpha<C extends string> = InvokeOr<
  InvokeIsLowerAlpha<C> | InvokeIsUpperAlpha<C>
>;
