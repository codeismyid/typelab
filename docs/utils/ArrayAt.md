[typelab](../README.md) / [utils](../utils.md) / ArrayAt

```ts
type ArrayAt<T, Index> = T extends ReadonlyArray ? _IfNotAnyOrNever<T, PropValue<T, Index>> : never;
```

Extracts the type of an element at a specific index from an `Array` type.

## Type Parameters

<table>
<thead>
<tr>
<th>Type Parameter</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`T`

</td>
<td>

The `Array` type to extract from.

</td>
</tr>
<tr>
<td>

`Index`

</td>
<td>

The index of the element to extract.

</td>
</tr>
</tbody>
</table>

## Returns

The type of the element at index `I` from type `T`.

## Example

```ts
type ElementAt = ArrayAt<[string, number, boolean], 1>; // number
type Undefined = ArrayAt<[string, number, boolean], 3>; // undefined
type Never = ArrayAt<any, 1>; // never
```
