import type { Any, ReadonlyArray, WritableArray } from 'lib/aliases';
import type { IsArray, IsNumber, IsTrue } from 'lib/assertions';
import type { IfAny, IfNever } from 'lib/conditions';
import type { _IfNotAnyOrNever } from 'lib/conditions/__internal';
import type { ParseInt, ParseString, PropValue } from '.';
import type {
  _ArrayAssign,
  _ArrayFlat,
  _ArrayMerge,
  _ArrayOmitOptional,
  _ArrayOmitRequired,
  _ArrayOptionalElements,
  _ArrayOptionalIndexes,
  _ArrayOverwrite,
  _ArrayPartial,
  _ArrayRequired,
  _ArrayRequiredElements,
  _ArrayRequiredIndexes,
  _ArraySkipNegative,
  _ArraySkipPositive,
  _ArrayTakeNegative,
  _ArrayTakePositive,
  _ArrayToObject,
  _ArrayUnionize,
  _LookupType
} from './__internal';

/**
 * Extracts the `length` of an `Array` type.
 *
 * @template T The target `Array`.
 * @returns The length of type `T`.
 * @example
 * type Length = ArrayLength<[1, 2, 3]>; // 3
 * type Length2 = ArrayLength<string[]>; // number
 * type Never = ArrayLength<any>; // never
 */
export type ArrayLength<T> = T extends ReadonlyArray
  ? _IfNotAnyOrNever<T, T['length']>
  : never;

/**
 * Extracts the elements of an `Array` type`.
 *
 * @template T The target `Array`.
 * @returns Elements of type `T`.
 * @example
 * type Elements = ArrayElements<[string, number]>; // string | number
 * type Never = ArrayElements<any>; // never
 */
export type ArrayElements<T> = T extends ReadonlyArray
  ? _IfNotAnyOrNever<T, T[number]>
  : never;

/**
 * Alias for {@link ArrayElements `ArrayElements`}.
 *
 * Extracts the values of an `Array` type`.
 *
 * @template T The target `Array`.
 * @returns Values of type `T`.
 * @example
 * type Values = ArrayValues<[string, number]>; // string | number
 * type Never = ArrayValues<any>; // never
 */
export type ArrayValues<T> = ArrayElements<T>;

/**
 * Extracts the index keys of an `Array` or `Tuple` type.
 *
 * - For a `Tuple`, returns `T` index union.
 * - For a general `Array`, returns `number` since arrays are indexed by numbers.
 *
 * @template T The array or `Tuple` type to extract index keys from.
 * @template IncludeString Whether to include string keys (`true`) or only numeric keys (`false`). Defaults to `false`.
 * @returns The keys of the `Tuple` (as both `string` and number) or `number` for general arrays.
 * @example
 * // 0 | 1 | 2
 * type Result1 = ArrayIndexes<[string, number, boolean]>;
 *
 * // 0 | 1 | 2 | "0" | "1" | "2"
 * type Result2 = ArrayIndexes<[string, number, boolean], true>;
 *
 * // number
 * type Result3 = ArrayIndexes<string[]>;
 *
 * // never
 * type Never = ArrayIndexes<any>;
 */
export type ArrayIndexes<
  T,
  IncludeString extends boolean = false
> = T extends ReadonlyArray
  ? _IfNotAnyOrNever<
      T,
      number extends T['length']
        ? number
        : Exclude<keyof T, keyof WritableArray> extends infer IndexesString
          ? ParseInt<IndexesString> extends infer IndexesNumber
            ? IsTrue<IncludeString> extends true
              ? IndexesNumber | IndexesString
              : IndexesNumber
            : never
          : never
    >
  : never;

/**
 * Extracts the type of an element at a specific index from an `Array` type.
 *
 * @template T The `Array` type to extract from.
 * @template Index The index of the element to extract.
 * @returns The type of the element at index `I` from type `T`.
 * @example
 * type ElementAt = ArrayAt<[string, number, boolean], 1>; // number
 * type Undefined = ArrayAt<[string, number, boolean], 3>; // undefined
 * type Never = ArrayAt<any, 1>; // never
 */
export type ArrayAt<T, Index> = T extends ReadonlyArray
  ? _IfNotAnyOrNever<T, PropValue<T, Index>>
  : never;

/**
 * Extracts the type of the first element of an `Array` type.
 *
 * @template T The `Array` type to extract from.
 * @returns The type of the first element from type `T`.
 * @example
 * // string
 * type FirstElement = ArrayFirst<[string, number, boolean]>;
 *
 * // string | number | boolean
 * type AllElements = ArrayFirst<(string | number | boolean)[]>;
 *
 * // never
 * type Never = ArrayFirst<any>;
 */
export type ArrayFirst<T> = T extends ReadonlyArray
  ? _IfNotAnyOrNever<T, T[0]>
  : never;

/**
 * Extracts the type of the last element of an `Array` type.
 *
 * @template T The `Array` type to extract from.
 * @returns The type of the last element from type `T`, or `never` if empty.
 * @example
 * // boolean
 * type LastElement = ArrayLast<[string, number, boolean]>;
 *
 * // string | number | boolean
 * type AllElements = ArrayLast<(string | number | boolean)[]>;
 *
 * // never
 * type Never = ArrayLast<any>;
 */
export type ArrayLast<T> = T extends ReadonlyArray
  ? _IfNotAnyOrNever<
      T,
      T extends readonly [...Any, infer Last] ? Last : T[number]
    >
  : never;

/**
 * Concatenates two `Array` types into one.
 *
 * @template A The first `Array` type to concatenate.
 * @template B The second `Array` type to concatenate.
 * @returns A new `Array` type that is the result of concatenating `A` and `B`.
 * @example
 * // [string, number, boolean, object]
 * type Concatenated1 = ArrayConcat<[string, number], [boolean, object]>;
 *
 * // [...string[], boolean, object]
 * type Concatenated2 = ArrayConcat<string[], [boolean, object]>;
 *
 * // [string, number, ...object[]]
 * type Concatenated3 = ArrayConcat<[string, number], object[]>;
 *
 * // [string, number, any]
 * type Concatenated4 = ArrayConcat<[string, number], any>;
 *
 * // never
 * type Never = ArrayConcat<any, [string, number]>;
 */
export type ArrayConcat<T1, T2> = T1 extends ReadonlyArray
  ? _IfNotAnyOrNever<
      T1,
      IfAny<
        T2,
        [...T1, Any],
        T2 extends ReadonlyArray ? [...T1, ...T2] : [...T1, T2]
      >
    >
  : never;

/**
 * Adds a new element to the end of a `Writable Array` type.
 *
 * @template T The `Array` type to push into.
 * @template U The element type to add to the `Array`.
 * @returns A new `Array` type with the element `U` added to the end.
 * @example
 * type Pushed = ArrayPush<[string, number], boolean>; // [string, number, boolean]
 * type Same = ArrayPush<[string, number], never>; // [string, number]
 * type Never1 = ArrayPush<readonly [string, number], string> // never
 * type Never2 = ArrayPush<any, string> // never
 */
export type ArrayPush<T, U> = T extends WritableArray
  ? _IfNotAnyOrNever<T, IfNever<U, T, [...T, U]>>
  : never;

/**
 * Removes the last element from an `Writable Array` type.
 * If the `Array` is a `Tuple`, the result will be a new `Tuple` without the last element.
 * If the `Array` is not a `Tuple`, the result will be the original `Array` type.
 *
 * @template T The `Array` type to pop from.
 * @returns A new `Array` type with the last element removed.
 * @example
 * type Popped = ArrayPop<[string, number]>; // [string]
 * type Same = ArrayPop<(string | number)[]>; // (string | number)[]
 * type Never1 = ArrayPop<readonly [string, number]>; // never
 * type Never2 = ArrayPop<any>; // never
 */
export type ArrayPop<T> = T extends WritableArray
  ? _IfNotAnyOrNever<T, T extends [...infer U, Any?] ? U : T>
  : never;

/**
 * Adds a new element to the beginning of an `Writable Array` type.
 *
 * @template T The `Array` type to unshift into.
 * @template U The element type to add to the front of the `Array`.
 * @returns A new `Array` type with the element `U` added to the front.
 * @example
 * // [boolean, string, number]
 * type Unshifted = ArrayUnshift<[string, number], boolean>;
 *
 * // [string, number]
 * type Same = ArrayUnshift<[string, number], never>;
 *
 * // never
 * type Never1 = ArrayPush<readonly [string, number], string>;
 *
 * // never
 * type Never2 = ArrayPush<any, string>;
 */
export type ArrayUnshift<T, U> = T extends WritableArray
  ? _IfNotAnyOrNever<T, IfNever<U, T, [U, ...T]>>
  : never;

/**
 * Removes the first element from an `Writable Array` type.
 * If the `Array` is a `Tuple`, the result will be a new `Tuple` without the first element.
 * If the `Array` is not a `Tuple`, the result will be the original `Array` type.
 *
 * @template T The `Array` type to shift from.
 * @returns A new `Array` type with the first element removed.
 * @example
 * type Shifted = ArrayShift<[string, number]>; // [number]
 * type Same = ArrayShift<(string | number)[]>; // (string | number)[]
 * type Never1 = ArrayShift<readonly [string, number]>; // never
 * type Never2 = ArrayShift<any>; // never
 */
export type ArrayShift<T> = T extends WritableArray
  ? _IfNotAnyOrNever<T, T extends [Any?, ...infer U] ? U : T>
  : never;

/**
 * Type that flattens a nested `Array` structure into a single `Array`.
 * If an element is an `Array`, it will recursively flatten it until no `Array` remains.
 *
 * @template T The `Array` type to flatten.
 * @returns A flattened version of the given `Array` type.
 * @example
 * // [0, 1, 2, 3, 4, 5, 6, 7]
 * type Flattened1 = ArrayFlat<[0, 1, [2, 3, [4, 5, [6, 7[]]]]]>;
 *
 * // (0 | 1 | 2 | 3 | 4 | 5 | 6 | 7)[]
 * type Flattened2 = ArrayFlat<(0 | 1 | [2] | [3] | [[4]] | [[5]] | [[[6]]] | [[[7[]]]])[]>;
 *
 * // never
 * type Never = ArrayFlat<any>;
 */
export type ArrayFlat<T> = T extends ReadonlyArray
  ? _IfNotAnyOrNever<T, _ArrayFlat<T>>
  : never;

/**
 * Takes the first `TakeLength` elements from an array (or tuple).
 *
 * If `TakeLength` is negative, the elements are taken starting from the end of the array/tuple.
 *
 * @template T The array or tuple type to take elements from.
 * @template TakeLength The number of elements to take from the start or end, defaults to `T['length']`
 *
 * @example
 * type Result1 = ArrayTake<[1, 2, 3, 4], 2>; // [1, 2]
 * type Result2 = ArrayTake<[1, 2, 3, 4], -2>; // [3, 4]
 * type Result3 = ArrayTake<[1, 2, 3, 4], 5>; // [1, 2, 3, 4]
 * type Result4 = ArrayTake<[1, 2, 3, 4]>; // [1, 2, 3, 4]
 * type Never1 = ArrayTake<[1, 2, 3, 4], any>; // never
 * type Never2 = ArrayTake<[1, 2, 3, 4], never>; // never
 * type Never3 = ArrayTake<any, 1>; // never
 */
export type ArrayTake<
  T,
  TakeLength = PropValue<T, 'length'>
> = T extends ReadonlyArray
  ? IsNumber<TakeLength> extends true
    ? _IfNotAnyOrNever<
        T,
        TakeLength extends number
          ? `${TakeLength}` extends `-${infer TakeLength extends number}`
            ? _ArrayTakeNegative<T, TakeLength>
            : _ArrayTakePositive<T, TakeLength>
          : never
      >
    : never
  : never;

/**
 * Skips the first `SkipLength` elements from an array (or tuple).
 *
 * If `SkipLength` is negative, the elements are skipped starting from the end of the array/tuple.
 *
 * @template T The array or tuple type to skip elements from.
 * @template SkipLength The number of elements to skip from the start or end, defaults to `0`.
 * @example
 * type Result1 = ArraySkip<[1, 2, 3, 4], 2>; // [3, 4]
 * type Result2 = ArraySkip<[1, 2, 3, 4], -2>; // [1, 2]
 * type Result3 = ArraySkip<[1, 2, 3, 4], 5>; // []
 * type Result4 = ArraySkip<[1, 2, 3, 4]>; // [1, 2, 3, 4]
 * type Never1 = ArraySkip<[1, 2, 3, 4], any>; // never
 * type Never2 = ArraySkip<any, 1>; // never
 */
export type ArraySkip<T, SkipLength = 0> = T extends ReadonlyArray
  ? IsNumber<SkipLength> extends true
    ? _IfNotAnyOrNever<
        T,
        SkipLength extends number
          ? `${SkipLength}` extends `-${infer SkipLength extends number}`
            ? _ArraySkipNegative<T, SkipLength>
            : _ArraySkipPositive<T, SkipLength>
          : never
      >
    : never
  : never;

/**
 * Extended TypeScript {@link Required `Required`} to handle `Array`.
 *
 * @template T The original `Array` type.
 * @template Index The index of `T` that should be required.
 * @template IncludeUndefined Include undefined type from `T[Index]`, defaults to `false`.
 * @returns An `Array` type with the specified `K` set as required.
 * @example
 * type Result1 = ArrayRequired<[string?, string?]>; // [string, string]
 * type Result2 = ArrayRequired<[string?, string?], 0>; // [string, string?]
 * type Result3 = ArrayRequired<[string?, string?], 0, true>; // [string | undefined, string?]
 * type Never1 = ArrayRequired<[string?, string?], any>; // never
 * type Never2 = ArrayRequired<any, 1>; // never
 */
export type ArrayRequired<
  T,
  Index = ArrayIndexes<T, true>,
  IncludeUndefined extends boolean = false
> =
  T extends ReadonlyArray<infer Element>
    ? _IfNotAnyOrNever<
        T,
        _IfNotAnyOrNever<
          Index,
          _ArrayRequired<T, Index, Element, IncludeUndefined>
        >
      >
    : never;

/**
 * Extended TypeScript {@link Partial `Partial`} to handle `Array`.
 *
 * @template T The original `Array` type.
 * @template Index The index of `T` that should be required.
 * @returns An `Array` type with the specified `Index` set as required.
 * @example
 * type Result1 = ArrayPartial<[string, string]>; // [string?, string?]
 * type Result2 = ArrayPartial<[string, string], 1>; // [string, string?]
 * type Never1 = ArrayPartial<[string, string], any>; // never
 * type Never2 = ArrayPartial<any, 1>; // never
 */
export type ArrayPartial<T, Index = ArrayIndexes<T, true>> =
  T extends ReadonlyArray<infer Element>
    ? _IfNotAnyOrNever<
        T,
        _IfNotAnyOrNever<Index, _ArrayPartial<T, Index, Element>>
      >
    : never;

/**
 * Get the required indexes from `T` type.
 *
 * @template T The `Array` type to extract required indexes from.
 * @template IncludeString Whether to include string keys (`true`) or only numeric keys (`false`). Defaults to `false`.
 * @returns The indexes of `T` that are required.
 * @example
 * // 0 | 1
 * type Result1 = ArrayRequiredIndexes<[string, string, string?]>;
 *
 * // 0 | 1 | "0" | "1"
 * type Result2 = ArrayRequiredIndexes<[string, string, string?], true>;
 *
 * // number
 * type Result3 = ArrayRequiredIndexes<(string | undefined)[]>;
 *
 * // never
 * type Never1 = ArrayRequiredIndexes<[string?, string?, string?]>;
 *
 * // never
 * type Never2 = ArrayRequiredIndexes<any>;
 */
export type ArrayRequiredIndexes<
  T,
  IncludeString extends boolean = false
> = T extends ReadonlyArray
  ? _IfNotAnyOrNever<
      T,
      _ArrayRequiredIndexes<T> extends infer IndexesNumber extends number
        ? number extends IndexesNumber
          ? IndexesNumber
          : IsTrue<IncludeString> extends true
            ? IndexesNumber | ParseString<IndexesNumber>
            : IndexesNumber
        : never
    >
  : never;

/**
 * Get the optional indexes from `T` type.
 *
 * @template T The `Array` type to extract optional indexes from.
 * @template IncludeString Whether to include string keys (`true`) or only numeric keys (`false`). Defaults to `false`.
 * @returns The indexes of `T` that are optional.
 * @example
 * // 1 | 2
 * type Result1 = ArrayOptionalIndexes<[string, string?, string?]>;
 *
 * // 1 | 2 | "1" | "2"
 * type Result2 = ArrayOptionalIndexes<[string, string?, string?], true>;
 *
 * // number
 * type Result3 = ArrayOptionalIndexes<(string | undefined)[]>;
 *
 * // never
 * type Never1 = ArrayOptionalIndexes<[string, string, string]>;
 *
 * // never
 * type Never2 = ArrayOptionalIndexes<any>;
 */
export type ArrayOptionalIndexes<
  T,
  IncludeString extends boolean = false
> = T extends ReadonlyArray
  ? _IfNotAnyOrNever<
      T,
      _ArrayOptionalIndexes<T> extends infer IndexesNumber extends number
        ? number extends IndexesNumber
          ? IndexesNumber
          : IsTrue<IncludeString> extends true
            ? IndexesNumber | ParseString<IndexesNumber>
            : IndexesNumber
        : never
    >
  : never;

/**
 * Get the required elements from `T` type.
 *
 * @template T The `Array` type to extract required elements from.
 * @returns The elements of `T` that are required.
 * @example
 * // 0 | 1
 * type Result1 = ArrayRequiredElements<[0, 1, 2?]>;
 *
 * // string | undefined
 * type Result2 = ArrayRequiredElements<(string | undefined)[]>;
 *
 * // never
 * type Never1 = ArrayRequiredElements<[0?, 1?, 2?]>;
 *
 * // never
 * type Never2 = ArrayRequiredElements<any>;
 */
export type ArrayRequiredElements<T> =
  T extends ReadonlyArray<infer Elements>
    ? _IfNotAnyOrNever<T, _ArrayRequiredElements<T, Elements>>
    : never;

/**
 * Get the optional elements from `T` type.
 *
 * @template T The `Array` type to extract optional elements from.
 * @returns The elements of `T` that are optional.
 * @example
 * // 1 | 2 | undefined
 * type Result1 = ArrayOptionalElements<[0, 1?, 2?]>;
 *
 * // string | undefined
 * type Result2 = ArrayOptionalElements<(string | undefined)[]>;
 *
 * // never
 * type Never1 = ArrayOptionalElements<[0, 1, 2]>;
 *
 * // never
 * type Never2 = ArrayOptionalElements<any>;
 */
export type ArrayOptionalElements<T> =
  T extends ReadonlyArray<infer Elements>
    ? _IfNotAnyOrNever<T, _ArrayOptionalElements<T, Elements>>
    : never;

/**
 * Alias for {@link ArrayRequiredElements `ArrayRequiredElements`}.
 */
export type ArrayRequiredValues<T> = ArrayRequiredElements<T>;

/**
 * Alias for {@link ArrayOptionalElements `ArrayOptionalElements`}.
 */
export type ArrayOptionalValues<T> = ArrayOptionalElements<T>;

/**
 * Omit the required elements from `T` type.
 *
 * @template T The `Array` type to omit the required elements from.
 * @template OmitHole Whether to omit the hole or not. Defaults to `true`.
 * @returns `Array` with elements of `T` that are optional.
 * @example
 * // [string?, string?]
 * type Result1 = ArrayOmitRequired<[string, string, string?, string?]>;
 *
 * // [unknown?, string?, string?]
 * type Result2 = ArrayOmitRequired<[string, string?, string?], false>;
 *
 * // never
 * type Never = ArrayOmitRequired<any>;
 */
export type ArrayOmitRequired<
  T extends ReadonlyArray,
  OmitHole extends boolean = true
> = T extends ReadonlyArray
  ? _IfNotAnyOrNever<T, _ArrayOmitRequired<T, OmitHole>>
  : never;

/**
 * Omit the optional elements from `T` type.
 *
 * @template T The `Array` type to omit the optional elements from.
 * @returns `Array` with elements of `T` that are required.
 * @example
 * // [string, string]
 * type Result = ArrayOmitOptional<[string, string, string?]>;
 *
 * // never
 * type Never = ArrayOmitOptional<any>;
 */
export type ArrayOmitOptional<T> = T extends ReadonlyArray
  ? _IfNotAnyOrNever<T, _ArrayOmitOptional<T>>
  : never;

/**
 * Converts an `Array` or `Tuple` type into an `object` type with numeric keys.
 *
 * - For a `Tuple`, keys are the `Tuple` indices and values are the corresponding elements.
 * - For an `Array`, the keys are numbers and values are the `Array` elements.
 *
 * @template T The `Array` or `Tuple` type to convert.
 * @returns An `object` type where:
 * @example
 * // { 0: string, 1: number }
 * type Result1 = ArrayToObject<[string, number]>;
 *
 * // { [x: number]: string }
 * type Result2 = ArrayToObject<string[]>;
 *
 * // never
 * type Never = ArrayToObject<any>;
 */
export type ArrayToObject<T> = T extends ReadonlyArray
  ? _IfNotAnyOrNever<T, _ArrayToObject<T>>
  : never;

/**
 * Assign the elements of `Source` into `Target`.
 *
 * It's like {@link ObjectAssign} but for `Array` only.
 *
 * - If `Target` is readonly, it returns `Target` as is. In order to follow the actual result of Object.assign.
 * - If either `Target` or `Source` is not an `Array` or `Tuple`, it returns `Target` as is.
 *
 * @template Target The target `Array` or `Tuple`.
 * @template Source The `Array` or `Tuple` to be assigned to the `Target`.
 * @returns A new `Array` or `Tuple` combining elements from both `Target` and `Source`.
 * @example
 * // [0, 1, 2]
 * type Result1 = ArrayAssign<[1, 2], [0, 1, 2]>;
 *
 * // (string | number)[]
 * type Result2 = ArrayAssign<string[], number[]>;
 *
 * // readonly [1, 2]
 * type Result3 = ArrayAssign<readonly [1, 2], [0, 1, 2]>;
 */
export type ArrayAssign<
  Target extends ReadonlyArray,
  Source = []
> = _ArrayAssign<Target, Source>;

/**
 * Overwrite elements of `Target` with elements of `Source`.
 *
 * This type will overwrite all nested `Array` types (if `Z` is `'deep'`).
 *
 * @template Target The `Array` to be overwritten.
 * @template Source The `Array` to be assigned to the `Target`.
 * @template Z Defines the lookup type, which can be `'deep'` or `'shallow'`, defaults to `'shallow'`.
 * @returns A new `Array` type that overwrites `Target` elements with `Source` elements.
 * @example
 * type Arr1 = [string, [string, string]];
 * type Arr2 = [number, [number], number];
 *
 * // [number, [number], number]
 * type Shallow = ArrayOverwrite<Arr1, Arr2, 'shallow'>;
 *
 * // [number, [number, string], number]
 * type Deep = ArrayOverwrite<Arr1, Arr2, 'deep'>;
 */
export type ArrayOverwrite<
  Target extends ReadonlyArray,
  Source extends ReadonlyArray = [],
  Z extends _LookupType = 'shallow'
> =
  IsArray<Target | Source> extends true
    ? _ArrayOverwrite<Target, Source, Z>
    : never;

/**
 * Merges elements of `Target` with elements of `Source`.
 *
 * This type will merge all nested `Array` types (if `Z` is `'deep'`).
 *
 * @template Target The `Array` to be overwritten.
 * @template Source The `Array` to be assigned to the `Target`.
 * @template Z Defines the lookup type, which can be `'deep'` or `'shallow'`, defaults to `'shallow'`.
 * @returns A new `Array` type that merges `Target` elements with `Source` elements.
 * @example
 * type Arr1 = [string, [string, string]];
 * type Arr2 = [number, [number], number];
 *
 * // [string | number, [number] | [string, string], number]
 * type Shallow = ArrayMerge<Arr1, Arr2, 'shallow'>;
 *
 * // [string | number, [string | number, string], number]
 * type Deep = ArrayMerge<Arr1, Arr2, 'deep'>;
 */
export type ArrayMerge<
  Target extends ReadonlyArray,
  Source extends ReadonlyArray = [],
  Z extends _LookupType = 'shallow'
> =
  IsArray<Target | Source> extends true
    ? _ArrayMerge<Target, Source, Z>
    : never;

/**
 * Unions the elements of an `Array` with a specified `UnionType`, creating a new `Array` where each element
 * is either the original element or the `UnionType`.
 *
 * This type will unionize all nested `Array` types (if `Z` is `'deep'`).
 *
 * @template Target The `Array` to be unionized.
 * @template UnionType The type to union with each element of the `Target`.
 * @template Z Defines the lookup type, which can be `'deep'` or `'shallow'`, defaults to `'shallow'`.
 * @example
 * // [string | number, number | [number, boolean]]
 * type Shallow = ArrayUnionize<[string, [number, boolean]], number, 'shallow'>;
 *
 * // [string | number, [number, number | boolean]]
 * type Deep = ArrayUnionize<[string, [number, boolean]], number, 'deep'>;
 */
export type ArrayUnionize<
  Target extends ReadonlyArray,
  UnionType,
  Z extends _LookupType = 'shallow'
> = IsArray<Target> extends true ? _ArrayUnionize<Target, UnionType, Z> : never;
