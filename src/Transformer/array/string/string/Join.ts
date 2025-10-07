import { Transformer } from '../../..';
import { HandleNever } from '../../../../util/HandleNever';
import { IfHasRaw } from '../../../../util/IfHasRaw';
import { RawField } from '../../../../util/RawField';

export interface Join<Separator extends string = never>
  extends Transformer<string[], string> {
  output: IfHasRaw<
    this,
    'input',
    JoinRaw<RawField<this, 'input'>, Separator>,
    string
  >;
}

export type JoinRaw<A extends string[], Separator extends string = never> = [
  Separator,
] extends [never]
  ? JoinNever<A, ''>
  : A extends [infer First extends string, ...infer Rest extends string[]]
  ? JoinSep<Rest, Separator, HandleNever<First, A[0]>>
  : '';

type JoinNever<A extends string[], Acc extends string> = A extends [
  infer First extends string,
  ...infer Rest extends string[],
]
  ? JoinNever<Rest, `${Acc}${HandleNever<First, A[0]>}`>
  : Acc;

type JoinSep<
  A extends string[],
  Separator extends string,
  Acc extends string,
> = A extends [infer First extends string, ...infer Rest extends string[]]
  ? JoinSep<Rest, Separator, `${Acc}${Separator}${HandleNever<First, A[0]>}`>
  : Acc;
