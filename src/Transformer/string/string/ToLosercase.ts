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

export interface ToLowercase extends Transformer<string, string> {
  output: IfHasRaw<
    this,
    'input',
    ToLowercaseRaw<RawField<this, 'input'>>,
    string
  >;
}

export type ToLowercaseRaw<S extends string> = Pipe3<
  string,
  S,
  Split,
  ArrayMap<
    string,
    string,
    If<string, string, IsLowerAlpha, ToLowercaseInternal, I<string>>
  >,
  Join
>;

interface ToLowercaseInternal extends Transformer<string, string> {
  output: IfHasRaw<
    this,
    'input',
    ToLowercaseInternalRaw<RawField<this, 'input'>>,
    string
  >;
}

type ToLowercaseInternalRaw<S extends string> = Lowercase<S>;
