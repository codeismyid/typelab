/**
 * Extracts the keys of an `object` type.
 *
 * @template T The `object` type.
 * @returns The keys of the `object`.
 * @example
 * // Keys is 'a' | 'b'
 * type Keys = KeyOf<{ a: string; b: number }>;
 */
export type KeyOf<T> = T extends T ? keyof T : never;
