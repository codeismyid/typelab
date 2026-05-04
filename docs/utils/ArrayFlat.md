[typelab](../README.md) / [utils](../utils.md) / ArrayFlat

```ts
type ArrayFlat<T> = T extends ReadonlyArray ? _IfNotAnyOrNever<T, _ArrayFlat<T>> : never;
```

Type that flattens a nested `Array` structure into a single `Array`.
If an element is an `Array`, it will recursively flatten it until no `Array` remains.

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

The `Array` type to flatten.

</td>
</tr>
</tbody>
</table>

## Returns

A flattened version of the given `Array` type.

## Example

```ts
// [0, 1, 2, 3, 4, 5, 6, 7]
type Flattened1 = ArrayFlat<[0, 1, [2, 3, [4, 5, [6, 7[]]]]]>;

// (0 | 1 | 2 | 3 | 4 | 5 | 6 | 7)[]
type Flattened2 = ArrayFlat<(0 | 1 | [2] | [3] | [[4]] | [[5]] | [[[6]]] | [[[7[]]]])[]>;

// never
type Never = ArrayFlat<any>;
```
