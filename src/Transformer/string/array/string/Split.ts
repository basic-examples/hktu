import { Transformer } from '../../..';
import { IfHasRaw } from '../../../../util/IfHasRaw';
import { RawField } from '../../../../util/RawField';

export interface Split<Separator extends string = never>
  extends Transformer<string, string[]> {
  output: IfHasRaw<
    this,
    'input',
    SplitRaw<RawField<this, 'input'>, Separator>,
    string[]
  >;
}

export type SplitRaw<S extends string, Separator extends string> = [
  Separator,
] extends [never]
  ? SplitNever<S, []>
  : SplitSep<S, Separator, []>;

type SplitNever<
  S extends string,
  Acc extends string[],
> = S extends `${infer First}${infer Rest}`
  ? SplitNever<Rest, [...Acc, First]>
  : Acc;

type SplitSep<
  S extends string,
  Separator extends string,
  Acc extends string[],
> = S extends `${infer First}${Separator}${infer Rest}`
  ? SplitSep<Rest, Separator, [...Acc, First]>
  : [...Acc, S];
