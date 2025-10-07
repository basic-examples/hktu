import { Fn } from './Fn';
import { Invoke } from './Invoke';
import { IfInvoking, Input } from './utils';
import { Negate } from './utils/Negate';

export interface Not<F extends Fn<unknown, boolean>>
  extends Fn<F['in'], boolean> {
  out: IfInvoking<this, InvokeNot<F, Input<this>>, boolean>;
}

export type InvokeNot<
  F extends Fn<unknown, boolean>,
  Value extends F['in'],
> = Negate<Invoke<F, Value>>;
