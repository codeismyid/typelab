import type { IfString, IfStringLiteral } from 'lib/conditions';
import type { _IsTrue } from './__internal';

/**
 * Checks if a given type `T` is a `string`.
 *
 * @template T The type to be checked.
 * @returns `true` if `T` is a `string`, `false` otherwise.
 * @example
 * type Valid = IsString<string>; // true
 * type Invalid = IsString<number>; // false
 */
export type IsString<T> = _IsTrue<IfString<T, true, false>>;

/**
 * Checks if a given type `T` is a `String Literal` type.
 *
 * @template T The type to be checked.
 * @returns `true` if `T` is a `String Literal` type, `false` otherwise.
 * @example
 * type Valid = IsStringLiteral<'str'>; // true
 * type Invalid = IsStringLiteral<string>; // false
 */
export type IsStringLiteral<T> = _IsTrue<IfStringLiteral<T, true, false>>;
