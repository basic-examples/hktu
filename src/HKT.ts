// invoke HKT-encoded type function
export type HKT<
  OutputFieldName extends string,
  OutputType,
  KindBase extends Record<OutputFieldName, OutputType>,
  Kind extends KindBase,
  Input extends Omit<KindBase, OutputFieldName>,
> = (Kind & Input)[OutputFieldName];
