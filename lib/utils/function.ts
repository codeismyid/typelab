import type { Any, Fn, ReadonlyArray } from 'lib/aliases';
import type { IsNever } from 'lib/assertions';
import type {
  ArrayAssign,
  ArrayMerge,
  ArrayOverwrite,
  ExtractParams,
  ExtractPromise,
  ExtractReturn,
  ObjectAssign,
  ObjectMerge,
  ObjectOverwrite
} from '.';
import type { _LookupType } from './__internal';

/**
 * Assign the parameter and return types of `Source` into `Target`.
 *
 * Use {@link ArrayAssign `ArrayAssign`} for the parameter type and {@link ObjectAssign `ObjectAssign`} for the return type.
 *
 * - If `Target` or `Source` is not `Function`, it returns `never`.
 *
 * @template Target The target `Function` type.
 * @template Source The source `Function` type.
 * @returns A new `Function` combining parameter and return types from both `Target` and `Source`.
 * @example
 * // (param_0: number, param_1: string) => { a: number; b: string }
 * type Result = FunctionAssign<(...param: [string, string]) => { a: string; b: string }, (...param: [number]) => { a: number }>
 */
export type FunctionAssign<Target extends Fn, Source extends Fn> =
  Target extends Fn<infer TargetParams, infer TargetReturn>
    ? Source extends Fn<infer SourceParams, infer SourceReturn>
      ? (
          ...param: ArrayAssign<TargetParams, SourceParams>
        ) => ObjectAssign<TargetReturn, SourceReturn>
      : never
    : never;

/**
 * Alias for {@link FunctionAssign `FunctionAssign`}.
 */
export type FnAssign<Target extends Fn, Source extends Fn> = FunctionAssign<
  Target,
  Source
>;

/**
 * Overwrite the parameter and return types of `Target` with parameter and return types of `Source`.
 *
 * Use {@link ArrayOverwrite `ArrayOverwrite`} for the parameter type and {@link ObjectOverwrite `ObjectOverwrite`} for the return type.
 *
 * - If `Target` or `Source` is not `Function`, it returns `never`.
 *
 * @template Target The target `Function` type.
 * @template Source The source `Function` type.
 * @returns A new `Function` with overwritten parameter and return types.
 * @example
 * type Obj1 = { a: string; b: { a: string } };
 * type Obj2 = { a: number; b: { b: number } };
 *
 * // (param_0: number, param_1: string) => { a: number; b: { b: number; }; }
 * type Shallow = FunctionOverwrite<(...param: [string, string]) => Obj1, (...param: [number]) => Obj2, 'shallow'>;
 *
 * // (param_0: number, param_1: string) => { a: number; b: { a: string, b: number; }; }
 * type Deep = FunctionOverwrite<(...param: [string, string]) => Obj1, (...param: [number]) => Obj2, 'deep'>;
 */
export type FunctionOverwrite<
  Target extends Fn,
  Source extends Fn,
  Z extends _LookupType = 'shallow'
> = [Target, Source] extends [
  Fn<infer TargetParams, infer TargetReturn>,
  Fn<infer SourceParams, infer SourceReturn>
]
  ? (
      ...param: IsNever<SourceParams> extends true
        ? []
        : ArrayOverwrite<TargetParams, SourceParams, Z>
    ) => IsNever<SourceReturn> extends true
      ? never
      : ObjectOverwrite<TargetReturn, SourceReturn, Z>
  : never;

/**
 * Alias for {@link FunctionOverwrite `FunctionOverwrite`}.
 */
export type FnOverwrite<
  Target extends Fn,
  Source extends Fn,
  Z extends _LookupType = 'shallow'
> = FunctionOverwrite<Target, Source, Z>;

/**
 * Merges the parameter and return types of `Source` into `Target`.
 *
 * Use {@link ArrayMerge `ArrayMerge`} for the parameter type and {@link ObjectMerge `ObjectMerge`} for the return type.
 *
 * - If `Target` or `Source` is not `Function`, it returns `never`.
 *
 * @template Target The target `Function`.
 * @template Source The source `Function` to merge from.
 * @returns A new `Function` combining parameter and return types from both `Target` and `Source`.
 * @example
 * type Obj1 = { a: string; b: { a: string } };
 * type Obj2 = { a: number; b: { b: number } };
 *
 * // (param_0: string | number, param_1: string) => { a: string | number; b: { a: string; } | { b: number; }; }
 * type Shallow = FunctionMerge<(...param: [string, string]) => Obj1, (...param: [number]) => Obj2, 'shallow'>;
 *
 * // (param_0: string | number, param_1: string) => { a: string | number; b: { a: string; b: number; }; }
 * type Deep = FunctionMerge<(...param: [string, string]) => Obj1, (...param: [number]) => Obj2, 'deep'>;
 */
export type FunctionMerge<
  Target extends Fn,
  Source extends Fn,
  Z extends _LookupType = 'shallow'
> = [Target, Source] extends [
  Fn<infer TargetParams, infer TargetReturn>,
  Fn<infer SourceParams, infer SourceReturn>
]
  ? (
      ...param: ArrayMerge<TargetParams, SourceParams, Z>
    ) => ObjectMerge<TargetReturn, SourceReturn, Z>
  : never;

/**
 * Alias for {@link FunctionMerge `FunctionMerge`}.
 */
export type FnMerge<
  Target extends Fn,
  Source extends Fn,
  Z extends _LookupType = 'shallow'
> = FunctionMerge<Target, Source, Z>;

/**
 * Converts a `Function` type that returns a `Promise` instead of the original return type.
 *
 * If the `Function` takes a callback (e.g., `(error, result) => void`), it converts the `Function`
 * to return a `Promise` with the callback result. Otherwise, it wraps the return type in a `Promise`.
 *
 * @template T The `Function` type to convert.
 * @returns A new `Function` type that returns a `Promise`.
 * @example
 * // Callback-style function:
 * // (a: string) => Promise<string>
 * type Promisified = FunctionPromisify<(a: string, callback: (error: Error, result: string) => void) => void>;
 *
 * // Regular function:
 * // (a: string) => Promise<string>
 * type PromisifiedFn = FunctionPromisify<(a: string) => string>;
 */
export type FunctionPromisify<T extends Fn> = [
  ExtractParams<T>,
  ExtractReturn<T>
] extends [infer Params extends ReadonlyArray, infer Return]
  ? [Params, Return] extends [
      [...infer K, (error: Any, result: infer R) => Any],
      Any
    ]
    ? (...param: K) => Promise<R>
    : (...param: Params) => Promise<Return>
  : never;

/**
 * Alias for {@link FunctionPromisify `FunctionPromisify`}.
 */
export type FnPromisify<T extends Fn> = FunctionPromisify<T>;

/**
 * Converts an `Async Function` type into a `Callback-style Function`.
 *
 * @template T The `Function` type that returns a `Promise`.
 * @returns A new `Function` type that accepts a callback for error handling and result.
 * @example
 * // (a: string, callback: (error: unknown, result: string) => void) => void
 * type Callbackified = FunctionCallbackify<(a: string) => Promise<string>>;
 */
export type FunctionCallbackify<
  T extends Fn<Any, Promise<Any>>,
  ErrorType = unknown
> = (
  ...param: [
    ...ExtractParams<T>,
    callback: (
      error: ErrorType | null,
      result: ExtractPromise<ExtractReturn<T>>
    ) => void
  ]
) => void;

/**
 * Alias for {@link FunctionCallbackify `FunctionCallbackify`}.
 */
export type FnCallbackify<
  T extends Fn,
  ErrorType = unknown
> = FunctionCallbackify<T, ErrorType>;
