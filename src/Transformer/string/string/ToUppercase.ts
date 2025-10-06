import { Transformer } from '../..';
import { IsLowerAlpha } from '../../../Filter/string/char/IsLowerAlpha';
import { Pipe3 } from '../../../Pipe';
import { IfHasRaw } from '../../../util/IfHasRaw';
import { RawField } from '../../../util/RawField';
import { Join } from '../../array/string/string/Join';
import { ArrayMap } from '../../array/t1/array/t2/ArrayMap';
import { I } from '../../I';
import { If } from '../../If';
import { Split } from '../array/string/Split';

export interface ToUppercase extends Transformer<string, string> {
  output: IfHasRaw<
    this,
    'input',
    ToUppercaseRaw<RawField<this, 'input'>>,
    string
  >;
}

export type ToUppercaseRaw<S extends string> = Pipe3<
  S,
  Split,
  ArrayMap<If<IsLowerAlpha, ToUppercaseInternal, I<string>>>,
  Join
>;

interface ToUppercaseInternal extends Transformer<string, string> {
  output: IfHasRaw<
    this,
    'input',
    ToUppercaseInternalRaw<RawField<this, 'input'>>,
    string
  >;
}

type ToUppercaseInternalRaw<S extends string> = Uppercase<S>;
