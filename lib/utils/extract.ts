import type { Any, Class, Fn, NewableFn, ReadonlyArray } from 'lib/aliases';

/**
 * Extract the value type from an `Array` type.
 *
 * @template T The input type which should be an `Array`.
 * @returns The type of the elements in the `Array`, or never if `T` is not an `Array`.
 * @example
 * type Valid = ExtractArray<number[]>; // number
 * type Invalid = ExtractArray<Promise<number>> // never
 */
export type ExtractArray<T extends ReadonlyArray> =
  T extends ReadonlyArray<infer U> ? U : never;

/**
 * Extract the value type from a `Promise` type.
 *
 * @template T The input type which should be a `Promise`.
 * @returns The type of the return value in the `Promise`, or never if `T` is not a `Promise`.
 * @example
 * type Valid = ExtractPromise<Promise<number>>; // number
 * type Invalid = ExtractPromise<number>> // never
 */
export type ExtractPromise<T extends Promise<Any>> =
  T extends Promise<infer U> ? U : never;

/**
 * Type that extracts the parameters from `Function`, `Newable Function`, or the constructor parameters of a `Class` type.
 *
 * @template T The `Function`, `Newable Function` or `Class` type from which parameters will be extracted.
 * @returns The parameter types of `T`.
 * @example
 * // [string, number]
 * type FunctionParams = ExtractParams<(a: string, b: number) => void>;
 *
 * // [string, number]
 * type NewableParams = ExtractParams<new (a: string, b: number) => { a: string; b: string }>;
 *
 * class MyClass { constructor(public a: string, public b: number) {}}
 * // [string, number]
 * type ClassParams = ExtractParams<typeof MyClass>;
 */
export type ExtractParams<T extends Fn | NewableFn | Class> =
  T extends Fn<infer Params>
    ? Params
    : T extends NewableFn<infer Params>
      ? Params
      : T extends Class<infer Params>
        ? Params
        : never;

/**
 * Type that extracts the return type from `Function`, `Newable Function`, or the instance type of a `Class` type.
 *
 * @template T The `Function`, `Newable Function` or `Class` type from which the return type will be extracted.
 * @returns The return types of `T`.
 * @example
 * // string
 * type FunctionReturn = ExtractReturn<(a: string, b: number) => string>;
 *
 * // { a: string; b: string }
 * type NewableReturn = ExtractReturn<new (a: string, b: number) => { a: string; b: string }>;
 */
export type ExtractReturn<T extends Fn | NewableFn | Class> =
  T extends Fn<Any[], infer Return>
    ? Return
    : T extends NewableFn<Any[], infer Return>
      ? Return
      : T extends Class<Any[], infer Instance>
        ? Instance
        : never;
