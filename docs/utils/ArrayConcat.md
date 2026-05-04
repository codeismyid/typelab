[typelab](../README.md) / [utils](../utils.md) / ArrayConcat

```ts
type ArrayConcat<T1, T2> = T1 extends ReadonlyArray ? _IfNotAnyOrNever<T1, IfAny<T2, [...T1, Any], T2 extends ReadonlyArray ? [...T1, ...T2] : [...T1, T2]>> : never;
```

Concatenates two `Array` types into one.

## Type Parameters

<table>
<thead>
<tr>
<th>Type Parameter</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`T1`

</td>
</tr>
<tr>
<td>

`T2`

</td>
</tr>
</tbody>
</table>

## Template

The first `Array` type to concatenate.

## Template

The second `Array` type to concatenate.

## Returns

A new `Array` type that is the result of concatenating `A` and `B`.

## Example

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
