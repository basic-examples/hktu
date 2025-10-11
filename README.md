# hktu - HKT Utils

Collection of predefined transformers and Higher Kinded Types, utils

## Examples

```ts
import { HKTU } from 'hktu';

// "Hello, world!"
type WithPipe = HKTU.Pipe<
  'hello42world',
  HKTU.string.Split<'42'>,
  HKTU.array.MapEx<
    HKTU.If<
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
```
