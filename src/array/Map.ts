import { Fn } from '../Fn';
import { Invoke } from '../Invoke';
import { HandleNever, IfInvoking, Input } from '../utils';

export interface Map<Kind extends Fn<unknown, unknown>>
  extends Fn<Kind['in'][], Kind['out'][]> {
  out: IfInvoking<this, InvokeMap<Kind, Input<this>>, Kind['out'][]>;
}

export type InvokeMap<
  Kind extends Fn<unknown, unknown>,
  List extends Kind['in'][],
> = Internal<Kind, List, []>;

type Internal<
  Kind extends Fn<unknown, unknown>,
  List extends Kind['in'][],
  Acc extends Kind['out'][],
> = List extends [
  infer First extends Kind['in'],
  ...infer Rest extends Kind['in'][],
]
  ? Internal<Kind, Rest, [...Acc, Invoke<Kind, HandleNever<First, List[0]>>]>
  : Acc;
