/**
 * Type that allows a value to be `T`, `null`, or `undefined`.
 *
 * @template T The original type, defaults to `never`.
 * @returns Union `T`, `null, and `undefined`
 * @example
 * const example: Nullish = null; // valid
 * const example2: Nullish = undefined; // valid
 */
export type Nullish<T = never> = T | null | undefined;
