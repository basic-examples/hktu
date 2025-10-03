import { Filter } from '../..';
import { IfHasRaw } from '../../../util/IfHasRaw';
import { RawField } from '../../../util/RawField';

export interface IsLowerAlpha extends Filter<string> {
  ok: IfHasRaw<
    this,
    'input',
    IsLowerAlphaRaw<RawField<this, 'input'>>,
    boolean
  >;
}

export type IsLowerAlphaRaw<C extends string> = C extends
  | 'a'
  | 'b'
  | 'c'
  | 'd'
  | 'e'
  | 'f'
  | 'g'
  | 'h'
  | 'i'
  | 'j'
  | 'k'
  | 'l'
  | 'm'
  | 'n'
  | 'o'
  | 'p'
  | 'q'
  | 'r'
  | 's'
  | 't'
  | 'u'
  | 'v'
  | 'w'
  | 'x'
  | 'y'
  | 'z'
  ? true
  : false;
