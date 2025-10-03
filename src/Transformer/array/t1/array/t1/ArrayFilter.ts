import { Transformer } from '../../../..';
import { Filter } from '../../../../../Filter';
import { InvokeFilter } from '../../../../../Filter/InvokeFilter';
import { IfHasRaw } from '../../../../../util/IfHasRaw';
import { RawField } from '../../../../../util/RawField';

export interface ArrayFilter<T, K extends Filter<T>>
  extends Transformer<T[], T[]> {
  output: IfHasRaw<
    this,
    'input',
    ArrayFilterRaw<T, K, RawField<this, 'input'>>,
    T[]
  >;
}

export type ArrayFilterRaw<
  T,
  K extends Filter<T>,
  List extends T[],
> = ArrayFilterRawInternal<T, K, List, []>;

type ArrayFilterRawInternal<
  T,
  K extends Filter<T>,
  Array extends T[],
  Acc extends T[],
> = Array extends [infer First extends T, ...infer Rest extends T[]]
  ? ArrayFilterRawInternal<
      T,
      K,
      Rest,
      InvokeFilter<T, K, First> extends true ? [...Acc, First] : Acc
    >
  : Acc;
