import type { IsObjectLiteral } from 'lib/assertions';

/**
 * Recursively applies a deep transformation to each property of `T`, only if `T` is `ObjectLiteral`.
 *
 * @template T The target type.
 * @returns The same `T` type with detailed properties.
 * @example
 * type ComplexObj = Required<{ b?: string } & { c?: string }> & { d: string };
 * type Obj = { a: string; nested: ComplexObj };
 *
 * // Detail is { a: string; nested: { b: string; c: string; d: string }; }
 * type Detail = Detailed<Obj>;
 */
export type Detailed<T> = T extends T
  ? IsObjectLiteral<T> extends true
    ? {
        [K in keyof T]: Detailed<T[K]>;
      }
    : T
  : never;
