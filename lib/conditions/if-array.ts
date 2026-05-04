import type { ReadonlyArray, WritableArray } from 'lib/aliases';
import type { _IfNotAnyOrNever } from './__internal';

/**
 * Resolves to `Then` if the type `T` is an array (readonly or writable), otherwise resolves to `Else`.
 *
 * @template T The type to be checked.
 * @template Then The type to return if `T` is an array.
 * @template Else The type to return if `T` is not an array. Defaults to `never`.
 * @returns `Then` if `T` is an array, `Else` otherwise.
 * @example
 * type Yes = IfArray<string[], 'yes', 'no'>; // 'yes'
 * type No = IfArray<string, 'yes', 'no'>; // 'no'
 * type YesOrNo = IfArray<string[] | string, 'yes', 'no'>; // 'yes' | 'no'
 */
export type IfArray<T, Then, Else = never> = _IfNotAnyOrNever<
  T,
  T extends ReadonlyArray ? Then : Else,
  Else
>;

/**
 * Resolves to `Then` if the type `T` is a writable array, otherwise resolves to `Else`.
 *
 * @template T The type to be checked.
 * @template Then The type to return if `T` is a writable array.
 * @template Else The type to return if `T` is not a writable array. Defaults to `never`.
 * @returns `Then` if `T` is a writable array, `Else` otherwise.
 * @example
 * // 'yes'
 * type Yes = IfArrayWritable<string[], 'yes', 'no'>;
 *
 * // 'no'
 * type No = IfArrayWritable<readonly string[], 'yes', 'no'>;
 *
 * // 'yes' | 'no'
 * type YesOrNo = IfArrayWritable<string[] | readonly string[], 'yes', 'no'>;
 */
export type IfArrayWritable<T, Then, Else = never> = _IfNotAnyOrNever<
  T,
  T extends WritableArray ? Then : Else,
  Else
>;

/**
 * Resolves to `Then` if the type `T` is a readonly array, otherwise resolves to `Else`.
 *
 * @template T The type to be checked.
 * @template Then The type to return if `T` is a readonly array.
 * @template Else The type to return if `T` is not a readonly array. Defaults to `never`.
 * @returns `Then` if `T` is a readonly array, `Else` otherwise.
 * @example
 * // 'yes'
 * type Yes = IfArrayReadonly<readonly string[], 'yes', 'no'>;
 *
 * // 'no'
 * type No = IfArrayReadonly<string[], 'yes', 'no'>;
 *
 * // 'yes' | 'no'
 * type YesOrNo = IfArrayReadonly<readonly string[] | string[], 'yes', 'no'>;
 */
export type IfArrayReadonly<T, Then, Else = never> = _IfNotAnyOrNever<
  T,
  T extends ReadonlyArray ? (T extends WritableArray ? Else : Then) : Else,
  Else
>;

/**
 * Resolves to `Then` if the type `T` is a tuple (readonly or writable), otherwise resolves to `Else`.
 *
 * @template T The type to be checked.
 * @template Then The type to return if `T` is a tuple.
 * @template Else The type to return if `T` is not a tuple. Defaults to `never`.
 * @returns `Then` if `T` is a tuple, `Else` otherwise.
 * @example
 * type Yes = IfTuple<[string], 'yes', 'no'>; // 'yes'
 * type No = IfTuple<string[], 'yes', 'no'>; // 'no'
 * type YesOrNo = IfTuple<[string] | string[], 'yes', 'no'>; // 'yes' | 'no'
 */
export type IfTuple<T, Then, Else = never> = _IfNotAnyOrNever<
  T,
  T extends ReadonlyArray ? (number extends T['length'] ? Else : Then) : Else,
  Else
>;

/**
 * Resolves to `Then` if the type `T` is a writable tuple, otherwise resolves to `Else`.
 *
 * @template T The type to be checked.
 * @template Then The type to return if `T` is a writable tuple.
 * @template Else The type to return if `T` is not a writable tuple. Defaults to `never`.
 * @returns `Then` if `T` is a writable tuple, `Else` otherwise.
 * @example
 * // 'yes'
 * type Yes = IfTupleWritable<[string], 'yes', 'no'>;
 *
 * // 'no'
 * type No = IfTupleWritable<readonly [string], 'yes', 'no'>;
 *
 * // 'yes' | 'no'
 * type YesOrNo = IfTupleWritable<[string] | readonly [string], 'yes', 'no'>;
 */
export type IfTupleWritable<T, Then, Else = never> = _IfNotAnyOrNever<
  T,
  T extends WritableArray ? (number extends T['length'] ? Else : Then) : Else,
  Else
>;

/**
 * Resolves to `Then` if the type `T` is a readonly tuple, otherwise resolves to `Else`.
 *
 * @template T The type to be checked.
 * @template Then The type to return if `T` is a readonly tuple.
 * @template Else The type to return if `T` is not a readonly tuple. Defaults to `never`.
 * @returns `Then` if `T` is a readonly tuple, `Else` otherwise.
 * @example
 * // 'yes'
 * type Yes = IfTupleReadonly<readonly [string], 'yes', 'no'>;
 *
 * // 'no'
 * type No = IfTupleReadonly<[string], 'yes', 'no'>;
 *
 * // 'yes' | 'no'
 * type YesOrNo = IfTupleReadonly<readonly [string] | [string], 'yes', 'no'>;
 */
export type IfTupleReadonly<T, Then, Else = never> = _IfNotAnyOrNever<
  T,
  T extends ReadonlyArray
    ? number extends T['length']
      ? Else
      : T extends WritableArray
        ? Else
        : Then
    : Else,
  Else
>;
