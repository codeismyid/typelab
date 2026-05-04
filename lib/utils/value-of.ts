import type { KeyOf } from '.';

/**
 * Extracts the values of an `object` type.
 *
 * @template T The `object` type.
 * @returns The values of the `object`.
 * @example
 * // Values is string | number
 * type Values = ValueOf<{ a: string; b: number }>;
 */
export type ValueOf<T> = T[KeyOf<T>];
