export type InvokeHKT<
  OutputFieldName extends string,
  OutputType,
  KindBase extends Record<OutputFieldName, OutputType>,
  Kind extends KindBase,
  Input extends Omit<KindBase, OutputFieldName>,
> = (Kind & {
  [K in `${Extract<keyof Input, string>}_raw`]: Input extends Record<
    K extends `${infer Prefix}_raw` ? Prefix : never,
    infer I
  >
    ? I
    : never;
})[OutputFieldName];
