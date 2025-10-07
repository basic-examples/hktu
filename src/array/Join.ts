import { Fn } from '../Fn';
import { HandleNever, IfInvoking, Input } from '../utils';

export interface Join<Separator extends string = never>
  extends Fn<string[], string> {
  out: IfInvoking<this, JoinRaw<Input<this>, Separator>, string>;
}

export type JoinRaw<A extends string[], Separator extends string = never> = [
  Separator,
] extends [never]
  ? Internal<A, '', ''>
  : A extends [infer First extends string, ...infer Rest extends string[]]
  ? Internal<Rest, Separator, HandleNever<First, A[0]>>
  : '';

type Internal<
  A extends string[],
  Separator extends string,
  Acc extends string,
> = A extends [infer First extends string, ...infer Rest extends string[]]
  ? Internal<Rest, Separator, `${Acc}${Separator}${HandleNever<First, A[0]>}`>
  : Acc;
