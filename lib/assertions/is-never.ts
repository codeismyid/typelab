import type { IfNever } from 'lib/conditions';

/**
 * Checks if a given type `T` is a `never` type.
 *
 * @template T The type to be checked.
 * @returns `true` if `T` is a `never` type, `false` otherwise.
 * @example
 * type Valid = IsNever<never>; // true
 * type Invalid = IsNever<string>; // false
 */
export type IsNever<T> = IfNever<T, true, false>;
