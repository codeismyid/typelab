/**
 * Toggle the values of a `boolean` type.
 *
 * @template T The `true` or `false` type.
 * @returns The opposite of `T`.
 * @example
 * type Toggled1 = Toggle<true>; // false
 * type Toggled2 = Toggle<false>; // true
 */
export type Toggle<T extends boolean> = T extends true
  ? false
  : T extends false
    ? true
    : never;
