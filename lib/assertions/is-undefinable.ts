import type { IfUndefinable } from 'lib/conditions';

/**
 * Checks if a given type `T` has `undefined` type.
 *
 * @template T The type to be checked.
 * @returns `true` if `T` has `undefined` type, `false` otherwise.
 * @example
 * type Valid = IsUndefinable<string | undefined>; // true
 * type Invalid = IsUndefinable<string>; // false
 */
export type IsUndefinable<T> = IfUndefinable<T, true, false>;
