import type { Detailed } from '.';

/**
 * Recursively applies a shallow transformation to each property of `T`.
 *
 * **Simpler version of {@link Detailed `Detailed`}**
 *
 * @template T The target type.
 * @returns The same `T` type with detailed properties.
 * @example
 * type Obj = Required<{ b?: string } & { c?: string }> & { d: string };
 *
 * // Detail is { b: string; c: string; d: string }
 * type Detail = Mapped<Obj>;
 */
export type Mapped<T> = { [K in keyof T]: T[K] };
