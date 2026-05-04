[typelab](README.md) / utils

Handy set of TypeScript utility types for transforming and working with other types.
Includes helpers for arrays, objects, unions, functions, and common type operations
like extracting, excluding, mapping, and parsing.

## Type Aliases

<table>
<thead>
<tr>
<th>Type Alias</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

[ArrayLength](utils/ArrayLength.md)

</td>
<td>

Extracts the `length` of an `Array` type.

**Example**

```ts
type Length = ArrayLength<[1, 2, 3]>; // 3
type Length2 = ArrayLength<string[]>; // number
type Never = ArrayLength<any>; // never
```

</td>
</tr>
<tr>
<td>

[ArrayElements](utils/ArrayElements.md)

</td>
<td>

Extracts the elements of an `Array` type`.

**Example**

```ts
type Elements = ArrayElements<[string, number]>; // string | number
type Never = ArrayElements<any>; // never
```

</td>
</tr>
<tr>
<td>

[ArrayValues](utils/ArrayValues.md)

</td>
<td>

Alias for [\`ArrayElements\`](utils/ArrayElements.md).

Extracts the values of an `Array` type`.

**Example**

```ts
type Values = ArrayValues<[string, number]>; // string | number
type Never = ArrayValues<any>; // never
```

</td>
</tr>
<tr>
<td>

[ArrayIndexes](utils/ArrayIndexes.md)

</td>
<td>

Extracts the index keys of an `Array` or `Tuple` type.

- For a `Tuple`, returns `T` index union.
- For a general `Array`, returns `number` since arrays are indexed by numbers.

**Example**

```ts
// 0 | 1 | 2
type Result1 = ArrayIndexes<[string, number, boolean]>;

// 0 | 1 | 2 | "0" | "1" | "2"
type Result2 = ArrayIndexes<[string, number, boolean], true>;

// number
type Result3 = ArrayIndexes<string[]>;

// never
type Never = ArrayIndexes<any>;
```

</td>
</tr>
<tr>
<td>

[ArrayAt](utils/ArrayAt.md)

</td>
<td>

Extracts the type of an element at a specific index from an `Array` type.

**Example**

```ts
type ElementAt = ArrayAt<[string, number, boolean], 1>; // number
type Undefined = ArrayAt<[string, number, boolean], 3>; // undefined
type Never = ArrayAt<any, 1>; // never
```

</td>
</tr>
<tr>
<td>

[ArrayFirst](utils/ArrayFirst.md)

</td>
<td>

Extracts the type of the first element of an `Array` type.

**Example**

```ts
// string
type FirstElement = ArrayFirst<[string, number, boolean]>;

// string | number | boolean
type AllElements = ArrayFirst<(string | number | boolean)[]>;

// never
type Never = ArrayFirst<any>;
```

</td>
</tr>
<tr>
<td>

[ArrayLast](utils/ArrayLast.md)

</td>
<td>

Extracts the type of the last element of an `Array` type.

**Example**

```ts
// boolean
type LastElement = ArrayLast<[string, number, boolean]>;

// string | number | boolean
type AllElements = ArrayLast<(string | number | boolean)[]>;

// never
type Never = ArrayLast<any>;
```

</td>
</tr>
<tr>
<td>

[ArrayConcat](utils/ArrayConcat.md)

</td>
<td>

Concatenates two `Array` types into one.

**Template**

The first `Array` type to concatenate.

**Template**

The second `Array` type to concatenate.

**Example**

```ts
// [string, number, boolean, object]
type Concatenated1 = ArrayConcat<[string, number], [boolean, object]>;

// [...string[], boolean, object]
type Concatenated2 = ArrayConcat<string[], [boolean, object]>;

// [string, number, ...object[]]
type Concatenated3 = ArrayConcat<[string, number], object[]>;

// [string, number, any]
type Concatenated4 = ArrayConcat<[string, number], any>;

// never
type Never = ArrayConcat<any, [string, number]>;
```

</td>
</tr>
<tr>
<td>

[ArrayPush](utils/ArrayPush.md)

</td>
<td>

Adds a new element to the end of a `Writable Array` type.

**Example**

```ts
type Pushed = ArrayPush<[string, number], boolean>; // [string, number, boolean]
type Same = ArrayPush<[string, number], never>; // [string, number]
type Never1 = ArrayPush<readonly [string, number], string> // never
type Never2 = ArrayPush<any, string> // never
```

</td>
</tr>
<tr>
<td>

[ArrayPop](utils/ArrayPop.md)

</td>
<td>

Removes the last element from an `Writable Array` type.
If the `Array` is a `Tuple`, the result will be a new `Tuple` without the last element.
If the `Array` is not a `Tuple`, the result will be the original `Array` type.

**Example**

```ts
type Popped = ArrayPop<[string, number]>; // [string]
type Same = ArrayPop<(string | number)[]>; // (string | number)[]
type Never1 = ArrayPop<readonly [string, number]>; // never
type Never2 = ArrayPop<any>; // never
```

</td>
</tr>
<tr>
<td>

[ArrayUnshift](utils/ArrayUnshift.md)

</td>
<td>

Adds a new element to the beginning of an `Writable Array` type.

**Example**

```ts
// [boolean, string, number]
type Unshifted = ArrayUnshift<[string, number], boolean>;

// [string, number]
type Same = ArrayUnshift<[string, number], never>;

// never
type Never1 = ArrayPush<readonly [string, number], string>;

// never
type Never2 = ArrayPush<any, string>;
```

</td>
</tr>
<tr>
<td>

[ArrayShift](utils/ArrayShift.md)

</td>
<td>

Removes the first element from an `Writable Array` type.
If the `Array` is a `Tuple`, the result will be a new `Tuple` without the first element.
If the `Array` is not a `Tuple`, the result will be the original `Array` type.

**Example**

```ts
type Shifted = ArrayShift<[string, number]>; // [number]
type Same = ArrayShift<(string | number)[]>; // (string | number)[]
type Never1 = ArrayShift<readonly [string, number]>; // never
type Never2 = ArrayShift<any>; // never
```

</td>
</tr>
<tr>
<td>

[ArrayFlat](utils/ArrayFlat.md)

</td>
<td>

Type that flattens a nested `Array` structure into a single `Array`.
If an element is an `Array`, it will recursively flatten it until no `Array` remains.

**Example**

```ts
// [0, 1, 2, 3, 4, 5, 6, 7]
type Flattened1 = ArrayFlat<[0, 1, [2, 3, [4, 5, [6, 7[]]]]]>;

// (0 | 1 | 2 | 3 | 4 | 5 | 6 | 7)[]
type Flattened2 = ArrayFlat<(0 | 1 | [2] | [3] | [[4]] | [[5]] | [[[6]]] | [[[7[]]]])[]>;

// never
type Never = ArrayFlat<any>;
```

</td>
</tr>
<tr>
<td>

[ArrayTake](utils/ArrayTake.md)

</td>
<td>

Takes the first `TakeLength` elements from an array (or tuple).

If `TakeLength` is negative, the elements are taken starting from the end of the array/tuple.

**Example**

```ts
type Result1 = ArrayTake<[1, 2, 3, 4], 2>; // [1, 2]
type Result2 = ArrayTake<[1, 2, 3, 4], -2>; // [3, 4]
type Result3 = ArrayTake<[1, 2, 3, 4], 5>; // [1, 2, 3, 4]
type Result4 = ArrayTake<[1, 2, 3, 4]>; // [1, 2, 3, 4]
type Never1 = ArrayTake<[1, 2, 3, 4], any>; // never
type Never2 = ArrayTake<[1, 2, 3, 4], never>; // never
type Never3 = ArrayTake<any, 1>; // never
```

</td>
</tr>
<tr>
<td>

[ArraySkip](utils/ArraySkip.md)

</td>
<td>

Skips the first `SkipLength` elements from an array (or tuple).

If `SkipLength` is negative, the elements are skipped starting from the end of the array/tuple.

**Example**

```ts
type Result1 = ArraySkip<[1, 2, 3, 4], 2>; // [3, 4]
type Result2 = ArraySkip<[1, 2, 3, 4], -2>; // [1, 2]
type Result3 = ArraySkip<[1, 2, 3, 4], 5>; // []
type Result4 = ArraySkip<[1, 2, 3, 4]>; // [1, 2, 3, 4]
type Never1 = ArraySkip<[1, 2, 3, 4], any>; // never
type Never2 = ArraySkip<any, 1>; // never
```

</td>
</tr>
<tr>
<td>

[ArrayRequired](utils/ArrayRequired.md)

</td>
<td>

Extended TypeScript [\`Required\`](#) to handle `Array`.

**Example**

```ts
type Result1 = ArrayRequired<[string?, string?]>; // [string, string]
type Result2 = ArrayRequired<[string?, string?], 0>; // [string, string?]
type Result3 = ArrayRequired<[string?, string?], 0, true>; // [string | undefined, string?]
type Never1 = ArrayRequired<[string?, string?], any>; // never
type Never2 = ArrayRequired<any, 1>; // never
```

</td>
</tr>
<tr>
<td>

[ArrayPartial](utils/ArrayPartial.md)

</td>
<td>

Extended TypeScript [\`Partial\`](#) to handle `Array`.

**Example**

```ts
type Result1 = ArrayPartial<[string, string]>; // [string?, string?]
type Result2 = ArrayPartial<[string, string], 1>; // [string, string?]
type Never1 = ArrayPartial<[string, string], any>; // never
type Never2 = ArrayPartial<any, 1>; // never
```

</td>
</tr>
<tr>
<td>

[ArrayRequiredIndexes](utils/ArrayRequiredIndexes.md)

</td>
<td>

Get the required indexes from `T` type.

**Example**

```ts
// 0 | 1
type Result1 = ArrayRequiredIndexes<[string, string, string?]>;

// 0 | 1 | "0" | "1"
type Result2 = ArrayRequiredIndexes<[string, string, string?], true>;

// number
type Result3 = ArrayRequiredIndexes<(string | undefined)[]>;

// never
type Never1 = ArrayRequiredIndexes<[string?, string?, string?]>;

// never
type Never2 = ArrayRequiredIndexes<any>;
```

</td>
</tr>
<tr>
<td>

[ArrayOptionalIndexes](utils/ArrayOptionalIndexes.md)

</td>
<td>

Get the optional indexes from `T` type.

**Example**

```ts
// 1 | 2
type Result1 = ArrayOptionalIndexes<[string, string?, string?]>;

// 1 | 2 | "1" | "2"
type Result2 = ArrayOptionalIndexes<[string, string?, string?], true>;

// number
type Result3 = ArrayOptionalIndexes<(string | undefined)[]>;

// never
type Never1 = ArrayOptionalIndexes<[string, string, string]>;

// never
type Never2 = ArrayOptionalIndexes<any>;
```

</td>
</tr>
<tr>
<td>

[ArrayRequiredElements](utils/ArrayRequiredElements.md)

</td>
<td>

Get the required elements from `T` type.

**Example**

```ts
// 0 | 1
type Result1 = ArrayRequiredElements<[0, 1, 2?]>;

// string | undefined
type Result2 = ArrayRequiredElements<(string | undefined)[]>;

// never
type Never1 = ArrayRequiredElements<[0?, 1?, 2?]>;

// never
type Never2 = ArrayRequiredElements<any>;
```

</td>
</tr>
<tr>
<td>

[ArrayOptionalElements](utils/ArrayOptionalElements.md)

</td>
<td>

Get the optional elements from `T` type.

**Example**

```ts
// 1 | 2 | undefined
type Result1 = ArrayOptionalElements<[0, 1?, 2?]>;

// string | undefined
type Result2 = ArrayOptionalElements<(string | undefined)[]>;

// never
type Never1 = ArrayOptionalElements<[0, 1, 2]>;

// never
type Never2 = ArrayOptionalElements<any>;
```

</td>
</tr>
<tr>
<td>

[ArrayRequiredValues](utils/ArrayRequiredValues.md)

</td>
<td>

Alias for [\`ArrayRequiredElements\`](utils/ArrayRequiredElements.md).

</td>
</tr>
<tr>
<td>

[ArrayOptionalValues](utils/ArrayOptionalValues.md)

</td>
<td>

Alias for [\`ArrayOptionalElements\`](utils/ArrayOptionalElements.md).

</td>
</tr>
<tr>
<td>

[ArrayOmitRequired](utils/ArrayOmitRequired.md)

</td>
<td>

Omit the required elements from `T` type.

**Example**

```ts
// [string?, string?]
type Result1 = ArrayOmitRequired<[string, string, string?, string?]>;

// [unknown?, string?, string?]
type Result2 = ArrayOmitRequired<[string, string?, string?], false>;

// never
type Never = ArrayOmitRequired<any>;
```

</td>
</tr>
<tr>
<td>

[ArrayOmitOptional](utils/ArrayOmitOptional.md)

</td>
<td>

Omit the optional elements from `T` type.

**Example**

```ts
// [string, string]
type Result = ArrayOmitOptional<[string, string, string?]>;

// never
type Never = ArrayOmitOptional<any>;
```

</td>
</tr>
<tr>
<td>

[ArrayToObject](utils/ArrayToObject.md)

</td>
<td>

Converts an `Array` or `Tuple` type into an `object` type with numeric keys.

- For a `Tuple`, keys are the `Tuple` indices and values are the corresponding elements.
- For an `Array`, the keys are numbers and values are the `Array` elements.

**Example**

```ts
// { 0: string, 1: number }
type Result1 = ArrayToObject<[string, number]>;

// { [x: number]: string }
type Result2 = ArrayToObject<string[]>;

// never
type Never = ArrayToObject<any>;
```

</td>
</tr>
<tr>
<td>

[ArrayAssign](utils/ArrayAssign.md)

</td>
<td>

Assign the elements of `Source` into `Target`.

It's like [ObjectAssign](utils/ObjectAssign.md) but for `Array` only.

- If `Target` is readonly, it returns `Target` as is. In order to follow the actual result of Object.assign.
- If either `Target` or `Source` is not an `Array` or `Tuple`, it returns `Target` as is.

**Example**

```ts
// [0, 1, 2]
type Result1 = ArrayAssign<[1, 2], [0, 1, 2]>;

// (string | number)[]
type Result2 = ArrayAssign<string[], number[]>;

// readonly [1, 2]
type Result3 = ArrayAssign<readonly [1, 2], [0, 1, 2]>;
```

</td>
</tr>
<tr>
<td>

[ArrayOverwrite](utils/ArrayOverwrite.md)

</td>
<td>

Overwrite elements of `Target` with elements of `Source`.

This type will overwrite all nested `Array` types (if `Z` is `'deep'`).

**Example**

```ts
type Arr1 = [string, [string, string]];
type Arr2 = [number, [number], number];

// [number, [number], number]
type Shallow = ArrayOverwrite<Arr1, Arr2, 'shallow'>;

// [number, [number, string], number]
type Deep = ArrayOverwrite<Arr1, Arr2, 'deep'>;
```

</td>
</tr>
<tr>
<td>

[ArrayMerge](utils/ArrayMerge.md)

</td>
<td>

Merges elements of `Target` with elements of `Source`.

This type will merge all nested `Array` types (if `Z` is `'deep'`).

**Example**

```ts
type Arr1 = [string, [string, string]];
type Arr2 = [number, [number], number];

// [string | number, [number] | [string, string], number]
type Shallow = ArrayMerge<Arr1, Arr2, 'shallow'>;

// [string | number, [string | number, string], number]
type Deep = ArrayMerge<Arr1, Arr2, 'deep'>;
```

</td>
</tr>
<tr>
<td>

[ArrayUnionize](utils/ArrayUnionize.md)

</td>
<td>

Unions the elements of an `Array` with a specified `UnionType`, creating a new `Array` where each element
is either the original element or the `UnionType`.

This type will unionize all nested `Array` types (if `Z` is `'deep'`).

**Example**

```ts
// [string | number, number | [number, boolean]]
type Shallow = ArrayUnionize<[string, [number, boolean]], number, 'shallow'>;

// [string | number, [number, number | boolean]]
type Deep = ArrayUnionize<[string, [number, boolean]], number, 'deep'>;
```

</td>
</tr>
<tr>
<td>

[Brand](utils/Brand.md)

</td>
<td>

Create a branded version of a base type.

**Example**

```ts
type UserId = Brand<string, 'UserId'>; // string & { __brand: "UserId" }
type OrderId = Brand<string, 'OrderId'>; // string & { __brand: "OrderId" }
type IsEqual = [UserId, OrderId] extends [OrderId, UserId] ? true : false; // false
```

</td>
</tr>
<tr>
<td>

[Detailed](utils/Detailed.md)

</td>
<td>

Recursively applies a deep transformation to each property of `T`, only if `T` is `ObjectLiteral`.

**Example**

```ts
type ComplexObj = Required<{ b?: string } & { c?: string }> & { d: string };
type Obj = { a: string; nested: ComplexObj };

// Detail is { a: string; nested: { b: string; c: string; d: string }; }
type Detail = Detailed<Obj>;
```

</td>
</tr>
<tr>
<td>

[ExcludeNullish](utils/ExcludeNullish.md)

</td>
<td>

Exclude `null` and `undefined` from type `T`.

**Example**

```ts
type NonNullishType = ExcludeNullish<string | null | undefined>; // string
```

</td>
</tr>
<tr>
<td>

[ExcludeNull](utils/ExcludeNull.md)

</td>
<td>

Exclude `null` from type `T`.

**Example**

```ts
type NonNullType = ExcludeNull<string | null>; // string
```

</td>
</tr>
<tr>
<td>

[ExcludeUndefined](utils/ExcludeUndefined.md)

</td>
<td>

Exclude `undefined` from type `T`.

**Example**

```ts
type NonUndefinedType = ExcludeUndefined<string | undefined>; // string
```

</td>
</tr>
<tr>
<td>

[ExtractArray](utils/ExtractArray.md)

</td>
<td>

Extract the value type from an `Array` type.

**Example**

```ts
type Valid = ExtractArray<number[]>; // number
type Invalid = ExtractArray<Promise<number>> // never
```

</td>
</tr>
<tr>
<td>

[ExtractPromise](utils/ExtractPromise.md)

</td>
<td>

Extract the value type from a `Promise` type.

**Example**

```ts
type Valid = ExtractPromise<Promise<number>>; // number
type Invalid = ExtractPromise<number>> // never
```

</td>
</tr>
<tr>
<td>

[ExtractParams](utils/ExtractParams.md)

</td>
<td>

Type that extracts the parameters from `Function`, `Newable Function`, or the constructor parameters of a `Class` type.

**Example**

```ts
// [string, number]
type FunctionParams = ExtractParams<(a: string, b: number) => void>;

// [string, number]
type NewableParams = ExtractParams<new (a: string, b: number) => { a: string; b: string }>;

class MyClass { constructor(public a: string, public b: number) {}}
// [string, number]
type ClassParams = ExtractParams<typeof MyClass>;
```

</td>
</tr>
<tr>
<td>

[ExtractReturn](utils/ExtractReturn.md)

</td>
<td>

Type that extracts the return type from `Function`, `Newable Function`, or the instance type of a `Class` type.

**Example**

```ts
// string
type FunctionReturn = ExtractReturn<(a: string, b: number) => string>;

// { a: string; b: string }
type NewableReturn = ExtractReturn<new (a: string, b: number) => { a: string; b: string }>;
```

</td>
</tr>
<tr>
<td>

[FunctionAssign](utils/FunctionAssign.md)

</td>
<td>

Assign the parameter and return types of `Source` into `Target`.

Use [\`ArrayAssign\`](utils/ArrayAssign.md) for the parameter type and [\`ObjectAssign\`](utils/ObjectAssign.md) for the return type.

- If `Target` or `Source` is not `Function`, it returns `never`.

**Example**

```ts
// (param_0: number, param_1: string) => { a: number; b: string }
type Result = FunctionAssign<(...param: [string, string]) => { a: string; b: string }, (...param: [number]) => { a: number }>
```

</td>
</tr>
<tr>
<td>

[FnAssign](utils/FnAssign.md)

</td>
<td>

Alias for [\`FunctionAssign\`](utils/FunctionAssign.md).

</td>
</tr>
<tr>
<td>

[FunctionOverwrite](utils/FunctionOverwrite.md)

</td>
<td>

Overwrite the parameter and return types of `Target` with parameter and return types of `Source`.

Use [\`ArrayOverwrite\`](utils/ArrayOverwrite.md) for the parameter type and [\`ObjectOverwrite\`](utils/ObjectOverwrite.md) for the return type.

- If `Target` or `Source` is not `Function`, it returns `never`.

**Example**

```ts
type Obj1 = { a: string; b: { a: string } };
type Obj2 = { a: number; b: { b: number } };

// (param_0: number, param_1: string) => { a: number; b: { b: number; }; }
type Shallow = FunctionOverwrite<(...param: [string, string]) => Obj1, (...param: [number]) => Obj2, 'shallow'>;

// (param_0: number, param_1: string) => { a: number; b: { a: string, b: number; }; }
type Deep = FunctionOverwrite<(...param: [string, string]) => Obj1, (...param: [number]) => Obj2, 'deep'>;
```

</td>
</tr>
<tr>
<td>

[FnOverwrite](utils/FnOverwrite.md)

</td>
<td>

Alias for [\`FunctionOverwrite\`](utils/FunctionOverwrite.md).

</td>
</tr>
<tr>
<td>

[FunctionMerge](utils/FunctionMerge.md)

</td>
<td>

Merges the parameter and return types of `Source` into `Target`.

Use [\`ArrayMerge\`](utils/ArrayMerge.md) for the parameter type and [\`ObjectMerge\`](utils/ObjectMerge.md) for the return type.

- If `Target` or `Source` is not `Function`, it returns `never`.

**Example**

```ts
type Obj1 = { a: string; b: { a: string } };
type Obj2 = { a: number; b: { b: number } };

// (param_0: string | number, param_1: string) => { a: string | number; b: { a: string; } | { b: number; }; }
type Shallow = FunctionMerge<(...param: [string, string]) => Obj1, (...param: [number]) => Obj2, 'shallow'>;

// (param_0: string | number, param_1: string) => { a: string | number; b: { a: string; b: number; }; }
type Deep = FunctionMerge<(...param: [string, string]) => Obj1, (...param: [number]) => Obj2, 'deep'>;
```

</td>
</tr>
<tr>
<td>

[FnMerge](utils/FnMerge.md)

</td>
<td>

Alias for [\`FunctionMerge\`](utils/FunctionMerge.md).

</td>
</tr>
<tr>
<td>

[FunctionPromisify](utils/FunctionPromisify.md)

</td>
<td>

Converts a `Function` type that returns a `Promise` instead of the original return type.

If the `Function` takes a callback (e.g., `(error, result) => void`), it converts the `Function`
to return a `Promise` with the callback result. Otherwise, it wraps the return type in a `Promise`.

**Example**

```ts
// Callback-style function:
// (a: string) => Promise<string>
type Promisified = FunctionPromisify<(a: string, callback: (error: Error, result: string) => void) => void>;

// Regular function:
// (a: string) => Promise<string>
type PromisifiedFn = FunctionPromisify<(a: string) => string>;
```

</td>
</tr>
<tr>
<td>

[FnPromisify](utils/FnPromisify.md)

</td>
<td>

Alias for [\`FunctionPromisify\`](utils/FunctionPromisify.md).

</td>
</tr>
<tr>
<td>

[FunctionCallbackify](utils/FunctionCallbackify.md)

</td>
<td>

Converts an `Async Function` type into a `Callback-style Function`.

**Example**

```ts
// (a: string, callback: (error: unknown, result: string) => void) => void
type Callbackified = FunctionCallbackify<(a: string) => Promise<string>>;
```

</td>
</tr>
<tr>
<td>

[FnCallbackify](utils/FnCallbackify.md)

</td>
<td>

Alias for [\`FunctionCallbackify\`](utils/FunctionCallbackify.md).

</td>
</tr>
<tr>
<td>

[KeyOf](utils/KeyOf.md)

</td>
<td>

Extracts the keys of an `object` type.

**Example**

```ts
// Keys is 'a' | 'b'
type Keys = KeyOf<{ a: string; b: number }>;
```

</td>
</tr>
<tr>
<td>

[Mapped](utils/Mapped.md)

</td>
<td>

Recursively applies a shallow transformation to each property of `T`.

**Simpler version of [\`Detailed\`](utils/Detailed.md)**

**Example**

```ts
type Obj = Required<{ b?: string } & { c?: string }> & { d: string };

// Detail is { b: string; c: string; d: string }
type Detail = Mapped<Obj>;
```

</td>
</tr>
<tr>
<td>

[Increment](utils/Increment.md)

</td>
<td>

Increments a given `number` or `bigint` by 1.

**Example**

```ts
type IncrementNumber = Increment<5>; // 6
type IncrementBigInt = Increment<10n>; // 11n
type IncrementNegative = Increment<-3.14>; // -2.14
```

</td>
</tr>
<tr>
<td>

[Decrement](utils/Decrement.md)

</td>
<td>

Decrements a given `number` or `bigint` by 1.

**Example**

```ts
type DecrementNumber = Decrement<5>; // 4
type DecrementBigInt = Decrement<10n>; // 9n
type DecrementNegative = Decrement<-3.14>; // -4.14
```

</td>
</tr>
<tr>
<td>

[ObjectPick](utils/ObjectPick.md)

</td>
<td>

Extended TypeScript [\`Pick\`](#) to pick `K` from `T`.

**Example**

```ts
type Obj = { a: string; b: string };

// { a: string; }
type Picked = ObjectPick<Obj, 'a'>;
```

</td>
</tr>
<tr>
<td>

[ObjectRequired](utils/ObjectRequired.md)

</td>
<td>

Extended TypeScript [\`Required\`](#) to enforce specific properties as required.

**Example**

```ts
type Obj = { a?: string; b?: string };

// { a: string; b?: string }
type RequiredObj = ObjectRequired<Obj, 'a'>;
```

</td>
</tr>
<tr>
<td>

[ObjectPartial](utils/ObjectPartial.md)

</td>
<td>

Extended TypeScript [\`Partial\`](#) to make specific properties optional.

**Example**

```ts
type Obj = { a: string; b: string };

// { a?: string; b: string }
type PartialObj = ObjectPartial<Obj, 'a'>;
```

</td>
</tr>
<tr>
<td>

[ObjectRequiredKeys](utils/ObjectRequiredKeys.md)

</td>
<td>

Get the required keys from `T` type.

**Example**

```ts
type Obj = { a: number; b: string | undefined; c?: boolean };
type RequiredKeys = ObjectRequiredKeys<Obj>; // "a" | "b"
```

</td>
</tr>
<tr>
<td>

[ObjectOptionalKeys](utils/ObjectOptionalKeys.md)

</td>
<td>

Get the optional keys from `T` type.

**Example**

```ts
type Obj = { a: number; b: string | undefined; c?: boolean };
type OptionalKeys = ObjectOptionalKeys<Obj>; // "c"
```

</td>
</tr>
<tr>
<td>

[ObjectOmitRequired](utils/ObjectOmitRequired.md)

</td>
<td>

Get the optional properties from `T` type.

This type will lookup all nested objects (if `Z` is `'deep'`).

**Example**

```ts
type Obj = { a: string | undefined; b?: string; c?: { d: string; e?: string } };

// { b?: string; c?: { d: string; e?: string; }; }
type Shallow = ObjectOmitRequired<Obj, 'shallow'>;

// { b?: string; c?: { e?: string; }; }
type Deep = ObjectOmitRequired<Obj, 'deep'>;
```

</td>
</tr>
<tr>
<td>

[ObjectOmitOptional](utils/ObjectOmitOptional.md)

</td>
<td>

Get the required properties from `T` type.

This type will lookup all nested objects (if `Z` is `'deep'`).

**Example**

```ts
type Obj = { a: string | undefined; b?: string; c: { d: string, e?: string } };

// { a: string | undefined; c: { d: string; e?: string } }
type Shallow = ObjectOmitOptional<Obj, 'shallow'>;

// { a: string | undefined; c: { d: string; }}
type Deep = ObjectOmitOptional<Obj, 'deep'>;
```

</td>
</tr>
<tr>
<td>

[ObjectReadonly](utils/ObjectReadonly.md)

</td>
<td>

Extended TypeScript [\`Readonly\`](#) to enforce specific properties as readonly.

**Example**

```ts
type Obj = { a: string; b: string };

// { readonly a: string; b: string }
type ReadonlyObj = ObjectReadonly<Obj, 'a'>;
```

</td>
</tr>
<tr>
<td>

[ObjectWritable](utils/ObjectWritable.md)

</td>
<td>

Enforce specific properties as writable.

**Example**

```ts
type Obj = { readonly a: string; b: string };

// WritableObj is { a: string; b: string; }
type WritableObj = ObjectWritable<Obj, 'a'>;
```

</td>
</tr>
<tr>
<td>

[ObjectPath](utils/ObjectPath.md)

</td>
<td>

Get all of the paths from `T` as a `string` union.

**Example**

```ts
type Obj = { a: { b: number }; c: string };
type Paths = ObjectPath<Obj>; // "a" | "a.b" | "c"
```

</td>
</tr>
<tr>
<td>

[ObjectPathValue](utils/ObjectPathValue.md)

</td>
<td>

Get the type of a property based on a given path.

**Example**

```ts
type Obj = { a: { b: number }; c: string };
type ValueType = ObjectPathValue<Obj, 'a.b'>; // number
```

</td>
</tr>
<tr>
<td>

[ObjectToTuple](utils/ObjectToTuple.md)

</td>
<td>

Converts an `object` into a `Tuple` of its values.

- If `IncludeNonIndex` is `false`, only properties with numeric keys are included.
- If `IncludeNonIndex` is `true`, all properties are included.

⚠️ **Does not guarantee correct order**, if `IncludeNonIndex` is `true`.

**Example**

```ts
type Obj1 = { 0: string; 1: number; 2: boolean };
// [string, number, boolean]
type TupleType1 = ObjectToTuple<Obj1>;

type Obj2 = { a: 'a'; b: 'b'; c: 'c' };
// ['a', 'b, 'c']
type TupleType2 = ObjectToTuple<Obj2, true>;
```

</td>
</tr>
<tr>
<td>

[ObjectAssign](utils/ObjectAssign.md)

</td>
<td>

Assign properties of `Source` into `Target`.

The result of type follows the actual result of `Object.assign`.

**Example**

```ts
// { a: string; b: string; c: boolean }
type Assign1 = ObjectAssign<{ a: string; b: number }, { b: string; c: boolean }>;

// { a: string; 0: string }
type Assign2 = ObjectAssign<{ a: string }, [string]>;

// { [x: number]: string, a: string }
type Assign3 = ObjectAssign<{ a: string }, string[]>;

// [number, number]
type Assign4 = ObjectAssign<[string], [number, number]>;

// (string | number)[]
type Assign5 = ObjectAssign<string[], [number, number]>;

// (string | number)[]
type Assign6 = ObjectAssign<string[], number[]>;

// [number, string]
type Assign7 = ObjectAssign<[string], { 0: number; 1: string }>;

// (string | number)[]
type Assign8 = ObjectAssign<[number], 'str'>;

// { [x: number]: string, a: string }
type Assign9 = ObjectAssign<{a: string}, 'str'>;
```

</td>
</tr>
<tr>
<td>

[ObjectOverwrite](utils/ObjectOverwrite.md)

</td>
<td>

Overwrite properties of `Target` with properties of `Source`.

This type will overwrite all nested `object` types (if `Z` is `'deep'`).

**Example**

```ts
type Obj1 = { a: string; b: string; c: { a: string } };
type Obj2 = { b: number; c: { b: number }; d: number };

// { a: string; b: number; c: { b: number; }; d: number }
type Shallow = ObjectOverwrite<Obj1, Obj2, 'shallow'>;

// { a: string; b: number; c: { a: string; b: number; }; d: number }
type Deep = ObjectOverwrite<Obj1, Obj2, 'deep'>;
```

</td>
</tr>
<tr>
<td>

[ObjectMerge](utils/ObjectMerge.md)

</td>
<td>

Merges properties of `Target` and `Source`.

This type will merge all nested `object` types (if `Z` is `'deep'`).

**Example**

```ts
type Obj1 = { a: string; b: string; c: { a: string; } };
type Obj2 = { b: number; c: { a: number; b: number }; d: number };

// { a: string; b: string | number; c: { a: string; } | { a: number; b: number }; d: number }
type Shallow = ObjectMerge<Obj1, Obj2, 'shallow'>;

// { a: string; b: string | number; c: { a: string | number; b: number; }; d: number }
type Deep = ObjectMerge<Obj1, Obj2, 'deep'>;
```

</td>
</tr>
<tr>
<td>

[ObjectUnionize](utils/ObjectUnionize.md)

</td>
<td>

Unions the properties of an `object` with a specified `UnionType`, creating a new `object` where each property
is either the original value or the `UnionType`.

This type will unionize all nested `object` types (if `Z` is `'deep'`).

**Example**

```ts
// { a: string | number; b: number | { a: string; }; }
type Shallow = ObjectUnionize<{ a: string; b: { a: string } }, number, 'shallow'>;

// { a: string | number; b: { a: string | number; }; }
type Deep = ObjectUnionize<{ a: string; b: { a: string } }, number, 'deep'>;
```

</td>
</tr>
<tr>
<td>

[ParseInt](utils/ParseInt.md)

</td>
<td>

Parses a `string` or `number` type into a `number`.

**Example**

```ts
type Int = ParseInt<'11'>; // 11
```

</td>
</tr>
<tr>
<td>

[ParseIntNegative](utils/ParseIntNegative.md)

</td>
<td>

Parses a `string` or `number` type into a negative `number`.

**Example**

```ts
type Int = ParseIntNegative<'11'>; // -11
```

</td>
</tr>
<tr>
<td>

[ParseIntPositive](utils/ParseIntPositive.md)

</td>
<td>

Parses a `string` or `number` type into a positive `number`.

**Example**

```ts
type Int = ParseIntPositive<'-11'>; // 11
```

</td>
</tr>
<tr>
<td>

[ParseFloat](utils/ParseFloat.md)

</td>
<td>

Parses a `string` or `number` type into a `number`.

**Example**

```ts
type Float = ParseFloat<'11.1'>; // 11.1
```

</td>
</tr>
<tr>
<td>

[ParseFloatNegative](utils/ParseFloatNegative.md)

</td>
<td>

Parses a `string` or `number` type into a negative `number`.

**Example**

```ts
type Float = ParseFloatNegative<'11.1'>; // -11.1
```

</td>
</tr>
<tr>
<td>

[ParseFloatPositive](utils/ParseFloatPositive.md)

</td>
<td>

Parses a `string` or `number` type into a positive `number`.

**Example**

```ts
type Float = ParseFloatPositive<'-11.1'>; // 11.1
```

</td>
</tr>
<tr>
<td>

[ParseBigInt](utils/ParseBigInt.md)

</td>
<td>

Parses a `string` or `number` type into a `bigint`.

**Example**

```ts
type Bigi = ParseBigInt<'11n'>; // 11n
```

</td>
</tr>
<tr>
<td>

[ParseBigIntNegative](utils/ParseBigIntNegative.md)

</td>
<td>

Parses a `string` or `number` type into a negative `bigint`.

**Example**

```ts
type Bigi = ParseBigIntNegative<'11'>; // -11n
```

</td>
</tr>
<tr>
<td>

[ParseBigIntPositive](utils/ParseBigIntPositive.md)

</td>
<td>

Parses a `string` or `number` type into a positive `bigint`.

**Example**

```ts
type Bigi = ParseBigIntPositive<'-11'>; // 11n
```

</td>
</tr>
<tr>
<td>

[ParseString](utils/ParseString.md)

</td>
<td>

Converts a type to a `string`.

**Example**

```ts
type Stringified = ParseString<11>; // '11'
```

</td>
</tr>
<tr>
<td>

[ParseBoolean](utils/ParseBoolean.md)

</td>
<td>

Converts a type to a `boolean`.

**Example**

```ts
type True1 = ParseBoolean<'true'>; // true
type True2 = ParseBoolean<1>; // true
type False1 = ParseBoolean<'false'>; // false
type False2 = ParseBoolean<0>; // false
```

</td>
</tr>
<tr>
<td>

[ParseObject](utils/ParseObject.md)

</td>
<td>

Converts a type to an `object`.

**Example**

```ts
type Obj = ParseObject<true>; // { valueOf: () => boolean }
```

</td>
</tr>
<tr>
<td>

[PropValue](utils/PropValue.md)

</td>
<td>

Gets the type of a property `K` from `T`.

**Example**

```ts
type User = { name: string };
type Valid = PropValue<User, 'name'>; // string
type Invalid = PropValue<User, 'email'>; // never
```

</td>
</tr>
<tr>
<td>

[Toggle](utils/Toggle.md)

</td>
<td>

Toggle the values of a `boolean` type.

**Example**

```ts
type Toggled1 = Toggle<true>; // false
type Toggled2 = Toggle<false>; // true
```

</td>
</tr>
<tr>
<td>

[UnionToIntersection](utils/UnionToIntersection.md)

</td>
<td>

Converts a union type to an intersection type.

**Example**

```ts
// { a: number } & { b: string }
type Intersect = UnionToIntersection<{ a: number } | { b: string }>;
```

</td>
</tr>
<tr>
<td>

[UnionLast](utils/UnionLast.md)

</td>
<td>

Extracts the last type from a union type.

⚠️ **Does not guarantee correct order**.

**Example**

```ts
// 'c'
type Last = UnionLast<'a' | 'b' | 'c'>;
```

</td>
</tr>
<tr>
<td>

[UnionPop](utils/UnionPop.md)

</td>
<td>

Removes the last type from a union.

⚠️ **Does not guarantee correct order**.

**Example**

```ts
// 'a' | 'b'
type Popped = UnionPop<'a' | 'b' | 'c'>;
```

</td>
</tr>
<tr>
<td>

[UnionIntersection](utils/UnionIntersection.md)

</td>
<td>

Get the intersection of two union types, combining only the types that exist in both unions.

**Example**

```ts
// 'b'
type Result = UnionIntersection<'a' | 'b', 'b' | 'c'>;
```

</td>
</tr>
<tr>
<td>

[UnionExclusive](utils/UnionExclusive.md)

</td>
<td>

Creates a union of types that are exclusive to each other.

**Example**

```ts
// 'a' | 'c'
type Exclusive = UnionExclusive<'a' | 'b', 'b' | 'c'>;
```

</td>
</tr>
<tr>
<td>

[UnionToTuple](utils/UnionToTuple.md)

</td>
<td>

Converts a union type to a `Tuple`.

⚠️ **Does not guarantee correct order**.

**Example**

```ts
// ['a', 'b', 'c']
type Tupl = UnionToTuple<'a' | 'b' | 'c'>;
```

</td>
</tr>
<tr>
<td>

[ValueOf](utils/ValueOf.md)

</td>
<td>

Extracts the values of an `object` type.

**Example**

```ts
// Values is string | number
type Values = ValueOf<{ a: string; b: number }>;
```

</td>
</tr>
</tbody>
</table>
