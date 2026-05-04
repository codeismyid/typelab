[typelab](../README.md) / [utils](../utils.md) / UnionPop

```ts
type UnionPop<T> = Exclude<T, UnionLast<T>>;
```

Removes the last type from a union.

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

A new union with the last type removed.

## Example

```ts
// 'a' | 'b'
type Popped = UnionPop<'a' | 'b' | 'c'>;
```
