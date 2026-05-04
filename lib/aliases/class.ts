import type { Any } from './any';
import type { ReadonlyArray } from './array';
import type { ObjectGeneric } from './object';

/**
 * Type that represents a class constructor that takes specified parameters types and returns an instance of a specified type.
 *
 * @template Params The parameters types of the constructor as an array, defaults to `any[]`.
 * @template Instance The type of the instance returned by the constructor, defaults to `any`.
 * @example
 * // C is a class
 * // with constructor(id: number, name: string)
 * // and {id: number, name: string} as instance and prototype
 * type C = Class<[id: number, name: string], {id: number, name: string}>;
 */
export type Class<
  Params extends ReadonlyArray<Any> = Any[],
  Instance extends ObjectGeneric = Any
> = {
  new (...param: Params): Instance;
  prototype: Instance;
};
