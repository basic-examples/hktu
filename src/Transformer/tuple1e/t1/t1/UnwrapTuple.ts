import { Transformer } from '../../..';
import { IfHasRaw } from '../../../../util/IfHasRaw';
import { RawField } from '../../../../util/RawField';

export interface UnwrapTuple<T extends [unknown, ...unknown[]]>
  extends Transformer<T, T[0]> {
  output: IfHasRaw<this, 'input', RawField<this, 'input'>[0], T[0]>;
}
