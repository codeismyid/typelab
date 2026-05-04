[typelab](../README.md) / [utils](../utils.md) / UnionExclusive

```ts
type UnionExclusive<U1, U2> = Exclude<U1, U2> | Exclude<U2, U1>;
```

Creates a union of types that are exclusive to each other.

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

`U1`

</td>
<td>

The first union.

</td>
</tr>
<tr>
<td>

`U2`

</td>
<td>

The second union.

</td>
</tr>
</tbody>
</table>

## Returns

A union of types that excludes common types from both unions.

## Example

```ts
// 'a' | 'c'
type Exclusive = UnionExclusive<'a' | 'b', 'b' | 'c'>;
```
