import { Fn } from '../Fn';
import { Invoke } from '../Invoke';
import { Option, OptionNone, OptionSome } from '../types';
import { HandleNever, IfInvoking, Input } from '../utils';

export interface Find<K extends Fn<unknown, boolean>>
  extends Fn<K['in'][], Option<K['in']>> {
  out: IfInvoking<this, InvokeFind<K, Input<this>>, Option<K['in']>>;
}

export type InvokeFind<
  K extends Fn<unknown, boolean>,
  List extends K['in'][],
> = List extends [infer First extends K['in'], ...infer Rest extends K['in'][]]
  ? Invoke<K, HandleNever<First, List[0]>> extends true
    ? OptionSome<HandleNever<First, List[0]>, K['in']>
    : InvokeFind<K, Rest>
  : OptionNone<K['in']>;
