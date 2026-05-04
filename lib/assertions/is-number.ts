import type {
  IfNumber,
  IfNumberDecimal,
  IfNumberInteger,
  IfNumberLiteral
} from 'lib/conditions';
import type { _IsTrue } from './__internal';

/**
 * Checks if a given type `T` is a `number` type.
 *
 * @template T The type to be checked.
 * @returns `true` if `T` is a `number`, `false` otherwise.
 * @example
 * type Valid = IsNumber<number>; // true
 * type Invalid = IsNumber<string>; // false
 */
export type IsNumber<T> = _IsTrue<IfNumber<T, true, false>>;

/**
 * Checks if a given type `T` is a `Number Literal` type.
 *
 * @template T The type to be checked.
 * @returns `true` if `T` is a `Number Literal` type, `false` otherwise.
 * @example
 * type Valid = IsNumberLiteral<11>; // true
 * type Invalid = IsNumberLiteral<number>; // false
 */
export type IsNumberLiteral<T> = _IsTrue<IfNumberLiteral<T, true, false>>;

/**
 * Checks if a given type `T` is a decimal number literal type.
 *
 * @template T The type to be checked.
 * @returns `true` if `T` is a decimal number literal type, `false` otherwise.
 * @example
 * type Valid = IsNumberDecimal<11.1>; // true
 * type Invalid = IsNumberDecimal<11>; // false
 */
export type IsNumberDecimal<T> = _IsTrue<IfNumberDecimal<T, true, false>>;

/**
 * Checks if a given type `T` is a integer number literal type.
 *
 * @template T The type to be checked.
 * @returns `true` if `T` is a integer number literal type, `false` otherwise.
 * @example
 * type Valid = IsNumberInteger<11>; // true
 * type Invalid = IsNumberInteger<11.1>; // false
 */
export type IsNumberInteger<T> = _IsTrue<IfNumberInteger<T, true, false>>;
