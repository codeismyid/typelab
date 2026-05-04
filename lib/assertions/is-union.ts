import type { IfUnion } from 'lib/conditions';

/**
 * Checks if a given type `T` is union type.
 *
 * @template T The type to be checked.
 * @returns `true` if `T` is union type, `false` otherwise.
 * @example
 * type Valid = IsUnion<string | number>; // true
 * type Invalid = IsUnion<string>; // false
 */
export type IsUnion<T> = IfUnion<T, true, false>;
