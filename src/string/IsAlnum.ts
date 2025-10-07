import { Fn } from '../Fn';
import { InvokeOr } from '../union';
import { IfInvoking, Input } from '../utils';
import { InvokeIsAlpha } from './IsAlpha';
import { InvokeIsDigit } from './IsDigit';

export interface IsAlnum extends Fn<string, boolean> {
  out: IfInvoking<this, InvokeIsAlnum<Input<this>>, boolean>;
}

export type InvokeIsAlnum<C extends string> = InvokeOr<
  InvokeIsAlpha<C> | InvokeIsDigit<C>
>;
