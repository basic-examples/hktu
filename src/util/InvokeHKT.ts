export type InvokeHKT<
  OutputFieldName extends string,
  KindBase extends Record<OutputFieldName, unknown>,
  Kind extends KindBase,
  Input extends Omit<KindBase, OutputFieldName>,
> = (Kind & {
  [K in `${Extract<
    keyof Input,
    string
  >}_raw`]: Input[K extends `${infer I extends string & keyof Input}_raw`
    ? I
    : never];
})[OutputFieldName];
