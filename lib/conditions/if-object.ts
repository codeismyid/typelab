import type {
  Async,
  Fn,
  NewableFn,
  ObjectEmpty,
  ReadonlyArray
} from 'lib/aliases';
import type { _IfNotAnyOrNever } from './__internal';

/**
 * Resolves to `Then` if the type `T` is `object`, otherwise resolves to `Else`.
 *
 * @template T The type to be checked.
 * @template Then The type to return if `T` is `object`.
 * @template Else The type to return if `T` is not `object`. Defaults to `never`.
 * @returns `Then` if `T` is `object`, `Else` otherwise.
 * @example
 * type Yes = IfObject<object, 'yes', 'no'>; // 'yes'
 * type No = IfObject<string, 'yes', 'no'>; // 'no'
 * type YesOrNo = IfObject<object | string, 'yes', 'no'>; // 'yes' | 'no'
 */
export type IfObject<T, Then, Else = never> = _IfNotAnyOrNever<
  T,
  T extends object ? Then : Else,
  Else
>;

/**
 * Resolves to `Then` if the type `T` is object literal, otherwise resolves to `Else`.
 *
 * @template T The type to be checked.
 * @template Then The type to return if `T` is object literal.
 * @template Else The type to return if `T` is not object literal. Defaults to `never`.
 * @returns `Then` if `T` is object literal, `Else` otherwise.
 * @example
 * type Yes = IfObjectLiteral<{ a: 1 }, 'yes', 'no'>; // 'yes'
 * type No = IfObjectLiteral<object, 'yes', 'no'>; // 'no'
 * type YesOrNo = IfObjectLiteral<{ a: 1 } | object, 'yes', 'no'>; // 'yes' | 'no'
 */
export type IfObjectLiteral<T, Then, Else = never> = _IfNotAnyOrNever<
  T,
  T extends object
    ? T extends ReadonlyArray
      ? Else
      : T extends Fn
        ? Else
        : T extends NewableFn
          ? Else
          : T extends Async
            ? Else
            : keyof T extends never
              ? Else
              : Then
    : Else,
  Else
>;

/**
 * Resolves to `Then` if the type `T` is object empty, otherwise resolves to `Else`.
 *
 * @template T The type to be checked.
 * @template Then The type to return if `T` is object empty.
 * @template Else The type to return if `T` is not object empty. Defaults to `never`.
 * @returns `Then` if `T` is object empty, `Else` otherwise.
 * @example
 * // 'yes'
 * type Yes = IfObjectEmpty<{ [x: string]: never; }, 'yes', 'no'>;
 *
 * // 'no'
 * type No = IfObjectEmpty<{ a: 1 }, 'yes', 'no'>;
 *
 * // 'yes' | 'no'
 * type YesOrNo = IfObjectEmpty<{ [x: string]: never; } | { a: 1 }, 'yes', 'no'>;
 */
export type IfObjectEmpty<T, Then, Else = never> = _IfNotAnyOrNever<
  T,
  T extends ObjectEmpty ? (keyof T extends never ? Else : Then) : Else,
  Else
>;

/**
 * Resolves to `Then` if the type `T` is array-like object, otherwise resolves to `Else`.
 *
 * @template T The type to be checked.
 * @template Then The type to return if `T` is array-like object.
 * @template Else The type to return if `T` is not array-like object. Defaults to `never`.
 * @returns `Then` if `T` is array-like object, `Else` otherwise.
 * @example
 * // 'yes'
 * type Yes = IfObjectArrayLike<{ 0: number; 1: number; }, 'yes', 'no'>;
 *
 * // 'no'
 * type No = IfObjectArrayLike<{ 0: number; id: number; }, 'yes', 'no'>;
 *
 * // 'yes' | 'no'
 * type YesOrNo = IfObjectArrayLike<{ 0: number; 1: number; } | { 0: number; id: number; }, 'yes', 'no'>;
 */
export type IfObjectArrayLike<T, Then, Else = never> = IfObjectLiteral<
  T,
  T extends T
    ? Exclude<
        keyof T extends infer U extends keyof T
          ? U extends number
            ? U
            : U extends `${infer V extends number}`
              ? V
              : U extends 'length'
                ? T[U] extends number
                  ? never
                  : U
                : U
          : never,
        number
      > extends never
      ? Then
      : Else
    : never,
  Else
>;
