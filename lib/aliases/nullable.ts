/**
 * Type that allows a value to be `T` or `null`.
 *
 * @template T The original type.
 * @returns Union `T` and `null`
 * @example
 * const example: Nullable<string> = null; // valid
 * const example2: Nullable<string> = undefined; // invalid
 */
export type Nullable<T = never> = T | null;
