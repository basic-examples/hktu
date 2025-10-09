import { HKTU } from '../../src';
import { Eq } from '../utils/Eq';
import { Expect } from '../utils/Expect';

// "Hello, world!"
type WithPipe = HKTU.Pipe<
  'hello42world',
  HKTU.string.Split<'42'>,
  HKTU.array.MapEx<
    HKTU.value.If<
      HKTU.value.IsAssignable<HKTU.types.ArrayItemInfo<string>, { index: 0 }>,
      HKTU.Compose<
        HKTU.object.Get<HKTU.types.ArrayItemInfo<string>, 'item'>,
        HKTU.string.Capitalize
      >,
      HKTU.object.Get<HKTU.types.ArrayItemInfo<string>, 'item'>
    >
  >,
  HKTU.array.Join<', '>,
  HKTU.string.Append<'!'>
>;

export type Test = Expect<Eq<'Hello, world!', WithPipe>>;
