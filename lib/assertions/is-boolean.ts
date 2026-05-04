import type { Falsy } from 'lib/aliases';
import type {
  IfBoolean,
  IfFalse,
  IfFalsy,
  IfTrue,
  IfTruthy
} from 'lib/conditions';
import type { _IsTrue } from './__internal';

/**
 * Checks if a given type `T` is a `boolean`.
 *
 * @template T The type to be checked.
 * @returns `true` if `T` is a `boolean`, `false` otherwise.
 * @example
 * type Valid = IsBoolean<boolean>; // true
 * type Invalid = IsBoolean<string>; // false
 */
export type IsBoolean<T> = _IsTrue<IfBoolean<T, true, false>>;

/**
 * Checks if a given type `T` is the literal `false`.
 *
 * @template T The type to be checked.
 * @returns `true` if `T` is the literal `false`, `false` otherwise.
 * @example
 * type Valid = IsFalse<false>; // true
 * type Invalid = IsFalse<boolean>; // false
 */
export type IsFalse<T> = _IsTrue<IfFalse<T, true, false>>;

/**
 * Checks if a given type `T` is {@link Falsy `Falsy`}.
 *
 * @template T The type to be checked.
 * @returns `true` if `T` is {@link Falsy `Falsy`}, `false` otherwise.
 * @example
 * type Valid = IsFalsy<false | '' | 0 | 0n | null | undefined | void>; // true
 * type Invalid = IsFalsy<0 | 1>; // false
 */
export type IsFalsy<T> = _IsTrue<IfFalsy<T, true, false>>;

/**
 * Checks if a given type `T` is the literal `true`.
 *
 * @template T The type to be checked.
 * @returns `true` if `T` is the literal `true`, `false` otherwise.
 * @example
 * type Valid = IsTrue<true>;    // true
 * type Invalid = IsTrue<boolean>; // false
 */
export type IsTrue<T> = _IsTrue<IfTrue<T, true, false>>;

/**
 * Checks if a given type `T` is not {@link Falsy `Falsy`} or `never`.
 *
 * @template T The type to be checked.
 * @returns `true` if `T` is not {@link Falsy `Falsy`} or never, `false` otherwise.
 * @example
 * type Valid = IsTruthy<0 | 1>; // true
 * type Invalid = IsTruthy<0 | 1>; // false
 */
export type IsTruthy<T> = _IsTrue<IfTruthy<T, true, false>>;
