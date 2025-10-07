import { Fn } from '../Fn';
import { Invoke } from '../module';
import { HandleNever, IfInvoking, Input } from '../utils';

export interface Filter<K extends Fn<unknown, boolean>>
  extends Fn<K['in'][], K['in'][]> {
  out: IfInvoking<this, InvokeFilter<K, Input<this>>, K['in'][]>;
}

export type InvokeFilter<
  K extends Fn<unknown, boolean>,
  List extends K['in'][],
> = Internal<K, List, []>;

type Internal<
  K extends Fn<unknown, boolean>,
  Array extends K['in'][],
  Acc extends K['in'][],
> = Array extends [infer First extends K['in'], ...infer Rest extends K['in'][]]
  ? Internal<
      K,
      Rest,
      Invoke<K, HandleNever<First, Array[0]>> extends true
        ? [...Acc, HandleNever<First, Array[0]>]
        : Acc
    >
  : Acc;
