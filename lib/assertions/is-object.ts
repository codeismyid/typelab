import type {
  IfObject,
  IfObjectArrayLike,
  IfObjectEmpty,
  IfObjectLiteral
} from 'lib/conditions';
import type { _IsTrue } from './__internal';

/**
 * Checks if a given type `T` is an `object` type.
 *
 * @template T The type to be checked.
 * @returns `true` if `T` is an `object` type, `false` otherwise.
 * @example
 * type Valid = IsObject<[]>; // true
 * type Invalid = IsObject<string>; // false
 */
export type IsObject<T> = _IsTrue<IfObject<T, true, false>>;

/**
 * Checks if a given type `T` is an `ObjectLiteral` type.
 *
 * @template T The type to be checked.
 * @returns `true` if `T` is an `ObjectLiteral` type, `false` otherwise.
 * @example
 * type Valid = IsObjectLiteral<{ a: number; b: string }>; // true
 * type Invalid = IsObjectLiteral<string[]>; // false
 */
export type IsObjectLiteral<T> = _IsTrue<IfObjectLiteral<T, true, false>>;

/**
 * Checks if a given type `T` is an `Object Empty` type.
 *
 * @template T The type to be checked.
 * @returns `true` if `T` is an `Object Empty` type, `false` otherwise.
 * @example
 * type Valid = IsObjectEmpty<{ [x: string]: never }>; // true
 * type Invalid = IsObjectEmpty<{ a: string }>; // false
 */
export type IsObjectEmpty<T> = _IsTrue<IfObjectEmpty<T, true, false>>;

/**
 * Checks if a given type `T` is an `Object Array Like` type.
 *
 * @template T The type to be checked.
 * @returns `true` if `T` is an `Object Array Like` type, `false` otherwise.
 * @example
 * type Valid = IsObjectArrayLike<{ 0: number; 1: number }>; // true
 * type Invalid = IsObjectArrayLike<{ 0: number; a: number }>; // false
 */
export type IsObjectArrayLike<T> = _IsTrue<IfObjectArrayLike<T, true, false>>;
