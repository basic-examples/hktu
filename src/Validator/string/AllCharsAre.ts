import { Validator } from '..';
import { Validate } from '../Validate';

export interface AllCharsAre<K extends Validator<string>>
  extends Validator<string> {
  validationResult: AllCharsAreRaw<K, this['input']>;
}

export type AllCharsAreRaw<
  K extends Validator<string>,
  S extends string,
> = S extends `${infer FirstLetter extends string}${infer Rest extends string}`
  ? Validate<string, K, FirstLetter> extends true
    ? AllCharsAreRaw<K, Rest>
    : false
  : true;
