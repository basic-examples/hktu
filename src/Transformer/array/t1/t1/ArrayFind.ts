import { Transformer } from '../../..';
import { Filter } from '../../../../Filter';
import { InvokeFilter } from '../../../../Filter/InvokeFilter';
import { HandleNever } from '../../../../util/HandleNever';
import { IfHasRaw } from '../../../../util/IfHasRaw';
import { RawField } from '../../../../util/RawField';

export interface ArrayFind<K extends Filter<unknown>>
  extends Transformer<K['input'][], K['input']> {
  output: IfHasRaw<
    this,
    'input',
    ArrayFindRaw<K, RawField<this, 'input'>>,
    K['input']
  >;
}

export type ArrayFindRaw<
  K extends Filter<unknown>,
  List extends K['input'][],
> = List extends [
  infer First extends K['input'],
  ...infer Rest extends K['input'][],
]
  ? InvokeFilter<K, HandleNever<First, List[0]>> extends true
    ? HandleNever<First, List[0]>
    : ArrayFindRaw<K, Rest>
  : never;
