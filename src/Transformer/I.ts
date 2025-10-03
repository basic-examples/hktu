import { Transformer } from '.';
import { IfHasRaw } from '../util/IfHasRaw';
import { RawField } from '../util/RawField';

export interface I<T> extends Transformer<T, T> {
  output: IfHasRaw<this, 'input', IRaw<T, RawField<this, 'input'>>, T>;
}

export type IRaw<T, R extends T> = R;
