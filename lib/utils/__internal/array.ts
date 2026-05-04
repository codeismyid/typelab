import type { Any, ReadonlyArray, WritableArray } from 'lib/aliases';
import type {
  IsArray,
  IsArrayWritable,
  IsObjectLiteral,
  IsTuple
} from 'lib/assertions';
import type {
  ArrayIndexes,
  ArraySkip,
  ArrayToObject,
  ArrayValues,
  ExcludeUndefined,
  ObjectOmitOptional,
  ObjectOmitRequired,
  ObjectOptionalKeys,
  ObjectPick,
  ObjectRequiredKeys,
  ParseInt,
  PropValue,
  UnionExclusive
} from 'lib/utils';
import type {
  _Lookup,
  _LookupType,
  _ObjectAssign,
  _ObjectPartial,
  _ObjectRequired,
  _ObjectToTupleArrayIndex
} from '.';

/** @internal */
export type _ArrayFlat<T, Initial = true> = T extends ReadonlyArray
  ? number extends PropValue<T, 'length'>
    ? Initial extends true
      ? _ArrayFlatNormal<T>[]
      : [_ArrayFlatNormal<T>]
    : _ArrayFlatTuple<T>
  : [T];

type _ArrayFlatTuple<T> = T extends [infer First, ...infer Rest]
  ? [..._ArrayFlat<First, false>, ..._ArrayFlatTuple<Rest>]
  : [];

type _ArrayFlatNormal<T> = T extends readonly (infer U)[]
  ? U extends ReadonlyArray
    ? _ArrayFlatNormal<U>
    : U
  : T;

/**
 * @internal
 */
export type _ArrayTakePositive<
  Target extends ReadonlyArray,
  TakeLength = Target['length'],
  Result extends ReadonlyArray = Target
> = Result['length'] extends TakeLength
  ? Target extends WritableArray
    ? Result
    : readonly [...Result]
  : number extends Target['length']
    ? Target
    : Result extends readonly [...infer R, Any]
      ? _ArrayTakePositive<Target, TakeLength, R>
      : Target;

/**
 * @internal
 * Internal helper to handle negative `TakeLength` for {@link ArrayTake}.
 */
export type _ArrayTakeNegative<
  Target extends ReadonlyArray,
  TakeLength = Target['length'],
  Result extends ReadonlyArray = Target
> = Result['length'] extends TakeLength
  ? Target extends WritableArray
    ? Result
    : readonly [...Result]
  : number extends Target['length']
    ? Target
    : Result extends readonly [Any, ...infer R]
      ? _ArrayTakeNegative<Target, TakeLength, R>
      : Target;

/**
 * @internal
 * Internal helper to handle positive `SkipLength` for {@link ArraySkip}.
 */
export type _ArraySkipPositive<
  Target extends ReadonlyArray,
  SkipLength,
  Skipped extends ReadonlyArray = [],
  Result extends ReadonlyArray = Target
> = Skipped['length'] extends SkipLength
  ? Target extends WritableArray
    ? Result
    : readonly [...Result]
  : number extends Target['length']
    ? Target
    : Result extends readonly [infer Skip, ...infer R]
      ? _ArraySkipPositive<Target, SkipLength, [...Skipped, Skip], R>
      : Target extends WritableArray
        ? []
        : readonly [];

/**
 * @internal
 * Internal helper to handle negative `SkipLength` for {@link ArraySkip}.
 */
export type _ArraySkipNegative<
  Target extends ReadonlyArray,
  SkipLength,
  Skipped extends ReadonlyArray = [],
  Result extends ReadonlyArray = Target
> = Skipped['length'] extends SkipLength
  ? IsArrayWritable<Target> extends true
    ? Result
    : readonly [...Result]
  : number extends Target['length']
    ? Target
    : Result extends readonly [...infer R, infer Skip]
      ? _ArraySkipNegative<Target, SkipLength, [...Skipped, Skip], R>
      : IsArrayWritable<Target> extends true
        ? []
        : readonly [];

/**
 * @internal
 */
export type _ArrayRequired<
  T extends ReadonlyArray,
  Index,
  Element,
  IncludeUndefined
> = number extends T['length']
  ? IncludeUndefined extends false
    ? ExcludeUndefined<Element>[]
    : Element[]
  : _ObjectToTupleArrayIndex<
      _ArrayToObject<T> extends infer Obj
        ? _ObjectRequired<Obj, ParseInt<Index>, IncludeUndefined>
        : never
    >;

/**
 * @internal
 */
export type _ArrayPartial<
  T extends ReadonlyArray,
  Index,
  Element
> = number extends T['length']
  ? (Element | undefined)[]
  : _ObjectToTupleArrayIndex<
      _ArrayToObject<T> extends infer Obj
        ? _ObjectPartial<Obj, ParseInt<Index>>
        : never
    >;

/**
 * @internal
 */
export type _ArrayRequiredIndexes<T extends ReadonlyArray> =
  number extends T['length'] ? number : ObjectRequiredKeys<_ArrayToObject<T>>;

/**
 * @internal
 */
export type _ArrayOptionalIndexes<T extends ReadonlyArray> =
  number extends T['length'] ? number : ObjectOptionalKeys<_ArrayToObject<T>>;

/**
 * @internal
 */
export type _ArrayRequiredElements<
  T extends ReadonlyArray,
  Elements
> = number extends T['length']
  ? Elements
  : ObjectRequiredKeys<_ArrayToObject<T>> extends infer Indexes
    ? Indexes extends keyof T
      ? T[Indexes]
      : never
    : never;

/**
 * @internal
 */
export type _ArrayOptionalElements<
  T extends ReadonlyArray,
  Elements
> = number extends T['length']
  ? Elements
  : ObjectOptionalKeys<_ArrayToObject<T>> extends infer Indexes
    ? Indexes extends keyof T
      ? T[Indexes]
      : never
    : never;

/**
 * @internal
 */
export type _ArrayOmitOptional<T extends ReadonlyArray> =
  number extends T['length']
    ? T
    : _ObjectToTupleArrayIndex<ObjectOmitOptional<_ArrayToObject<T>>>;

/**
 * @internal
 */
export type _ArrayOmitRequired<
  T extends ReadonlyArray,
  OmitHole = true
> = number extends T['length']
  ? T
  : _ObjectToTupleArrayIndex<
      ObjectOmitRequired<_ArrayToObject<T>>,
      undefined,
      OmitHole
    >;

/**
 * @internal
 */
export type _ArrayToObject<T extends ReadonlyArray> = number extends T['length']
  ? { [x: number]: ArrayValues<T> }
  : ObjectPick<T, ArrayIndexes<T>>;

/**
 * @internal
 */
export type _ArrayAssign<Target, Source> =
  Target extends WritableArray<infer TargetElements>
    ? Source extends ReadonlyArray<infer SourceElements>
      ? IsTuple<Target | Source> extends true
        ? Source['length'] extends 0
          ? Target
          : _ObjectToTupleArrayIndex<
              _ObjectAssign<ArrayToObject<Target>, ArrayToObject<Source>>,
              unknown
            >
        : (TargetElements | SourceElements)[]
      : Source extends string
        ? (TargetElements | string)[]
        : IsObjectLiteral<Source> extends true
          ? _ObjectToTupleArrayIndex<
              _ObjectAssign<ArrayToObject<Target>, Source>,
              unknown
            >
          : Target
    : Target;

/**
 * @internal
 */
export type _ArrayOverwrite<Target, Source, Z extends _LookupType = 'shallow'> =
  Target extends ReadonlyArray<infer TargetElements>
    ? Source extends ReadonlyArray<infer SourceElements>
      ? Source['length'] extends 0
        ? Target
        : IsTuple<Target | Source> extends true
          ? _Lookup<
              Z,
              {
                /** Shallow Result */
                shallow: Target['length'] extends Source['length']
                  ? Source
                  : [ArrayIndexes<Target>, ArrayIndexes<Source>] extends [
                        infer TargetKeys,
                        infer SourceKeys
                      ]
                    ? UnionExclusive<
                        TargetKeys,
                        SourceKeys
                      > extends infer ExcessKeys
                      ? ExcessKeys extends SourceKeys
                        ? Source
                        : IsArrayWritable<Source> extends true
                          ? [...Source, ...ArraySkip<Target, Source['length']>]
                          : readonly [
                              ...Source,
                              ...ArraySkip<Target, Source['length']>
                            ]
                      : never
                    : never;
                /** Deep Result */
                deep: _ArrayOverwriteTraverse<Target, Source>;
              }
            >
          : _Lookup<
              Z,
              {
                /** Shallow Result */
                shallow: Source;
                /** Deep Result */
                deep: IsArray<TargetElements | SourceElements> extends true
                  ? IsArrayWritable<Source> extends true
                    ? _ArrayOverwrite<TargetElements, SourceElements, Z>[]
                    : readonly _ArrayOverwrite<
                        TargetElements,
                        SourceElements,
                        Z
                      >[]
                  : Source;
              }
            >
      : Source
    : Source;

type _ArrayOverwriteTraverse<
  Target,
  Source,
  IsWritable extends boolean = IsArrayWritable<Source>,
  Result extends ReadonlyArray = IsArrayWritable<Source> extends true
    ? []
    : readonly []
> = Target extends readonly [
  infer TargetFirstElement,
  ...infer TargetRestElement
]
  ? Source extends readonly [
      infer SourceFirstElement,
      ...infer SourceRestElement
    ]
    ? _ArrayOverwriteTraverse<
        TargetRestElement,
        SourceRestElement,
        IsWritable,
        [
          ...Result,
          _ArrayOverwrite<TargetFirstElement, SourceFirstElement, 'deep'>
        ]
      >
    : IsWritable extends true
      ? [...Result, ...Target]
      : readonly [...Result, ...Target]
  : Source extends readonly [Any, ...Any]
    ? IsWritable extends true
      ? [...Result, ...Source]
      : readonly [...Result, ...Source]
    : Result;

/**
 * @internal
 */
export type _ArrayMerge<Target, Source, Z extends _LookupType = 'shallow'> =
  Target extends ReadonlyArray<infer TargetElements>
    ? Source extends ReadonlyArray<infer SourceElements>
      ? Source['length'] extends 0
        ? Target
        : IsTuple<Target | Source> extends true
          ? _ArrayMergeTraverse<Target, Source, Z>
          : _Lookup<
              Z,
              {
                /** Shallow Result */
                shallow: _ArrayMergeShallowResult<
                  Target,
                  Source,
                  TargetElements,
                  SourceElements
                >;
                /** Deep Result */
                deep: IsArray<TargetElements | SourceElements> extends true
                  ? IsArrayWritable<Target | Source> extends true
                    ? _ArrayMerge<TargetElements, SourceElements, Z>[]
                    : readonly _ArrayMerge<TargetElements, SourceElements, Z>[]
                  : _ArrayMergeShallowResult<
                      Target,
                      Source,
                      TargetElements,
                      SourceElements
                    >;
              }
            >
      : Target | Source
    : Target | Source;

type _ArrayMergeShallowResult<Target, Source, TargetElements, SourceElements> =
  IsArrayWritable<Target | Source> extends true
    ? (TargetElements | SourceElements)[]
    : readonly (TargetElements | SourceElements)[];

type _ArrayMergeTraverse<
  Target,
  Source,
  Z extends _LookupType,
  IsWritable = IsArrayWritable<Target | Source>,
  Result extends ReadonlyArray = []
> = Target extends readonly [
  infer TargetFirstElement,
  ...infer TargetRestElement
]
  ? Source extends readonly [
      infer SourceFirstElement,
      ...infer SourceRestElement
    ]
    ? _ArrayMergeTraverse<
        TargetRestElement,
        SourceRestElement,
        Z,
        IsWritable,
        [
          ...Result,
          _Lookup<
            Z,
            {
              /** Shallow Result */
              shallow: TargetFirstElement | SourceFirstElement;
              /** Deep Result */
              deep: _ArrayMerge<TargetFirstElement, SourceFirstElement, Z>;
            }
          >
        ]
      >
    : IsWritable extends true
      ? [...Result, ...Target]
      : readonly [...Result, ...Target]
  : Source extends [Any, ...Any]
    ? IsWritable extends true
      ? [...Result, ...Source]
      : readonly [...Result, ...Source]
    : IsWritable extends true
      ? Result
      : readonly [...Result];

/**
 * @internal
 */
export type _ArrayUnionize<
  Target,
  UnionType,
  Z extends _LookupType = 'shallow'
> =
  Target extends ReadonlyArray<infer TargetElements>
    ? Target['length'] extends 0
      ? UnionType[]
      : IsTuple<Target> extends true
        ? _ArrayUnionizeTraverse<Target, UnionType, Z>
        : _Lookup<
            Z,
            {
              /** Shallow Result */
              shallow: _ArrayUnionizeShallowResult<
                Target,
                TargetElements,
                UnionType
              >;
              /** Deep Result */
              deep: IsArray<TargetElements> extends true
                ? IsArrayWritable<Target> extends true
                  ? _ArrayUnionize<TargetElements, UnionType, Z>[]
                  : readonly _ArrayUnionize<TargetElements, UnionType, Z>[]
                : _ArrayUnionizeShallowResult<
                    Target,
                    TargetElements,
                    UnionType
                  >;
            }
          >
    : Target | UnionType;

type _ArrayUnionizeShallowResult<Target, TargetElements, UnionType> =
  IsArrayWritable<Target> extends true
    ? (TargetElements | UnionType)[]
    : readonly (TargetElements | UnionType)[];

type _ArrayUnionizeTraverse<
  Target,
  UnionType,
  Z extends _LookupType,
  IsWritable extends boolean = IsArrayWritable<Target>,
  Result extends ReadonlyArray = []
> = Target extends readonly [
  infer TargetFirstElement,
  ...infer TargetRestElement
]
  ? _ArrayUnionizeTraverse<
      TargetRestElement,
      UnionType,
      Z,
      IsWritable,
      [
        ...Result,
        _Lookup<
          Z,
          {
            /** Shallow Result */
            shallow: TargetFirstElement | UnionType;
            /** Deep Result */
            deep: TargetFirstElement extends ReadonlyArray
              ? _ArrayUnionize<TargetFirstElement, UnionType, Z>
              : TargetFirstElement | UnionType;
          }
        >
      ]
    >
  : IsWritable extends true
    ? Result
    : readonly [...Result];
