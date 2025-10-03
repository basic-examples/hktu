import { Filter } from '../..';
import { IfHasRaw } from '../../../util/IfHasRaw';
import { RawField } from '../../../util/RawField';

export interface IsUpperAlpha extends Filter<string> {
  ok: IfHasRaw<
    this,
    'input',
    IsUpperAlphaRaw<RawField<this, 'input'>>,
    boolean
  >;
}

export type IsUpperAlphaRaw<C extends string> = C extends
  | 'A'
  | 'B'
  | 'C'
  | 'D'
  | 'E'
  | 'F'
  | 'G'
  | 'H'
  | 'I'
  | 'J'
  | 'K'
  | 'L'
  | 'M'
  | 'N'
  | 'O'
  | 'P'
  | 'Q'
  | 'R'
  | 'S'
  | 'T'
  | 'U'
  | 'V'
  | 'W'
  | 'X'
  | 'Y'
  | 'Z'
  ? true
  : false;
