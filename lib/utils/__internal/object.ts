import type { ObjectArrayLike, Primitive, ReadonlyArray } from 'lib/aliases';
import type {
  IsEqual,
  IsNever,
  IsNonNullish,
  IsNullish,
  IsObjectEmpty,
  IsObjectLiteral,
  IsOptionalProperty
} from 'lib/assertions';
import type {
  ArrayToObject,
  Detailed,
  ExcludeUndefined,
  Increment,
  KeyOf,
  ObjectOptionalKeys,
  ParseInt,
  ParseObject,
  PropValue,
  UnionToTuple
} from 'lib/utils';
import type { _ArrayAssign, _Lookup, _LookupType } from '.';

/**
 * @internal
 */
export type _ObjectRequired<T, K, IncludeUndefined = false> = [K] extends [
  infer Keys extends PropertyKey
]
  ? {
      [Key in Keys as IsNever<PropValue<T, Key>> extends true
        ? never
        : Key]-?: IncludeUndefined extends false
        ? ExcludeUndefined<PropValue<T, Key>>
        : PropValue<T, Key>;
    } extends infer Req
    ? keyof T extends keyof Req
      ? Req
      : Detailed<Req & Omit<T, Keys>>
    : never
  : T;

/**
 * @internal
 */
export type _ObjectPartial<T, K> = [K] extends [infer Keys extends PropertyKey]
  ? {
      [Key in Keys as IsNever<PropValue<T, Key>> extends true
        ? never
        : Key]?: PropValue<T, Key>;
    } extends infer Opted
    ? keyof T extends keyof Opted
      ? Opted
      : Detailed<Opted & Omit<T, Keys>>
    : never
  : T;

/**
 * @internal
 */
export type _ObjectToTuple<
  T,
  IncludeNonIndex,
  HoleType = unknown,
  OmitHole = false
> = IncludeNonIndex extends true
  ? _ObjectToTupleNonArrayIndex<T, UnionToTuple<keyof T>>
  : _ObjectToTupleArrayIndex<T, HoleType, OmitHole>;

/**
 * @internal
 */
export type _ObjectToTupleArrayIndex<
  T,
  HoleType = unknown,
  OmitHole = false,
  RemainKeys = ParseInt<keyof T>,
  CurrIndex extends number = 0,
  Result extends ReadonlyArray = []
> = number extends RemainKeys
  ? T[number extends keyof T ? number : never][]
  : IsNever<RemainKeys> extends true
    ? Result
    : (
          PropValue<T, CurrIndex> extends infer NewElement
            ? IsNever<NewElement> extends true
              ? OmitHole extends true
                ? Result
                : IsOptionalProperty<T, CurrIndex> extends true
                  ? [...Result, HoleType?]
                  : [...Result, HoleType]
              : IsOptionalProperty<T, CurrIndex> extends true
                ? [...Result, NewElement?]
                : [...Result, NewElement]
            : never
        ) extends infer Temp extends ReadonlyArray
      ? _ObjectToTupleArrayIndex<
          T,
          HoleType,
          OmitHole,
          Exclude<RemainKeys, CurrIndex>,
          Increment<CurrIndex>,
          Temp
        >
      : never;

/**
 * @internal
 */
export type _ObjectToTupleNonArrayIndex<
  T,
  Acc,
  Result extends ReadonlyArray = []
> = Acc extends [infer K extends keyof T, ...infer Acc]
  ? _ObjectToTupleNonArrayIndex<T, Acc, [...Result, T[K]]>
  : Result;

/**
 * @internal
 */
export type _ObjectAssign<Target, Source> = {
  [K in KeyOf<Target | Source>]: PropValue<Source, K> extends infer NewValue
    ? IsNever<NewValue> extends false
      ? NewValue
      : PropValue<Target, K>
    : never;
};

/**
 * @internal
 */
export type _ObjectAssignPreCheck<Target, Source, Then> =
  IsNullish<Target> extends true
    ? never
    : IsNever<Source> extends true
      ? Target
      : IsObjectEmpty<Source> extends true
        ? Target
        : IsObjectEmpty<Target> extends true
          ? Source
          : IsEqual<Source, Target> extends true
            ? Source
            : Then;

/**
 * @internal
 */
export type _ObjectAssignPrimitive<Target, Source> = Source extends Primitive
  ? Target
  : Target & Source;

/**
 * @internal
 */
export type _ObjectAssignArray<Target, Source> = _ArrayAssign<Target, Source>;

/**
 * @internal
 */
export type _ObjectAssignObject<Target, Source> = Source extends string
  ? ParseObject<Target & ObjectArrayLike<string>>
  : Source extends ReadonlyArray
    ? _ObjectAssign<Target, ArrayToObject<Source>>
    : IsObjectLiteral<Source> extends true
      ? _ObjectAssign<Target, Source>
      : Target;

/**
 * @internal
 */
export type _ObjectOverwrite<
  Target,
  Source,
  Z extends _LookupType = 'shallow'
> = [IsObjectLiteral<Target>, IsObjectLiteral<Source>] extends [true, true]
  ? {
      [K in keyof Target | keyof Source]: K extends keyof Target & keyof Source
        ? _Lookup<
            Z,
            {
              shallow: Source[K];
              deep: _ObjectOverwrite<Target[K], Source[K], Z>;
            }
          >
        : K extends keyof Target
          ? Target[K]
          : K extends keyof Source
            ? Source[K]
            : never;
    } extends infer Result
    ? IsNonNullish<Result> extends true
      ? Result
      : Detailed<
          _ObjectPartial<
            Result,
            | ObjectOptionalKeys<Source>
            | Exclude<ObjectOptionalKeys<Target>, keyof Source>
          >
        >
    : never
  : Source;

/**
 * @internal
 */
export type _ObjectUnionizeDeep<Target, UnionType> =
  IsObjectLiteral<Target> extends true
    ? {
        [K in keyof Target]: _ObjectUnionizeDeep<Target[K], UnionType>;
      }
    : Target | UnionType;
