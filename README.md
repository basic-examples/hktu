# hktu - HKT Utils

Collection of predefined transformers and Higher Kinded Types, utils

## Examples

```ts
type OriginalString = 'hello42world';

type WithPipe = Pipe<
  OriginalString,
  Split<'42'>,
  ArrayMap<ToCapitalized>,
  Join<', '>,
  Append<'!'>
>;
// Hello, World!

type Composition = Compose<
  Split<'42'>,
  ArrayMap<ToCapitalized>,
  Join<', '>,
  Append<'!'>
>;

type WithComposition = Pipe<OriginalString, Composition>;
// Hello, World!
```
