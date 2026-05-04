import type { IfAny } from 'lib/conditions';

/**
 * Checks if a given type `T` is an `any` type.
 *
 * @template T The type to be checked.
 * @returns `true` if `T` is an `any` type, `false` otherwise.
 * @example
 * type Valid = IsAny<any>; // true
 * type Invalid = IsAny<string>; // false
 */
export type IsAny<T> = IfAny<T, true, false>;
