import { Filter } from '../../..';
import { Result } from '../../../../Result';
import { IfHasRaw } from '../../../../util/IfHasRaw';
import { RawField } from '../../../../util/RawField';

export interface FilterOk<T> extends Filter<Result<T, unknown>> {
  ok: IfHasRaw<this, 'input', FilterOkRaw<T, RawField<this, 'input'>>, boolean>;
}

export type FilterOkRaw<T, R extends Result<T, unknown>> = R['ok'];
