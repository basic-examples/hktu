import { Transformer } from '../../../..';
import { Filter } from '../../../../../Filter';
import { InvokeFilter } from '../../../../../Filter/InvokeFilter';
import { HandleNever } from '../../../../../util/HandleNever';
import { IfHasRaw } from '../../../../../util/IfHasRaw';
import { RawField } from '../../../../../util/RawField';

export interface ArrayFilter<K extends Filter<unknown>>
  extends Transformer<K['input'][], K['input'][]> {
  output: IfHasRaw<
    this,
    'input',
    ArrayFilterRaw<K, RawField<this, 'input'>>,
    K['input'][]
  >;
}

export type ArrayFilterRaw<
  K extends Filter<unknown>,
  List extends K['input'][],
> = ArrayFilterRawInternal<K, List, []>;

type ArrayFilterRawInternal<
  K extends Filter<unknown>,
  Array extends K['input'][],
  Acc extends K['input'][],
> = Array extends [
  infer First extends K['input'],
  ...infer Rest extends K['input'][],
]
  ? ArrayFilterRawInternal<
      K,
      Rest,
      InvokeFilter<K, HandleNever<First, Array[0]>> extends true
        ? [...Acc, HandleNever<First, Array[0]>]
        : Acc
    >
  : Acc;
