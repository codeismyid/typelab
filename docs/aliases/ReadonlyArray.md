[typelab](../README.md) / [aliases](../aliases.md) / ReadonlyArray

```ts
type ReadonlyArray<T> = readonly T[];
```

Type that represents a read-only array with elements of type `T`.

## Type Parameters

<table>
<thead>
<tr>
<th>Type Parameter</th>
<th>Default type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`T`

</td>
<td>

[`Any`](Any.md)

</td>
<td>

The type of the elements in the read-only array, defaults to `any`.

</td>
</tr>
</tbody>
</table>

## Example

```ts
// MyReadonlyArray is readonly string[]
type MyReadonlyArray = ReadonlyArray<string>;
```
