import { Transformer } from '../..';
import { IfHasRaw } from '../../../util/IfHasRaw';
import { RawField } from '../../../util/RawField';
import { ToLowercaseRaw } from './ToLosercase';

export interface ToUncapitalized extends Transformer<string, string> {
  output: IfHasRaw<
    this,
    'input',
    ToUncapitalizedRaw<RawField<this, 'input'>>,
    string
  >;
}

export type ToUncapitalizedRaw<S extends string> =
  S extends `${infer First extends string}${infer Rest extends string}`
    ? `${ToLowercaseRaw<First>}${Rest}`
    : S;
