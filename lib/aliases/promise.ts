import type { Any } from './any';

/**
 * Built-in {@link Promise `Promise`} with default type.
 *
 * @template T The type when operation complete, defaults to `any`.
 * @example
 * // AsyncValue is Promise<string>
 * type AsyncValue = Async<string>;
 */
export type Async<T = Any> = Promise<T>;
