import { Transformer } from '../..';
import { IfHasRaw } from '../../../util/IfHasRaw';
import { RawField } from '../../../util/RawField';

export interface Prepend<Prefix extends string>
  extends Transformer<string, string> {
  output: IfHasRaw<
    this,
    'input',
    PrependRaw<RawField<this, 'input'>, Prefix>,
    string
  >;
}

export type PrependRaw<
  S extends string,
  Prefix extends string,
> = `${Prefix}${S}`;
