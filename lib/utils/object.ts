import type { Primitive, ReadonlyArray } from 'lib/aliases';
import type {
  IsArray,
  IsEqual,
  IsNever,
  IsNonNullish,
  IsObjectEmpty,
  IsObjectLiteral,
  IsOptionalProperty,
  IsRequiredProperty
} from 'lib/assertions';
import type { Detailed, ExcludeUndefined, PropValue } from '.';
import type {
  _Lookup,
  _LookupType,
  _ObjectAssignArray,
  _ObjectAssignObject,
  _ObjectAssignPreCheck,
  _ObjectAssignPrimitive,
  _ObjectOverwrite,
  _ObjectPartial,
  _ObjectRequired,
  _ObjectToTuple,
  _ObjectUnionizeDeep
} from './__internal';

/**
 * Extended TypeScript {@link Pick `Pick`} to pick `K` from `T`.
 *
 * @template T The target type.
 * @template K The keys of `T` that will be picked.
 * @returns Set of properties whose keys are in the union K.
 * @example
 * type Obj = { a: string; b: string };
 *
 * // { a: string; }
 * type Picked = ObjectPick<Obj, 'a'>;
 */
export type ObjectPick<T, K extends keyof T, BailType = never> = {
  [Key in K as PropValue<T, Key> extends never ? never : Key]: PropValue<
    T,
    Key
  >;
} extends infer Result
  ? IsNonNullish<Result> extends true
    ? BailType
    : Result
  : never;

/**
 * Extended TypeScript {@link Required `Required`} to enforce specific properties as required.
 *
 * @template T The original `object` type.
 * @template Key The keys of `T` that should be required.
 * @template IncludeUndefined Include undefined type from `T[Key]`, defaults to `false`.
 * @returns A type with the specified keys of `T` set as required.
 * @example
 * type Obj = { a?: string; b?: string };
 *
 * // { a: string; b?: string }
 * type RequiredObj = ObjectRequired<Obj, 'a'>;
 */
export type ObjectRequired<
  T,
  Key extends keyof T,
  IncludeUndefined extends boolean = false
> = _ObjectRequired<T, Key, IncludeUndefined>;

/**
 * Extended TypeScript {@link Partial `Partial`} to make specific properties optional.
 *
 * @template T The original `object` type.
 * @template K The keys of `T` that should be optional.
 * @returns A type with the specified keys of `T` set as optional.
 * @example
 * type Obj = { a: string; b: string };
 *
 * // { a?: string; b: string }
 * type PartialObj = ObjectPartial<Obj, 'a'>;
 */
export type ObjectPartial<T, K extends keyof T> = _ObjectPartial<T, K>;

/**
 * Get the required keys from `T` type.
 *
 * @template T The `object` type to extract required keys from.
 * @returns The keys of `T` that are required.
 * @example
 * type Obj = { a: number; b: string | undefined; c?: boolean };
 * type RequiredKeys = ObjectRequiredKeys<Obj>; // "a" | "b"
 */
export type ObjectRequiredKeys<T> = T extends T
  ? IsObjectLiteral<T> extends true
    ? keyof {
        [K in keyof T as IsRequiredProperty<T, K> extends true
          ? K
          : never]-?: true;
      }
    : never
  : never;

/**
 * Get the optional keys from `T` type.
 *
 * @template T The `object` type to extract optional keys from.
 * @returns The keys of `T` that are optional.
 * @example
 * type Obj = { a: number; b: string | undefined; c?: boolean };
 * type OptionalKeys = ObjectOptionalKeys<Obj>; // "c"
 */
export type ObjectOptionalKeys<T> = T extends T
  ? IsObjectLiteral<T> extends true
    ? keyof {
        [K in keyof T as IsOptionalProperty<T, K> extends true
          ? K
          : never]-?: true;
      }
    : never
  : never;

/**
 * Get the optional properties from `T` type.
 *
 * This type will lookup all nested objects (if `Z` is `'deep'`).
 *
 * @template T The `object` type where optional properties will be identified.
 * @template Z Defines the lookup type, which can be `'deep'` or `'shallow'`, defaults to `'shallow'`.
 * @returns A type with only the optional properties from `T`, optionally nested based on `Z`.
 * @example
 * type Obj = { a: string | undefined; b?: string; c?: { d: string; e?: string } };
 *
 * // { b?: string; c?: { d: string; e?: string; }; }
 * type Shallow = ObjectOmitRequired<Obj, 'shallow'>;
 *
 * // { b?: string; c?: { e?: string; }; }
 * type Deep = ObjectOmitRequired<Obj, 'deep'>;
 */
export type ObjectOmitRequired<T, Z extends _LookupType = 'shallow'> =
  IsObjectLiteral<T> extends true
    ? {
        [K in keyof T as IsOptionalProperty<T, K> extends true
          ? K
          : never]?: _Lookup<
          Z,
          {
            /** Shallow Result */
            shallow: T[K];
            /** Deep Result */
            deep: ObjectOmitRequired<ExcludeUndefined<T[K]>>;
          }
        >;
      }
    : T;

/**
 * Get the required properties from `T` type.
 *
 * This type will lookup all nested objects (if `Z` is `'deep'`).
 *
 * @template T The `object` type where required properties will be identified.
 * @template Z Defines the lookup type, which can be `'deep'` or `'shallow'`, defaults to `'shallow'`.
 * @returns A type with only the required properties from `T`, optionally nested based on `Z`.
 * @example
 * type Obj = { a: string | undefined; b?: string; c: { d: string, e?: string } };
 *
 * // { a: string | undefined; c: { d: string; e?: string } }
 * type Shallow = ObjectOmitOptional<Obj, 'shallow'>;
 *
 * // { a: string | undefined; c: { d: string; }}
 * type Deep = ObjectOmitOptional<Obj, 'deep'>;
 */
export type ObjectOmitOptional<T, Z extends _LookupType = 'shallow'> =
  IsObjectLiteral<T> extends true
    ? {
        [K in keyof T as IsRequiredProperty<T, K> extends true
          ? K
          : never]-?: _Lookup<
          Z,
          {
            /** Shallow Result */
            shallow: T[K];
            /** Deep Result */
            deep: ObjectOmitOptional<T[K]>;
          }
        >;
      }
    : T;

/**
 * Extended TypeScript {@link Readonly `Readonly`} to enforce specific properties as readonly.
 *
 * @template T The original `object` type.
 * @template K The keys of `T` that should be readonly.
 * @returns A type with the specified keys of `T` set as readonly.
 * @example
 * type Obj = { a: string; b: string };
 *
 * // { readonly a: string; b: string }
 * type ReadonlyObj = ObjectReadonly<Obj, 'a'>;
 */
export type ObjectReadonly<T, K extends keyof T> =
  IsObjectLiteral<T> extends true
    ? Detailed<
        { +readonly [Key in K]: T[K] } & {
          [Key in keyof T as Key extends K ? never : Key]: T[Key];
        }
      >
    : never;

/**
 * Enforce specific properties as writable.
 *
 * @template T The original `object` type.
 * @template K The keys of `T` that should be writable.
 * @returns A type with the specified keys of `T` set as writable.
 * @example
 * type Obj = { readonly a: string; b: string };
 *
 * // WritableObj is { a: string; b: string; }
 * type WritableObj = ObjectWritable<Obj, 'a'>;
 */
export type ObjectWritable<T, K extends keyof T> =
  IsObjectLiteral<T> extends true
    ? Detailed<
        { -readonly [Key in K]: T[K] } & {
          [Key in keyof T as Key extends K ? never : Key]: T[Key];
        }
      >
    : never;

/**
 * Get all of the paths from `T` as a `string` union.
 *
 * @template T The `object` type to extract paths from.
 * @returns A `string` union of paths in the `object`.
 * @example
 * type Obj = { a: { b: number }; c: string };
 * type Paths = ObjectPath<Obj>; // "a" | "a.b" | "c"
 */
export type ObjectPath<T> =
  IsObjectLiteral<T> extends true
    ? {
        [K in keyof T]-?: K extends Exclude<PropertyKey, symbol>
          ? `${K}` | `${K}.${ObjectPath<T[K]>}`
          : never;
      }[keyof T]
    : never;

/**
 * Get the type of a property based on a given path.
 *
 * @template T The `object` type to extract value from.
 * @template K The path `string` to navigate through the `object`.
 * @returns The type of the property at the specified path.
 * @example
 * type Obj = { a: { b: number }; c: string };
 * type ValueType = ObjectPathValue<Obj, 'a.b'>; // number
 */
export type ObjectPathValue<T, K extends ObjectPath<T> | ''> = K extends ''
  ? T
  : K extends `${infer Key}.${infer Rest}`
    ? Key extends keyof T
      ? Rest extends ObjectPath<T[Key]>
        ? ObjectPathValue<T[Key], Rest>
        : ObjectPath<T[Key]>
      : never
    : K extends keyof T
      ? T[K]
      : K extends `${infer Key extends number}`
        ? Key extends keyof T
          ? T[Key]
          : never
        : never;

/**
 * Converts an `object` into a `Tuple` of its values.
 *
 * - If `IncludeNonIndex` is `false`, only properties with numeric keys are included.
 * - If `IncludeNonIndex` is `true`, all properties are included.
 *
 * ⚠️ **Does not guarantee correct order**, if `IncludeNonIndex` is `true`.
 *
 * @template T The `object` type to convert.
 * @template IncludeNonIndex A flag that determines whether to include non-array index or not. defaults to `false`.
 * @template HoleType Safety type, if there is a hole(s) in result, defaults to `unknown`. Ignored if `OmitHole` is `true`.
 * @template OmitHole Each element with `never` type will be omitted, defaults to `false`.
 * @returns A `Tuple` type, if `T` is `ObjectLiteral` or `Tuple`, never otherwise.
 * @example
 * type Obj1 = { 0: string; 1: number; 2: boolean };
 * // [string, number, boolean]
 * type TupleType1 = ObjectToTuple<Obj1>;
 *
 * type Obj2 = { a: 'a'; b: 'b'; c: 'c' };
 * // ['a', 'b, 'c']
 * type TupleType2 = ObjectToTuple<Obj2, true>;
 */
export type ObjectToTuple<
  T,
  IncludeNonIndex extends boolean = false,
  HoleType = unknown,
  OmitHole extends boolean = false
> =
  IsArray<T> extends true
    ? T
    : IsObjectLiteral<T> extends true
      ? _ObjectToTuple<T, IncludeNonIndex, HoleType, OmitHole>
      : never;

/**
 * Assign properties of `Source` into `Target`.
 *
 * The result of type follows the actual result of `Object.assign`.
 *
 * @template Target The type to receive the assignment.
 * @template Source The type to be assigned to the `Target`.
 * @returns A new type that combines both `Target` and `Source`.
 * @example
 * // { a: string; b: string; c: boolean }
 * type Assign1 = ObjectAssign<{ a: string; b: number }, { b: string; c: boolean }>;
 *
 * // { a: string; 0: string }
 * type Assign2 = ObjectAssign<{ a: string }, [string]>;
 *
 * // { [x: number]: string, a: string }
 * type Assign3 = ObjectAssign<{ a: string }, string[]>;
 *
 * // [number, number]
 * type Assign4 = ObjectAssign<[string], [number, number]>;
 *
 * // (string | number)[]
 * type Assign5 = ObjectAssign<string[], [number, number]>;
 *
 * // (string | number)[]
 * type Assign6 = ObjectAssign<string[], number[]>;
 *
 * // [number, string]
 * type Assign7 = ObjectAssign<[string], { 0: number; 1: string }>;
 *
 * // (string | number)[]
 * type Assign8 = ObjectAssign<[number], 'str'>;
 *
 * // { [x: number]: string, a: string }
 * type Assign9 = ObjectAssign<{a: string}, 'str'>;
 */
export type ObjectAssign<Target, Source = never> = _ObjectAssignPreCheck<
  Target,
  Source,
  Target extends Primitive
    ? _ObjectAssignPrimitive<Target, Source>
    : Target extends ReadonlyArray
      ? _ObjectAssignArray<Target, Source>
      : IsObjectLiteral<Target> extends true
        ? _ObjectAssignObject<Target, Source>
        : Target & Source
>;

/**
 * Overwrite properties of `Target` with properties of `Source`.
 *
 * This type will overwrite all nested `object` types (if `Z` is `'deep'`).
 *
 * @template Target The `object` to be overwritten.
 * @template Source The `object` to be assigned to the target.
 * @template Z Defines the lookup type, which can be `'deep'` or `'shallow'`, defaults to `'shallow'`.
 * @returns A new `object` type that overwrites and combines the properties of both `Target` and `Source`.
 * @example
 * type Obj1 = { a: string; b: string; c: { a: string } };
 * type Obj2 = { b: number; c: { b: number }; d: number };
 *
 * // { a: string; b: number; c: { b: number; }; d: number }
 * type Shallow = ObjectOverwrite<Obj1, Obj2, 'shallow'>;
 *
 * // { a: string; b: number; c: { a: string; b: number; }; d: number }
 * type Deep = ObjectOverwrite<Obj1, Obj2, 'deep'>;
 */
export type ObjectOverwrite<
  Target,
  Source = never,
  Z extends _LookupType = 'shallow'
> =
  IsNever<Source> extends true
    ? Target
    : IsNonNullish<Source> extends true
      ? Target
      : IsEqual<Source, Target> extends true
        ? Source
        : _ObjectOverwrite<Target, Source, Z>;

/**
 * Merges properties of `Target` and `Source`.
 *
 * This type will merge all nested `object` types (if `Z` is `'deep'`).
 *
 * @template Target The first `object` type.
 * @template Source The second `object` type to merge into the first.
 * @template Z Defines the lookup type, which can be `'deep'` or `'shallow'`, defaults to `'shallow'`.
 * @returns A new `object` type that merges the properties of both `Target` and `Source`.
 * @example
 * type Obj1 = { a: string; b: string; c: { a: string; } };
 * type Obj2 = { b: number; c: { a: number; b: number }; d: number };
 *
 * // { a: string; b: string | number; c: { a: string; } | { a: number; b: number }; d: number }
 * type Shallow = ObjectMerge<Obj1, Obj2, 'shallow'>;
 *
 * // { a: string; b: string | number; c: { a: string | number; b: number; }; d: number }
 * type Deep = ObjectMerge<Obj1, Obj2, 'deep'>;
 */
export type ObjectMerge<
  Target,
  Source = never,
  Z extends _LookupType = 'shallow'
> =
  IsNever<Source> extends true
    ? Target
    : IsNonNullish<Source> extends true
      ? Target
      : IsObjectEmpty<Source> extends true
        ? Target
        : IsEqual<Source, Target> extends true
          ? Source
          : [IsObjectLiteral<Target>, IsObjectLiteral<Source>] extends [
                true,
                true
              ]
            ? ObjectPartial<
                {
                  [K in keyof Target | keyof Source]: K extends keyof Target &
                    keyof Source
                    ? _Lookup<
                        Z,
                        {
                          /** Shallow Result */
                          shallow: Target[K] | Source[K];
                          /** Deep Result */
                          deep: ObjectMerge<Target[K], Source[K]>;
                        }
                      >
                    : K extends keyof Target
                      ? Target[K]
                      : K extends keyof Source
                        ? Source[K]
                        : never;
                },
                ObjectOptionalKeys<Source | Target>
              >
            : Target | Source;

/**
 * Unions the properties of an `object` with a specified `UnionType`, creating a new `object` where each property
 * is either the original value or the `UnionType`.
 *
 * This type will unionize all nested `object` types (if `Z` is `'deep'`).
 *
 * @template Target The `object` to be unionized.
 * @template UnionType The type to union with each property of the `Target`.
 * @template Z Defines the lookup type, which can be `'deep'` or `'shallow'`, defaults to `'shallow'`.
 * @example
 * // { a: string | number; b: number | { a: string; }; }
 * type Shallow = ObjectUnionize<{ a: string; b: { a: string } }, number, 'shallow'>;
 *
 * // { a: string | number; b: { a: string | number; }; }
 * type Deep = ObjectUnionize<{ a: string; b: { a: string } }, number, 'deep'>;
 */
export type ObjectUnionize<
  Target,
  UnionType,
  Z extends _LookupType = 'shallow'
> =
  IsObjectLiteral<Target> extends true
    ? {
        [K in keyof Target]: _Lookup<
          Z,
          {
            /** Shallow Result */
            shallow: Target[K] | UnionType;
            /** Deep Result */
            deep: _ObjectUnionizeDeep<Target[K], UnionType>;
          }
        >;
      }
    : never;
