import { Filter } from '..';
import { IfHasRaw } from '../../util/IfHasRaw';
import { RawField } from '../../util/RawField';
import { InvokeFilter } from '../InvokeFilter';

export interface AllCharsAre<K extends Filter<string>> extends Filter<string> {
  ok: IfHasRaw<
    this,
    'input',
    AllCharsAreRaw<K, RawField<this, 'input'>>,
    boolean
  >;
}

export type AllCharsAreRaw<
  K extends Filter<string>,
  S extends string,
> = S extends `${infer FirstLetter extends string}${infer Rest extends string}`
  ? InvokeFilter<K, FirstLetter> extends true
    ? AllCharsAreRaw<K, Rest>
    : false
  : true;
