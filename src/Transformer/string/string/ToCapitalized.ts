import { Transformer } from '../..';
import { IfHasRaw } from '../../../util/IfHasRaw';
import { RawField } from '../../../util/RawField';
import { ToUppercaseRaw } from './ToUppercase';

export interface ToCapitalized extends Transformer<string, string> {
  output: IfHasRaw<
    this,
    'input',
    ToCapitalizedRaw<RawField<this, 'input'>>,
    string
  >;
}

export type ToCapitalizedRaw<S extends string> =
  S extends `${infer First extends string}${infer Rest extends string}`
    ? `${ToUppercaseRaw<First>}${Rest}`
    : S;
