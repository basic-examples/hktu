import { HKTU } from '../src';

type OriginalString = 'hello42world';

type WithPipe = HKTU.Pipe<
  OriginalString,
  HKTU.string.Split<'42'>,
  HKTU.array.Map<HKTU.string.Capitalize>,
  HKTU.array.Join<', '>,
  HKTU.string.Append<'!'>
>;

type Composition = HKTU.Compose<
  HKTU.string.Split<'42'>,
  HKTU.array.Map<HKTU.string.Capitalize>,
  HKTU.array.Join<', '>,
  HKTU.string.Append<'!'>
>;

type WithComposition = HKTU.Pipe<OriginalString, Composition>;

declare const _unused: WithPipe | WithComposition;
