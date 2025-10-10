import { HKTU } from '../../src';
import { Eq } from '../utils/Eq';
import { Expect } from '../utils/Expect';

export type Composition1 = HKTU.Compose<
  HKTU.value.I<string>,
  HKTU.array.ToArray<
    string,
    [string, HKTU.types.ArrayItemInfo<string>],
    [
      HKTU.value.I<string>,
      HKTU.object.ToObject<
        string,
        HKTU.types.ArrayItemInfo<string>,
        { index: HKTU.value.C<0>; item: HKTU.value.I<string> }
      >,
    ]
  >
>;

export type Composition2 = HKTU.Compose<
  Composition1,
  HKTU.object.Get<[string, HKTU.types.ArrayItemInfo<string>], 1>,
  HKTU.object.Get<HKTU.types.ArrayItemInfo<string>, 'item'>
>;

export type Test = Expect<
  Eq<'Hello world!', HKTU.Invoke<Composition2, 'Hello world!'>>
>;
