/**
 * Type that represents any primitive value.
 *
 * This includes `boolean`, `string`, `number`, `bigint`, `symbol`, `null`, and `undefined`.
 *
 * @example
 * const value1: Primitive = ""; // valid
 * const value2: Primitive = {}; // invalid
 */
export type Primitive =
  | boolean
  | string
  | number
  | bigint
  | symbol
  | null
  | undefined;
