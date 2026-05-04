import type { Any } from './any';
/**
 * Type that represents an array with elements of type `T`.
 *
 * @template T The type of the elements in the array, defaults to `any`.
 * @example
 * // MyArray is string[]
 * type MyArray = Array<string>;
 */
export type Array<T = Any> = T[];

/**
 * Alias for {@link Array `Array`}.
 */
export type Arr<T = Any> = Array<T>;

/**
 * Alias for {@link Array `Array`}.
 */
export type List<T = Any> = Array<T>;

/**
 * Alias for {@link Array `Array`}.
 */
export type WritableArray<T = Any> = Array<T>;

/**
 * Alias for {@link Array `Array`}.
 */
export type WritableArr<T = Any> = Array<T>;

/**
 * Alias for {@link Array `Array`}.
 */
export type WritableList<T = Any> = Array<T>;

/**
 * Type that represents a read-only array with elements of type `T`.
 *
 * @template T The type of the elements in the read-only array, defaults to `any`.
 * @example
 * // MyReadonlyArray is readonly string[]
 * type MyReadonlyArray = ReadonlyArray<string>;
 */
export type ReadonlyArray<T = Any> = readonly T[];

/**
 * Alias for {@link ReadonlyArray `ReadonlyArray`}.
 */
export type ReadonlyArr<T = Any> = ReadonlyArray<T>;

/**
 * Alias for {@link ReadonlyArray `ReadonlyArray`}.
 */
export type ReadonlyList<T = Any> = ReadonlyArray<T>;

/**
 * Type that represents a tuple, which is a fixed-length array of elements of type `T`.
 *
 * @template T The type of the elements in the tuple, defaults to `any[]`.
 * @example
 * // MyTuple is [number, string]
 * type MyTuple = Tuple<[number, string]>;
 */
export type Tuple<T extends List = Any[]> = [...T];

/**
 * Alias for {@link Tuple `Tuple`}.
 */
export type WritableTuple<T extends List = Any[]> = [...T];

/**
 * Type that represents a read-only tuple, which is a fixed-length, immutable array of elements of type `T`.
 *
 * @template T The type of the elements in the read-only tuple, defaults to `any[]`.
 * @example
 * // MyReadonlyTuple is readonly [number, string]
 * type MyReadonlyTuple = ReadonlyTuple<[number, string]>;
 */
export type ReadonlyTuple<T extends ReadonlyList = Any[]> = readonly [...T];
