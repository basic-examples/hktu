import { Fn } from './Fn';
import { Invoke } from './Invoke';
import { IfInvoking, Input } from './utils';

export interface If<
  Condition extends Fn<unknown, boolean>,
  True extends Fn<Condition['in'], unknown>,
  False extends Fn<Condition['in'], True['out']>,
> extends Fn<Condition['in'], True['out']> {
  out: IfInvoking<
    this,
    IfRaw<Condition, True, False, Input<this>>,
    True['out']
  >;
}

export type IfRaw<
  Condition extends Fn<unknown, boolean>,
  True extends Fn<Condition['in'], unknown>,
  False extends Fn<Condition['in'], True['out']>,
  In extends Condition['in'],
> = Invoke<Invoke<Condition, In> extends true ? True : False, In>;
