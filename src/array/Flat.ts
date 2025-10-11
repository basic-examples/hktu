import { Fn } from '../Fn';
import { IfInvoking, Input } from '../utils';

export interface Flat<T extends unknown[]> extends Fn<T[], T[number][]> {
  out: IfInvoking<this, InvokeFlat<T, Input<this>>, T[number][]>;
}

export type InvokeFlat<T extends unknown[], In extends T[]> = Internal<
  T,
  In,
  []
>;

type Internal<
  T extends unknown[],
  In extends T[],
  Acc extends T[number][],
> = In extends [infer First extends T, ...infer Rest extends T[]]
  ? Internal<T, Rest, [...Acc, ...First]>
  : Acc;
