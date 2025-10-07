import { Transformer } from '../..';
import { IfHasRaw } from '../../../util/IfHasRaw';
import { RawField } from '../../../util/RawField';

export interface Append<Suffix extends string>
  extends Transformer<string, string> {
  output: IfHasRaw<
    this,
    'input',
    AppendRaw<RawField<this, 'input'>, Suffix>,
    string
  >;
}

export type AppendRaw<
  S extends string,
  Suffix extends string,
> = `${S}${Suffix}`;
