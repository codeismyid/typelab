import type { IfBigInt, IfBigIntLiteral } from 'lib/conditions';
import type { _IsTrue } from './__internal';

/**
 * Checks if a given type `T` is a `bigint`.
 *
 * @template T The type to be checked.
 * @returns `true` if `T` is a `bigint`, `false` otherwise.
 * @example
 * type Valid = IsBigInt<bigint>; // true
 * type Invalid = IsBigInt<number>; // false
 */
export type IsBigInt<T> = _IsTrue<IfBigInt<T, true, false>>;

/**
 * Checks if a given type `T` is a `BigInt Literal` type.
 *
 * @template T The type to be checked.
 * @returns `true` if `T` is a `BigInt Literal` type, `false` otherwise.
 * @example
 * type Valid = IsBigIntLiteral<1n>; // true
 * type Invalid = IsBigIntLiteral<bigint>; // false
 */
export type IsBigIntLiteral<T> = _IsTrue<IfBigIntLiteral<T, true, false>>;
