import { Fn } from '../Fn';
import { Invoke } from '../Invoke';
import { HandleNever, IfInvoking, Input } from '../utils';

export interface FlatMap<T extends Fn<unknown, unknown[]>>
  extends Fn<T['in'][], T['out'][number][]> {
  out: IfInvoking<this, InvokeFlatMap<T, Input<this>>, T['out'][number][]>;
}

export type InvokeFlatMap<
  T extends Fn<unknown, unknown[]>,
  In extends T['in'][],
> = Internal<T, In, []>;

type Internal<
  T extends Fn<unknown, unknown[]>,
  In extends T['in'][],
  Acc extends T['out'][number][],
> = In extends [infer First extends T['in'], ...infer Rest extends T['in'][]]
  ? Internal<T, Rest, [...Acc, ...Invoke<T, HandleNever<First, In[0]>>]>
  : Acc;
