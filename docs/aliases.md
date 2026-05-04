[typelab](README.md) / aliases

Handy TypeScript type aliases for everyday things like arrays,
objects, functions, and promises. It also includes special cases
like primitive, nullable, nullish, and undefinable types.

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

[Any](aliases/Any.md)

</td>
<td>

Type that refers to `any`.

Useful for bypass lint or type coverage checks.
Please use only in circumstances that require it.

See [\*this link\*](https://www.typescriptlang.org/docs/handbook/declaration-files/do-s-and-don-ts.html#any).

**Remarks**

Basically the same as TypeScript's built-in `any`.

**It's better to not use `any`**.

</td>
</tr>
<tr>
<td>

[Anything](aliases/Anything.md)

</td>
<td>

Type that refers to `any`.

Useful for bypass lint or type coverage checks.
Please use only in circumstances that require it.

See [\*this link\*](https://www.typescriptlang.org/docs/handbook/declaration-files/do-s-and-don-ts.html#any).

**Remarks**

Basically the same as TypeScript's built-in `any`.

**It's better to not use `any`**.

</td>
</tr>
<tr>
<td>

[Array](aliases/Array.md)

</td>
<td>

Type that represents an array with elements of type `T`.

**Example**

```ts
// MyArray is string[]
type MyArray = Array<string>;
```

</td>
</tr>
<tr>
<td>

[Arr](aliases/Arr.md)

</td>
<td>

Alias for [\`Array\`](aliases/Array.md).

</td>
</tr>
<tr>
<td>

[List](aliases/List.md)

</td>
<td>

Alias for [\`Array\`](aliases/Array.md).

</td>
</tr>
<tr>
<td>

[WritableArray](aliases/WritableArray.md)

</td>
<td>

Alias for [\`Array\`](aliases/Array.md).

</td>
</tr>
<tr>
<td>

[WritableArr](aliases/WritableArr.md)

</td>
<td>

Alias for [\`Array\`](aliases/Array.md).

</td>
</tr>
<tr>
<td>

[WritableList](aliases/WritableList.md)

</td>
<td>

Alias for [\`Array\`](aliases/Array.md).

</td>
</tr>
<tr>
<td>

[ReadonlyArray](aliases/ReadonlyArray.md)

</td>
<td>

Type that represents a read-only array with elements of type `T`.

**Example**

```ts
// MyReadonlyArray is readonly string[]
type MyReadonlyArray = ReadonlyArray<string>;
```

</td>
</tr>
<tr>
<td>

[ReadonlyArr](aliases/ReadonlyArr.md)

</td>
<td>

Alias for [\`ReadonlyArray\`](aliases/ReadonlyArray.md).

</td>
</tr>
<tr>
<td>

[ReadonlyList](aliases/ReadonlyList.md)

</td>
<td>

Alias for [\`ReadonlyArray\`](aliases/ReadonlyArray.md).

</td>
</tr>
<tr>
<td>

[Tuple](aliases/Tuple.md)

</td>
<td>

Type that represents a tuple, which is a fixed-length array of elements of type `T`.

**Example**

```ts
// MyTuple is [number, string]
type MyTuple = Tuple<[number, string]>;
```

</td>
</tr>
<tr>
<td>

[WritableTuple](aliases/WritableTuple.md)

</td>
<td>

Alias for [\`Tuple\`](aliases/Tuple.md).

</td>
</tr>
<tr>
<td>

[ReadonlyTuple](aliases/ReadonlyTuple.md)

</td>
<td>

Type that represents a read-only tuple, which is a fixed-length, immutable array of elements of type `T`.

**Example**

```ts
// MyReadonlyTuple is readonly [number, string]
type MyReadonlyTuple = ReadonlyTuple<[number, string]>;
```

</td>
</tr>
<tr>
<td>

[Class](aliases/Class.md)

</td>
<td>

Type that represents a class constructor that takes specified parameters types and returns an instance of a specified type.

**Example**

```ts
// C is a class
// with constructor(id: number, name: string)
// and {id: number, name: string} as instance and prototype
type C = Class<[id: number, name: string], {id: number, name: string}>;
```

</td>
</tr>
<tr>
<td>

[Falsy](aliases/Falsy.md)

</td>
<td>

Type that represents falsy value.

This includes `false`, `''`, `0`, `0n`, `null`, `undefined`, and `void`.

</td>
</tr>
<tr>
<td>

[Function](aliases/Function.md)

</td>
<td>

Type that represents a function that takes specified parameters types and returns a specified type.

**Example**

```ts
// MyFunction is (param_0: number, param_1: string) => string
type MyFunction = Function<[number, string], string>;
```

</td>
</tr>
<tr>
<td>

[Fn](aliases/Fn.md)

</td>
<td>

Alias for [\`Function\`](aliases/Function.md).

</td>
</tr>
<tr>
<td>

[AsyncFunction](aliases/AsyncFunction.md)

</td>
<td>

Type that represents an async function that takes specified parameters types and returns a specified type.

**Example**

```ts
// MyAsyncFunction is (param_0: number, param_1: string) => Promise<string>
type MyAsyncFunction = AsyncFunction<[number, string], string>;
```

</td>
</tr>
<tr>
<td>

[AsyncFn](aliases/AsyncFn.md)

</td>
<td>

Alias for [\`AsyncFunction\`](aliases/AsyncFunction.md).

</td>
</tr>
<tr>
<td>

[NewableFunction](aliases/NewableFunction.md)

</td>
<td>

Type that represents a newable function that takes specified parameters types and returns a specified type.

**Example**

```ts
// MyNewableFunction is new (param_0: number, param_1: string) => string`
type MyNewableFunction = NewableFunction<[number, string], string>;
```

</td>
</tr>
<tr>
<td>

[NewableFn](aliases/NewableFn.md)

</td>
<td>

Alias for [\`NewableFn\`](aliases/NewableFn.md).

</td>
</tr>
<tr>
<td>

[PositiveInfinity](aliases/PositiveInfinity.md)

</td>
<td>

Represents positive infinity in TypeScript as a constant value.

**Not a real type for javascript built-in `Infinity` or `Number.POSITIVE_INFINITY`**.

</td>
</tr>
<tr>
<td>

[NegativeInfinity](aliases/NegativeInfinity.md)

</td>
<td>

Represents negative infinity in TypeScript as a constant value.

**Not a real type for javascript built-in `-Infinity` or `Number.NEGATIVE_INFINITY`**.

</td>
</tr>
<tr>
<td>

[Infinity](aliases/Infinity.md)

</td>
<td>

Represents positive or negative infinity in TypeScript as a constant value.

**Not a real type for javascript built-in `Infinity` or `Number.POSITIVE_INFINITY`**.

**Not a real type for javascript built-in `-Infinity` or `Number.NEGATIVE_INFINITY`**.

</td>
</tr>
<tr>
<td>

[NonNullish](aliases/NonNullish.md)

</td>
<td>

Type that refers to `any` (non-null/undefined) value with zero or more properties.

See [this link](https://github.com/microsoft/TypeScript/wiki/FAQ#primitives-are---and---doesnt-mean-object).

**Example**

```ts
const example: NonNullish = true; // valid
const example2: NonNullish = true as boolean | null; // invalid
const example3: NonNullish = null || undefined; // invalid
```

</td>
</tr>
<tr>
<td>

[Nullable](aliases/Nullable.md)

</td>
<td>

Type that allows a value to be `T` or `null`.

**Example**

```ts
const example: Nullable<string> = null; // valid
const example2: Nullable<string> = undefined; // invalid
```

</td>
</tr>
<tr>
<td>

[Nullish](aliases/Nullish.md)

</td>
<td>

Type that allows a value to be `T`, `null`, or `undefined`.

**Example**

```ts
const example: Nullish = null; // valid
const example2: Nullish = undefined; // valid
```

</td>
</tr>
<tr>
<td>

[ObjectGeneric](aliases/ObjectGeneric.md)

</td>
<td>

Extended TypeScript [\`Record\`](#) to define a generic `object` type.

**Example**

```ts
// ObjNumber is { [x: string]: number; [x: number]: number; [x: symbol]: number; }
type ObjNumber = ObjectGeneric<number>;

const Valid: ObjNumber = { a: 1, b: 2 };
const Invalid: ObjNumber = { a: '1', b: '2' }; // Type 'string' is not assignable to type 'number'
```

</td>
</tr>
<tr>
<td>

[ObjectEmpty](aliases/ObjectEmpty.md)

</td>
<td>

Extended TypeScript [\`Record\`](#) to define a empty `object` type.

**Example**

```ts
// ObjEmpty is { [x: string]: never; [x: number]: never; [x: symbol]: never; }
type ObjEmpty = ObjectEmpty;

const Valid: ObjEmpty = {};
const Invalid: ObjEmpty = { a: 1 } // Type 'number' is not assignable to type 'never'
```

</td>
</tr>
<tr>
<td>

[ObjectArrayLike](aliases/ObjectArrayLike.md)

</td>
<td>

Extended TypeScript [\`Record\`](#) to define an `object` with `number` as key type.

**Example**

```ts
// ObjArrayLike is { [x: number]: string; }
type ObjArrayLike = ObjectArrayLike<string>;

const Valid: ObjArrayLike = { 0: 'first', 1: 'second' };
const Invalid: ObjArrayLike = { 0: 'first', a: 'second' }; // a is invalid key
```

</td>
</tr>
<tr>
<td>

[Primitive](aliases/Primitive.md)

</td>
<td>

Type that represents any primitive value.

This includes `boolean`, `string`, `number`, `bigint`, `symbol`, `null`, and `undefined`.

**Example**

```ts
const value1: Primitive = ""; // valid
const value2: Primitive = {}; // invalid
```

</td>
</tr>
<tr>
<td>

[Async](aliases/Async.md)

</td>
<td>

Built-in [\`Promise\`](#) with default type.

**Example**

```ts
// AsyncValue is Promise<string>
type AsyncValue = Async<string>;
```

</td>
</tr>
<tr>
<td>

[Undefinable](aliases/Undefinable.md)

</td>
<td>

Type that allows a value to be `T` or `undefined`.

**Example**

```ts
const example: Undefinable<string> = undefined; // valid
const example2: Undefinable<string> = null; // invalid
```

</td>
</tr>
<tr>
<td>

[Void](aliases/Void.md)

</td>
<td>

Type that refers to `void`.

Useful for bypass lint.

**Remarks**

Basically the same as TypeScript's built-in `void`.

**It's better to not use `void` outside a return type**.

</td>
</tr>
</tbody>
</table>
