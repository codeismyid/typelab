import type { Any } from './any';

/**
 * Extended TypeScript {@link Record `Record`} to define a generic `object` type.
 *
 * @template T The type of the values in the `object`, defaults to 'any'.
 * @returns `Record` type with `PropertyKey` as a key and `T` as a value
 * @example
 * // ObjNumber is { [x: string]: number; [x: number]: number; [x: symbol]: number; }
 * type ObjNumber = ObjectGeneric<number>;
 *
 * const Valid: ObjNumber = { a: 1, b: 2 };
 * const Invalid: ObjNumber = { a: '1', b: '2' }; // Type 'string' is not assignable to type 'number'
 */
export type ObjectGeneric<T = Any> = Record<PropertyKey, T>;

/**
 * Extended TypeScript {@link Record `Record`} to define a empty `object` type.
 *
 * @returns `Record` type with `PropertyKey` as a key and `never` as a value
 * @example
 * // ObjEmpty is { [x: string]: never; [x: number]: never; [x: symbol]: never; }
 * type ObjEmpty = ObjectEmpty;
 *
 * const Valid: ObjEmpty = {};
 * const Invalid: ObjEmpty = { a: 1 } // Type 'number' is not assignable to type 'never'
 */
export type ObjectEmpty = Record<PropertyKey, never>;

/**
 * Extended TypeScript {@link Record `Record`} to define an `object` with `number` as key type.
 *
 * @template T The type of the values in the object, defaults to 'any'.
 * @returns `Record` type with `number` as a key and `T` as a value
 * @example
 * // ObjArrayLike is { [x: number]: string; }
 * type ObjArrayLike = ObjectArrayLike<string>;
 *
 * const Valid: ObjArrayLike = { 0: 'first', 1: 'second' };
 * const Invalid: ObjArrayLike = { 0: 'first', a: 'second' }; // a is invalid key
 */
export type ObjectArrayLike<T = Any> = Record<number, T>;
