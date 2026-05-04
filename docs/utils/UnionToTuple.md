[typelab](../README.md) / [utils](../utils.md) / UnionToTuple

```ts
type UnionToTuple<T> = _UnionToTuple<T, UnionLast<T>>;
```

Converts a union type to a `Tuple`.

⚠️ **Does not guarantee correct order**.

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

The union type.

</td>
</tr>
</tbody>
</table>

## Returns

A `Tuple` containing all the types in the union.

## Example

```ts
// ['a', 'b', 'c']
type Tupl = UnionToTuple<'a' | 'b' | 'c'>;
```
