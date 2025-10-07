import { Fn } from '../Fn';
import { Invoke } from '../Invoke';
import { HandleNever, IfInvoking, Input } from '../utils';

export interface Map<Op extends Fn<unknown, unknown>>
  extends Fn<Op['in'][], Op['out'][]> {
  out: IfInvoking<this, InvokeMap<Op, Input<this>>, Op['out'][]>;
}

export type InvokeMap<
  Op extends Fn<unknown, unknown>,
  List extends Op['in'][],
> = Internal<Op, List, []>;

type Internal<
  Op extends Fn<unknown, unknown>,
  List extends Op['in'][],
  Acc extends Op['out'][],
> = List extends [
  infer First extends Op['in'],
  ...infer Rest extends Op['in'][],
]
  ? Internal<Op, Rest, [...Acc, Invoke<Op, HandleNever<First, List[0]>>]>
  : Acc;
