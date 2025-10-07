import { Fn } from '../Fn';
import { Invoke } from '../Invoke';
import { ArrayItemInfo } from '../types/ArrayItemInfo';
import { HandleNever, IfInvoking, Input } from '../utils';

export interface MapEx<Op extends Fn<ArrayItemInfo<unknown>, unknown>>
  extends Fn<Op['in']['item'][], Op['out'][]> {
  out: IfInvoking<this, InvokeMapEx<Op, Input<this>>, Op['out'][]>;
}

export type InvokeMapEx<
  Op extends Fn<ArrayItemInfo<unknown>, unknown>,
  List extends Op['in']['item'][],
> = Internal<Op, List, []>;

type Internal<
  Op extends Fn<ArrayItemInfo<unknown>, unknown>,
  List extends Op['in']['item'][],
  Acc extends Op['out'][],
> = List extends [
  infer First extends Op['in']['item'],
  ...infer Rest extends Op['in']['item'][],
]
  ? Internal<
      Op,
      Rest,
      [
        ...Acc,
        Invoke<Op, ArrayItemInfo<HandleNever<First, List[0]>, Acc['length']>>,
      ]
    >
  : Acc;
