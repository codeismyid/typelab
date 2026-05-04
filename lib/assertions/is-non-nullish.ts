import type { IfNonNullish } from 'lib/conditions';

/**
 * Checks if a given type `T` is a `{}` type.
 *
 * @template T The type to be checked.
 * @returns `true` if `T` is a `{}` type, `false` otherwise.
 * @example
 * type Valid = IsNonNullish<{}>; // true
 * type Invalid = IsNonNullish<string>; // false
 */
export type IsNonNullish<T> = IfNonNullish<T, true, false>;
