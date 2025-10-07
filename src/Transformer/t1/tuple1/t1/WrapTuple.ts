import { Transformer } from '../../..';
import { IfHasRaw } from '../../../../util/IfHasRaw';
import { RawField } from '../../../../util/RawField';

export interface WrapTuple<T> extends Transformer<T, [T]> {
  output: IfHasRaw<this, 'input', [RawField<this, 'input'>], [T]>;
}
