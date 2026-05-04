/**
 * Type that allows a value to be `T` or `undefined`.
 *
 * @template T The original type.
 * @returns Union `T` and `undefined`
 * @example
 * const example: Undefinable<string> = undefined; // valid
 * const example2: Undefinable<string> = null; // invalid
 */
export type Undefinable<T = never> = T | undefined;
